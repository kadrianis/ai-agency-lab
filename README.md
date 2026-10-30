# AI Agency Lab

Portfolio technique d'agents IA et d'automatisations métier : sources, tests, démonstrations et documentation. Ce dépôt contient actuellement le code de pilotage du portfolio. Les prochaines réalisations techniques seront publiées sous agency/agents et agency/automations après tests; ces chemins cibles ne constituent pas encore des solutions livrées. Les guides HF/Make sont envoyés pour déploiement manuel. La construction commerciale de l'agence et son média font partie d'un dossier privé séparé.

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

Une seule tâche quotidienne à 08:30 Europe/Paris regroupe cinq blocs. Trois labs techniques publient leurs sources sur GitHub; deux blocs supplémentaires fournissent des dossiers privés par mail. Cycle produits : deux nouveaux MVP distincts web/mobile tous les 21 jours, avec critères et limites explicités.

| Bloc | Destination |
|---|---|
| Product Lab | [SaaS web](https://github.com/kadrianis/product-lab-web) et [SaaS mobile](https://github.com/kadrianis/product-lab-mobile) |
| Engineering Lab | [Mini-projets et infrastructure](https://github.com/kadrianis/engineering-lab) |
| AI Agency Lab | Ce dépôt : portfolio technique et orchestrateur |
| Amazon FBA Lab | Études France/USA/Canada et formation par mail, aucun dépôt |
| Personal Branding & AI Business Lab | Article Medium complet et stratégie d'agence par mail, aucun dépôt |

Ce dépôt central contient le plan, les tests de l'orchestrateur, les reçus de publication et un audit quotidien GitHub Actions. Les reçus sont vérifiés par relecture du commit et du run CI réussi sur le même SHA. L'audit ne génère pas de SaaS et ne prouve pas un déploiement applicatif.

Le mail est envoyé par la tâche Codex via une connexion Gmail séparée, lorsqu'elle est disponible; un fichier de mail préparé ne signifie jamais « envoyé ».

- [Organisation validée des cinq blocs](docs/ORGANISATION-5-BLOCS.md)
- [Comparaison des anciennes tâches](docs/ORGANISATION-ET-DOUBLONS.md)
- [Mode opératoire](docs/OPERATIONS.md)
- [Configuration des parcours](factory.config.json)
- [Exécutions des tests et audits](https://github.com/kadrianis/ai-agency-lab/actions)

Vérifier localement avec Node 22+ : `npm test`, puis `npm run audit` avec accès réseau GitHub. Aucun paquet tiers nécessaire. Ne jamais publier secrets, destinataire privé ni cache d'authentification.
