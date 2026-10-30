import {test} from 'node:test';
import assert from 'node:assert/strict';
import {verifyGithubReceipt, digest} from '../scripts/verification.mjs';
const config = {lanes: {web: {repo: 'example'}}};
const receipt = {lane: 'web', date: '2026-10-30', sourceSha: 'a'.repeat(40), url: 'https://github.com/kadrianis/example/commit/' + 'a'.repeat(40), quality: {url: 'https://github.com/kadrianis/example/actions/runs/123'}, summary: 'API métier', lesson: 'Le test vérifie le contrat avant publication.'};
test('refuse un faux succès CI ou un run sur un autre commit', async () => {
  for (const run of [{head_sha: receipt.sourceSha, status: 'completed', conclusion: 'failure'}, {head_sha: 'b'.repeat(40), status: 'completed', conclusion: 'success'}, {head_sha: receipt.sourceSha, status: 'in_progress', conclusion: null}]) {
    await assert.rejects(verifyGithubReceipt(receipt, config, async path => path.includes('/commits/') ? {sha: receipt.sourceSha, html_url: receipt.url} : run));
  }
  const result = await verifyGithubReceipt(receipt, config, async path => path.includes('/commits/') ? {sha: receipt.sourceSha, html_url: receipt.url} : {head_sha: receipt.sourceSha, status: 'completed', conclusion: 'success'});
  assert.equal(result.verification, 'source-published');
});
test('pas de mail de succès sans publication; explicite les livraisons partielles', () => {
  const report = {date: receipt.date, cycle: {number: 1, day: 2}, lanes: {web: {status: 'source-published'}, mobile: {status: 'not-verified'}}, receipts: [{...receipt, verification: 'unverified'}]};
  assert.equal(digest(report), null);
  report.receipts.push({...receipt, verification: 'source-published'});
  const message = digest(report);
  assert.match(message.text, /mobile/);
  assert.match(message.text, /contrat/);
  assert.deepEqual(message.sourceShas, [receipt.sourceSha]);
  report.date = '2026-10-31';
  assert.equal(digest(report), null);
});
