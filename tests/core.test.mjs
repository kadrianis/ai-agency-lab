import {test} from 'node:test';
import assert from 'node:assert/strict';
import {cycle, dateInParis, validateReceipt} from '../scripts/core.mjs';

test('21 jours, changement de cycle et passage heure hiver', () => {
  assert.deepEqual(cycle('2026-11-18', '2026-10-29'), {number: 1, day: 21});
  assert.deepEqual(cycle('2026-11-19', '2026-10-29'), {number: 2, day: 1});
  assert.equal(dateInParis(new Date('2026-10-29T23:30:00Z')), '2026-10-30');
  assert.throws(() => cycle('2026-10-28', '2026-10-29'));
  assert.throws(() => cycle('2026-02-30', '2026-01-01'));
});
test('refuse faux succès, mauvaise plateforme, absence de qualité et risque non approuvé', () => {
  const config = {owner: 'kadrianis', lanes: {web: {target: 'github', repo: 'ai-business-platform'}}};
  const sha = 'a'.repeat(40);
  const r = {lane: 'web', platform: 'github', date: '2026-10-29', sourceSha: sha, externalId: sha, url: `https://github.com/kadrianis/ai-business-platform/commit/${sha}`, quality: {passed: true, url: 'https://github.com/kadrianis/ai-business-platform/actions/runs/123'}, summary: 'test', lesson: 'test', risk: 'routine'};
  assert.equal(validateReceipt(r, config), r);
  assert.throws(() => validateReceipt({...r, platform: 'medium'}, config));
  assert.throws(() => validateReceipt({...r, quality: {passed: false}}, config));
  assert.throws(() => validateReceipt({...r, risk: 'paid-cloud'}, config));
  assert.throws(() => validateReceipt({...r, url: 'https://example.com'}, config));
});
