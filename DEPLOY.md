# Déploiement — Gaindé Zone (Guide rapide)

Ce guide explique comment déployer l'application Next.js `Gaindé Zone` sur Vercel (recommandé), étape par étape.

Prérequis
- Compte GitHub
- Compte Vercel (https://vercel.com)
- Node.js et npm installés localement

Étapes rapides

1. Initialiser un dépôt Git local (si nécessaire) :

```bash
git init
git add .
git commit -m "Initial import - Gaindé Zone"
```

2. Pousser vers GitHub :

```bash
# Créez le repo sur GitHub, puis :
git remote add origin https://github.com/<votre-utilisateur>/<votre-repo>.git
git branch -M main
git push -u origin main
```

3. Importer sur Vercel (interface web) :

- Ouvrez https://vercel.com/import/git
- Connectez votre compte GitHub et sélectionnez le dépôt ` <votre-utilisateur>/<votre-repo>`
- Laissez les réglages par défaut pour un projet Next.js (Vercel détecte `next` automatiquement)
- Déployez

Lien d'import Vercel (modifiez pour votre repo) :

```
https://vercel.com/import/git?repo=https://github.com/<votre-utilisateur>/<votre-repo>
```

4. Option de déploiement via `Vercel CLI` :

```bash
npm i -g vercel
vercel login
vercel --prod
```

Remarques importantes
- J'ai ajouté `vercel.json` pour une configuration standard Next.js.
- Si vous souhaitez que je déclenche le déploiement pour vous, fournissez l'URL du dépôt GitHub (ou accordez-moi l'accès) — je ne peux pas créer le repo ou déployer sans vos identifiants/permissions.

Support après déploiement
- Si le build Vercel affiche des erreurs, copiez-collez les logs et je corrigerai rapidement.
- Je peux aussi préparer une PR avec un changelog et instructions de rollback si vous voulez.
