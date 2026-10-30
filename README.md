# AI Agency Lab — Orchestration du portfolio

Créer des agents IA, des automatisations et des offres pouvant être vendues à des clients. Ce dépôt contient actuellement le code de pilotage du portfolio. Les prochains livrables techniques du lab seront publiés sous agency/agents, agency/automations et agency/offers après tests; ces dossiers cibles ne constituent pas encore des solutions livrées. Les fichiers et guides HF/Make sont envoyés par mail pour déploiement manuel; l'article Medium reste un livrable indépendant par mail.

## Overview

This repository is part of my AI & Cloud Native Engineering portfolio.

## Goals

- Build real-world solutions
- Apply production-ready engineering practices
- Learn through implementation
- Document architecture and technical decisions
- Develop reusable solutions for businesses

## Structure

Each project will include:

- Source code
- Documentation
- Local execution instructions
- Automated tests
- Architecture explanations
- Future improvements

## Technology

.NET, Azure, Docker, Kubernetes, Python, AI Agents,
GitHub Actions, OpenTelemetry and related technologies.

## Status

Orchestrateur implémenté et testé. Les agents, scénarios Make et offres commerciales sont des parcours de production; leur disponibilité n'est pas attestée par ce seul dépôt.

## Security

Do not commit secrets, credentials or private customer data.

## License

No license has been selected yet.

## Production quotidienne du portfolio

La tâche Codex construit, teste et publie les sources des SaaS et labs sur GitHub, puis prépare un compte rendu pédagogique après vérification. Quatre dépôts restent actifs : les SaaS web/mobile, Engineering Lab et cet orchestrateur. Cycle : deux nouveaux MVP distincts (web et mobile) tous les 21 jours. Les autres plateformes reçoivent des livrables par mail, à publier manuellement.

Ce dépôt central contient le plan, les tests de l'orchestrateur, les reçus de publication et un audit quotidien GitHub Actions. Les reçus sont vérifiés par relecture du commit et du run CI réussi sur le même SHA. L'audit ne génère pas de SaaS et ne prouve pas un déploiement applicatif.

Le mail est envoyé par la tâche Codex via une connexion Gmail séparée, lorsqu'elle est disponible; un fichier de mail préparé ne signifie jamais « envoyé ».

- [Organisation des trois labs et comparaison des anciennes tâches](docs/ORGANISATION-ET-DOUBLONS.md)
- [Mode opératoire](docs/OPERATIONS.md)
- [Configuration des parcours](factory.config.json)
- [Exécutions des tests et audits](https://github.com/kadrianis/business-automation/actions)

Vérifier localement avec Node 22+ : `npm test`, puis `npm run audit` avec accès réseau GitHub. Aucun paquet tiers nécessaire. Ne jamais publier secrets, destinataire privé ni cache d'authentification.
