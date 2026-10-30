export async function verifyGithubReceipt(r, config, github) {
  const repo = config.lanes[r.lane].repo;
  const commit = await github(`${repo}/commits/${r.sourceSha}`);
  if (commit.sha !== r.sourceSha || commit.html_url !== r.url) throw new Error('Commit non confirmé');
  const runId = new URL(r.quality.url).pathname.split('/').at(-1);
  const run = await github(`${repo}/actions/runs/${runId}`);
  if (run.head_sha !== r.sourceSha || run.status !== 'completed' || run.conclusion !== 'success') {
    throw new Error('La CI ne prouve pas le succès du commit publié');
  }
  return {verification: 'source-published', reason: 'Commit relu et CI réussie sur ce SHA; aucun déploiement applicatif déduit'};
}

export function digest(report) {
  const verified = report.receipts.filter(r => r.date === report.date && r.verification === 'source-published');
  if (!verified.length) return null;
  const missing = Object.entries(report.lanes).filter(([, lane]) => lane.publicationMode !== 'manual-email' && lane.status !== 'source-published').map(([name]) => name);
  const manual = Object.entries(report.lanes).filter(([, lane]) => lane.publicationMode === 'manual-email').map(([name]) => name);
  const subject = `Publication GitHub effectuée — ${report.date} — ${verified.map(r => r.lane).join(', ')}`;
  const lines = [`Cycle ${report.cycle.number}, jour ${report.cycle.day}/21.`, '', 'Les sources suivantes ont été publiées sur GitHub et leur CI a réussi.'];
  for (const r of verified) lines.push('', `Sujet : ${r.summary}`, `Publication : ${r.url}`, `Tests : ${r.quality.url}`, '', 'Explication :', r.lesson);
  if (missing.length) lines.push('', `Parcours sans livraison vérifiée aujourd'hui : ${missing.join(', ')}.`);
  if (manual.length) lines.push('', `Publication manuelle par l'utilisateur : ${manual.join(', ')}. Ajouter au mail les paquets privés réellement prêts; cet audit ne vérifie pas leur préparation ni leur publication externe.`);
  lines.push('', 'Publication du code vérifiée. Aucun hébergement applicatif ni déploiement cloud n’est déduit de ce mail.');
  return {key: `portfolio-${report.date}`, subject, text: lines.join('\n'), sourceShas: verified.map(r => r.sourceSha)};
}
