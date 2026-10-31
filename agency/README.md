# Support Triage — agent et automatisation

Trier une demande synthétique en accès, facturation ou revue humaine, proposer un brouillon fondé sur une fiche identifiée, puis enregistrer la décision une seule fois par événement. Ce module constitue une baseline déterministe avec outil de recherche, pas un agent LLM autonome. Il n'envoie aucun message et ne modifie aucun compte.

## Lancer

Prérequis : Node 22.22.2 (version réellement testée), npm; aucun `npm install` nécessaire. `node:sqlite` reste expérimental sur cette version. Pour une autre version majeure, vérifier la compatibilité et relancer les tests.

```powershell
npm test
npm run evaluate
$env:API_TOKEN = node -e "process.stdout.write(require('node:crypto').randomBytes(32).toString('hex'))"
npm start
```

Dans un second terminal, fournir le même secret par votre gestionnaire de secrets, sans le consigner dans Git :

```powershell
$payload = Get-Content -Raw -Encoding UTF8 agency/automations/intake/sample.json
Invoke-RestMethod http://localhost:7860/intake -Method Post -ContentType 'application/json; charset=utf-8' -Headers @{Authorization="Bearer $env:API_TOKEN"} -Body ([Text.Encoding]::UTF8.GetBytes($payload))
```

Le second terminal n'hérite pas automatiquement de la variable du premier. La sortie attendue est `duplicate=false`, `queue=billing`, `status=draft`, `sources=[KB-INVOICE]`. Rejouer exactement le même événement retourne `duplicate=true`. Changer le texte avec le même identifiant retourne 409.

## Contrat API

`GET /` et `GET /health` : 200 sans secret, métadonnées du service seulement.

`POST /intake` : `Authorization: Bearer <secret>`, JSON UTF-8, exactement `event_id` et `text`. Identifiant ASCII `[A-Za-z0-9_-]`, 1 à 80 caractères; texte non vide de 4 000 unités UTF-16 au maximum; corps de 16 384 octets au maximum. Aucun champ compte, email ou URL n'est accepté.

| HTTP | Signification | Action |
|---|---|---|
| 201 | Nouvelle décision enregistrée | Lire result, revue humaine |
| 200 | Événement identique déjà enregistré | Réutiliser result, ne pas déclencher un nouvel effet |
| 400 | Entrée invalide, JSON ou UTF-8 invalide | Corriger les données |
| 401 | Secret absent ou incorrect | Corriger la connexion |
| 409 | Même clé, texte différent | Examiner le conflit, aucun écrasement |
| 413 / 415 | Corps trop gros / mauvais type | Corriger le format |
| 500 | Erreur interne, dont stockage indisponible | Examiner le service, reprise bornée |

Réponse : `{duplicate:boolean,result:{event_id,queue,status,sources,draft,reason,trace}}`. Les statuts `draft` et `needs_review` n'autorisent jamais un envoi. L'erreur interne ne révèle ni chemin ni SQL.

## Comprendre, tester et déployer

- [Architecture, données et décision](docs/architecture.md)
- [Exercice et correction expliquée](docs/exercice.md)
- [Tests, sécurité et exploitation](docs/operations.md)
- [Hugging Face : déploiement manuel](docs/huggingface.md)
- [Make : montage et recette manuels](automations/intake/MAKE.md)
- [Références et versions](docs/sources.md)

État : exécutable Node et évaluations locales; build Docker non vérifié faute de daemon local. Aucun Space ni scénario Make publié ou exécuté. Pas de licence sélectionnée.
