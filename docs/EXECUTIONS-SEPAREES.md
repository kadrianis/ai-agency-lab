# Cinq tâches, des chats séparés

À la demande de l'utilisateur, le 30/10/2026, l'ancienne tâche regroupée `usine-portfolio-publication-d-abord` est remplacée par cinq tâches autonomes locales, actives chaque jour à 08:30 Europe/Paris. Chaque exécution démarre un nouveau chat consacré uniquement à son lab : les questions et réponses ne se mélangent pas aux autres sujets. Les anciens chats ne sont pas supprimés.

| Lab | Identifiant de tâche |
|---|---|
| Product Lab — web et mobile | product-lab-saas-web-et-mobile |
| Engineering Lab | engineering-lab-architecture-cloud-et-s-curit |
| AI Agency Lab | ai-agency-lab-agents-et-automatisations |
| Amazon FBA Lab | amazon-fba-lab-france-usa-et-canada |
| Personal Branding & AI Business Lab | personal-branding-ai-business-lab-medium-et-agence |

Le cycle de 21 jours, les cinq programmes, les exigences pédagogiques et les règles de publication sont conservés. Les instructions de chaque tâche sont autonomes et renvoient aux documents et fichiers de progression durables; ne pas supposer que le nouveau chat contient la conversation initiale.

## Périmètre de chaque exécution

Chaque tâche ne réalise que son lab. Les dépôts sont distincts entre labs : Product utilise les deux dépôts SaaS, Engineering son dépôt, Agency son dépôt. Amazon et Branding ne poussent pas de dossiers privés sur GitHub. Chaque tâche utilise des répertoires de travail propres; ne pas modifier un checkout commun pendant l'exécution d'un autre lab. Aucune tâche ne relance ni ne reconfigure les quatre autres.

Les nouveaux résultats sont présentés dans le chat de leur exécution, avec preuves, cours et limites de ce lab. La conversation d'installation reste consultable, mais n'est plus la destination des cinq exécutions.

## Compte rendu par mail

La séparation des chats ne demande pas cinq mails : conserver un unique compte rendu quotidien regroupé. Chaque lab conserve son propre manifeste `.local/lab-runs/DATE/LAB.json`, avec statut completed ou blocked, chemins réels et preuves, sans modifier celui d'un autre. Les clés sont product, engineering, agency, amazon et branding.

La dernière tâche qui termine, lorsqu'elle constate les cinq manifestes du jour terminés ou bloqués, peut assembler le compte rendu. Vérifier le journal privé et les messages envoyés, puis acquérir un verrou exclusif atomique `.local/lab-runs/DATE/mail.lock` avant tout envoi. Ne pas prendre ce verrou tant que l'expéditeur demandé n'est pas réellement connecté. Si verrou déjà présent ou issue d'envoi inconnue, vérifier avant de renvoyer. Les sources restent publiées même si le mail est bloqué.

L'expéditeur et le destinataire autorisés restent dans les instructions privées des cinq tâches. Ne pas les publier ici. Un manifeste créé ne prouve pas un envoi; conserver l'identifiant Gmail après réussite. Ne pas produire un mail partiel pendant que les autres labs sont encore en cours. La prochaine tâche qui termine reprend la coordination à partir des manifestes.

Si un lab n'a pas encore tourné ou n'a pas enregistré de résultat, le mail reste en attente et ce manque est explicite; ne pas inventer sa livraison. La préparation et les publications des autres continuent. Les tâches locales nécessitent le projet disponible et l'application en fonctionnement.
