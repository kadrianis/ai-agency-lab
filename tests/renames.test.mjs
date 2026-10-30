import {test} from 'node:test';
import assert from 'node:assert/strict';
import {canonicalGithubUrl, validateReceipt} from '../scripts/core.mjs';
import {verifyGithubReceipt} from '../scripts/verification.mjs';

const config = {owner:'kadrianis',repoAliases:{'business-automation':'ai-agency-lab'},lanes:{automation:{repo:'ai-agency-lab',target:'github'}}};
const sha = 'a'.repeat(40);
const receipt = {lane:'automation',platform:'github',date:'2026-10-30',sourceSha:sha,externalId:sha,url:`https://github.com/kadrianis/business-automation/commit/${sha}`,quality:{passed:true,url:'https://github.com/kadrianis/business-automation/actions/runs/123'},summary:'Source publiée',lesson:'Test',risk:'routine'};
test('conserve les preuves historiques après renommage explicite du dépôt', async () => {
  validateReceipt(receipt,config);
  const paths=[];
  const result=await verifyGithubReceipt(receipt,config,async path=>{
    paths.push(path);
    return path.includes('/commits/') ? {sha,html_url:`https://github.com/kadrianis/ai-agency-lab/commit/${sha}`} : {head_sha:sha,status:'completed',conclusion:'success'};
  });
  assert.equal(result.verification,'source-published');
  assert(paths.every(path=>path.startsWith('ai-agency-lab/')));
});
test('ne réécrit pas les URLs hors du compte autorisé et refuse un autre dépôt', () => {
  const foreign='https://github.com/another/business-automation/commit/'+sha;
  assert.equal(canonicalGithubUrl(foreign,config),foreign);
  assert.throws(()=>validateReceipt({...receipt,url:foreign},config));
  assert.throws(()=>validateReceipt({...receipt,quality:{passed:true,url:'https://github.com/kadrianis/unrelated/actions/runs/123'}},config));
});
