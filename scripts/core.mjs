import assert from 'node:assert/strict';

export function dateInParis(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit'}).format(now);
}
export function cycle(date, start) {
  for (const value of [date, start]) {
    assert.match(value, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(new Date(value).toISOString().slice(0, 10), value);
  }
  const elapsed = Math.floor((Date.parse(date) - Date.parse(start)) / 86400000);
  assert(elapsed >= 0, 'Date antérieure au début du programme');
  return {number: Math.floor(elapsed / 21) + 1, day: elapsed % 21 + 1};
}
export function phase(day) {
  return day <= 3 ? 'problème, parcours, squelette exécutable et tests' : day <= 7 ? 'fonction métier complète, API et persistance' : day <= 12 ? 'authentification, isolation et intégrations' : day <= 16 ? 'tests, sécurité, infrastructure et observabilité' : day <= 20 ? 'déploiement test, retours et corrections' : 'livraison MVP: démo accessible, tests verts, documentation et preuves';
}
// A receipt is a claim pending a platform-specific, independent read-back.
export function validateReceipt(r, config) {
  assert(config.lanes[r.lane], 'Parcours inconnu');
  assert.equal(r.platform, config.lanes[r.lane].target, 'Une archive GitHub ne vaut pas publication externe');
  assert.match(r.date, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(r.sourceSha, /^[a-f0-9]{40}$/);
  assert.equal(r.quality?.passed, true, 'Tests obligatoires');
  assert.equal(new URL(r.quality.url).protocol, 'https:');
  assert.equal(new URL(r.url).protocol, 'https:');
  assert(r.externalId && r.summary && r.lesson, 'Identifiant, résultat et explication requis');
  if (r.risk !== 'routine') assert(r.approvalUrl, 'Approbation explicite requise');
  if (r.platform === 'github') {
    const url = new URL(r.url);
    assert.equal(url.hostname, 'github.com');
    assert.equal(url.pathname, `/${config.owner}/${config.lanes[r.lane].repo}/commit/${r.sourceSha}`);
    const quality = new URL(r.quality.url);
    assert.equal(quality.hostname, 'github.com');
    assert.match(quality.pathname, new RegExp(`^/${config.owner}/${config.lanes[r.lane].repo}/actions/runs/[0-9]+$`));
  }
  return r;
}
