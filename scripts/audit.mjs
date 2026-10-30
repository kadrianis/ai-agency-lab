import {readFile, readdir, mkdir, writeFile} from 'node:fs/promises';
import {cycle, dateInParis, phase, validateReceipt} from './core.mjs';
import {verifyGithubReceipt, digest} from './verification.mjs';

const config = JSON.parse(await readFile('factory.config.json', 'utf8'));
const date = dateInParis();
const current = cycle(date, config.startDate);
const headers = {'Accept': 'application/vnd.github+json', 'User-Agent': 'kadrianis-portfolio-factory'};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
async function github(path) {
  const response = await fetch(`https://api.github.com/repos/${config.owner}/${path}`, {headers, signal: AbortSignal.timeout(20000)});
  if (!response.ok) throw new Error(`GitHub HTTP ${response.status}`);
  return response.json();
}
const repositories = {};
for (const repo of new Set(Object.values(config.lanes).map(l => l.repo))) {
  try {
    const meta = await github(repo);
    const commit = await github(`${repo}/commits/${meta.default_branch}`);
    repositories[repo] = {status: 'accessible', sha: commit.sha, url: commit.html_url};
  } catch (error) { repositories[repo] = {status: 'blocked', reason: error.message}; }
}
const receipts = [];
const receiptKeys = new Set();
for (const file of (await readdir('receipts')).filter(f => f.endsWith('.json'))) {
  const r = validateReceipt(JSON.parse(await readFile(`receipts/${file}`, 'utf8')), config);
  const key = `${r.date}/${r.lane}`;
  if (receiptKeys.has(key)) throw new Error(`Reçu dupliqué : ${key}`);
  receiptKeys.add(key);
  let verification = 'unverified';
  let reason = 'Vérification indépendante sur la plateforme requise';
  if (r.platform === 'github') {
    try {
      const result = await verifyGithubReceipt(r, config, github);
      verification = result.verification;
      reason = result.reason;
    } catch (error) { reason = error.message; }
  }
  receipts.push({...r, verification, reason});
}
const report = {date, cycle: current, phase: phase(current.day), repositories, receipts,
  lanes: Object.fromEntries(Object.entries(config.lanes).map(([key, lane]) => [key, {target: lane.target, blocker: lane.blocker ?? null, status: receipts.some(r => r.date === date && r.lane === key && r.verification === 'source-published') ? 'source-published' : 'not-verified'}]))};
await mkdir('reports', {recursive: true});
await writeFile(`reports/${date}.json`, JSON.stringify(report, null, 2) + '\n');
const lines = [`# Production du ${date}`, '', `Cycle ${current.number}, jour ${current.day}/21 : ${report.phase}.`, '', 'Ce rapport contrôle les accès et les preuves. Il ne génère pas les produits.', '', '| Parcours | État | Blocage connu |', '|---|---|---|'];
for (const [key, lane] of Object.entries(report.lanes)) lines.push(`| ${key} | ${lane.status} | ${lane.blocker ?? 'Production et tests à effectuer'} |`);
for (const r of receipts.filter(r => r.date === date && r.verification === 'source-published')) lines.push('', `## ${r.lane}`, '', `[Source publiée](${r.url})`, '', r.summary, '', `Apprentissage après publication : ${r.lesson}`);
await writeFile(`reports/${date}.md`, lines.join('\n') + '\n');
// Preparing a digest is not sending an email. Recipient and credentials stay private.
const message = digest(report);
await writeFile(`reports/${date}.email.json`, JSON.stringify({deliveryStatus: 'not-sent', message}, null, 2) + '\n');
console.log(`Rapport créé : reports/${date}.md. ${receipts.filter(r => r.verification === 'source-published').length} preuve(s) de source vérifiée(s).`);
