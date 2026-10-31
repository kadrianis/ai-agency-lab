# Hugging Face — paquet à déployer manuellement

État : sources prêtes, Dockerfile relu mais image non construite localement (daemon Docker indisponible). Aucun Space créé, paiement engagé ni URL publiée.

Au 31 octobre 2026, la documentation officielle Spaces indique qu'un compte personnel PRO est nécessaire pour créer un Docker Space; la page tarifaire affiche PRO à 9 USD/mois. Ne pas présumer ce déploiement gratuit, ni souscrire depuis ce guide sans décision explicite. Les comptes organisations et ressources supplémentaires ont d'autres conditions. Vérifier votre compte et le récapitulatif tarifaire avant toute action. Pour le moment, le service peut tourner localement sans abonnement ni appel modèle.

## Préparer et vérifier sur votre machine

Depuis la racine du projet (ou de l'archive sources) :

```powershell
docker build -f agency/Dockerfile -t support-triage:local .
docker run --rm -p 7860:7860 -e API_TOKEN support-triage:local
```

La variable API_TOKEN doit déjà être définie dans le terminal comme dans le README. Résultats à vérifier : GET `/health` retourne 200; POST sans secret 401; deux POST avec sample.json retournent 201 puis 200. Ces commandes Docker n'ont pas été exécutées avec succès ici. L'image Node est fixée par tag de version, pas par digest; vérifier le registre et les correctifs avant usage prolongé.

## Créer le Space après autorisation et vérification du compte

1. Choisir un nouveau Space Docker, visibilité adaptée, sans GPU nécessaire. Relire coûts et droits; s'arrêter si un achat serait nécessaire et non autorisé.
2. À la racine du dépôt Space, placer `agency/Dockerfile` sous le nom `Dockerfile`, `agency/SPACE-README.md` sous `README.md`, et conserver le dossier `agency` avec le code. Le COPY du Dockerfile exige ce dossier, pas seulement les fichiers server.mjs et agent.mjs.
3. Configurer `API_TOKEN` dans les secrets du Space, jamais dans le code. Conserver `app_port: 7860` dans le frontmatter du README. Le conteneur utilise l'utilisateur non root node.
4. Contrôler le build, les logs sans secret et l'URL réellement attribuée. La page racine montre les métadonnées JSON de l'API, pas une interface de chat.
5. Répéter la recette HTTP sur l'URL attribuée avec des données synthétiques. Ne pas publier le token dans la commande enregistrée ou une capture.

`DATA_DIR=/tmp/agency-data` est éphémère : reconstruction/remplacement peut perdre la base et la déduplication. Un redémarrage n'est pas une garantie de conservation. Ce paquet vise une démonstration, pas le stockage durable de demandes métier. Ne pas activer Make en production sur cette persistance. Une DB durable externe demanderait une adaptation PostgreSQL, des secrets et une autorisation séparée des coûts.

Retour arrière manuel : désactiver le scénario Make d'essai, mettre le Space en pause depuis son interface et conserver une copie privée du code et des données synthétiques utiles. Ne pas supprimer de ressources de façon automatique. Voir [sources vérifiées](sources.md).
