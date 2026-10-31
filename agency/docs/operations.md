# Tests, sécurité et exploitation

## Résultats vérifiés

Node v22.22.2, Windows : `npm test` réussit, 4/4 tests, 0 ignoré. `npm run evaluate` réussit : 8/8 cas synthétiques. Un premier essai HTTP était interdit par le sandbox; la réexécution avec accès loopback a réussi. Les durées de test ne constituent pas un benchmark. La CI exécute les mêmes commandes sous Linux avec la même version de Node; consulter le run du SHA concerné pour son statut réel.

Premier run conteneur : image construite, puis connexion HTTP réinitialisée pendant le démarrage. La sonde ne reprenait que les connexions refusées; la reprise a été élargie aux erreurs transitoires curl, toujours bornée à 12 tentatives supplémentaires. Les assertions suivantes exigent toujours les vrais codes et le contenu attendu; elles ne sont ni ignorées ni remplacées par un succès forcé.

| Niveau | Preuve |
|---|---|
| Unité | Citation, abstention, entrée vide/trop longue, secret faible |
| Intégration DB | Fichier temporaire, fermeture/réouverture, replay, conflit préservant la décision initiale, schéma d'entrée strict |
| HTTP réel | Santé, 401, 415, JSON/UTF-8 invalide, 400, 404, 413, huit requêtes concurrentes : une 201 et sept 200, conflit 409 |
| Évaluation | Huit entrées avec file, statut et sources attendus |
| Conteneur CI | Job configuré pour construire Docker, vérifier santé, 401, création 201 puis replay 200; résultat à vérifier sur le SHA publié |
| Externe | Docker local non construit : daemon absent; HF et Make non exécutés |

## Sécurité

Secret d'au moins 32 octets, généré aléatoirement; comparaison de longueur puis `timingSafeEqual`. La longueur minimale seule ne garantit pas l'entropie. Ne jamais le mettre dans un blueprint public, une URL, une capture ou un journal. HTTPS doit être assuré par la plateforme en dehors du loopback. Un seul secret partagé, aucun rôle, tenant ou séparation multi-client. Absence de CORS volontaire; utiliser un appel serveur à serveur.

Le corps est limité avant parsing; UTF-8 invalide refusé; SQL paramétré, champs supplémentaires refusés, aucune URL téléchargée et aucune commande exécutée depuis une demande. Aucun texte utilisateur ni token n'est journalisé par le code. Les journaux du proxy ou de Make peuvent néanmoins contenir données et secrets selon configuration; utiliser des données synthétiques et vérifier leur politique de rétention. Pas de client réel, pas d'audit RGPD complet ni revendication de conformité.

Limites : pas de quotas, limitation de débit, rotation automatisée, chiffrement applicatif, back-office de revue, alertes ou stratégie de rétention. L'agent peut proposer une mauvaise catégorie sur négations/paraphrases et s'abstenir à tort. Aucun déploiement de production acceptable sans ces contrôles adaptés. La base non chiffrée et son hash doivent rester privés. `node:sqlite` est expérimental sur la version testée.

## Observer et reprendre

Vérifier `/health`, codes HTTP et disponibilité du disque; ne pas se contenter d'un 200 santé pour conclure que SQLite est accessible. Une erreur 500 nécessite diagnostic local (droits, espace, verrou), sans renvoyer de stack au client. Retenter au maximum deux fois après délai 1 puis 2 secondes avec la même clé; ce protocole de reprise appartient à l'appelant et n'est pas un worker livré. Ne pas retenter automatiquement les erreurs 400, 401, 409, 413, 415.

Pour sauvegarder cette démo mono-instance : arrêter le processus proprement, copier le dossier DATA_DIR vers un emplacement privé, puis relancer. Restauration : arrêter, conserver une copie du dossier courant, restaurer la copie dans un nouveau DATA_DIR, démarrer avec ce chemin et rejouer un événement synthétique pour vérifier duplicate=true. Le test prouve la persistance après réouverture, pas une procédure de restauration de production complète. Aucun script de suppression fourni.

Retour arrière : arrêter le service, revenir à une version de code connue compatible avec le schéma v1, conserver la base. Une future migration devra fournir sa propre stratégie; ne pas rétrograder un schéma inconnu. Désactiver le scénario Make d'essai avant de modifier son endpoint ou son secret.
