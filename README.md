# AI Agency Lab

Portfolio technique d’agents IA et d’automatisations métier réutilisables.

## Périmètre

- Agents : outils, orchestration, gestion des erreurs et évaluations.
- Automatisations : traitement de données, intégrations et scénarios métier.
- Qualité : tests reproductibles, jeux de données synthétiques et limites documentées.

## État du dépôt

Le module [Support Triage](agency/README.md) livre un agent borné à règles explicites, un outil de recherche dans deux fiches synthétiques, une API authentifiée et une automatisation de réception avec déduplication SQLite. Aucun modèle de langage, réponse client envoyée ou intégration externe active.

Avec Node 22.22.2 : `npm test`, puis `npm run evaluate`. Aucun paquet tiers à installer. Les sources sont dans `agency/agents` et `agency/automations`; les guides Hugging Face et Make décrivent les opérations manuelles restantes et leurs limites.

## Licence

Aucune licence sélectionnée à ce stade.
