# Gaindé Zone

![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black?style=flat-square&logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4.4-blue?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.6.0-blue?style=flat-square&logo=typescript)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**Gaindé Zone** est une plateforme digitale dédiée aux JOJ Dakar 2026. Elle combine engagement citoyen, découverte culturelle et orientation sportive pour valoriser la jeunesse locale.

## Contexte

Ce projet est pensé pour transformer la participation aux Jeux Olympiques de la Jeunesse en une expérience active et responsable. Gaindé Zone met l'accent sur l'éco-citoyenneté, la découverte de la culture sénégalaise et l'identification de parcours sportifs adaptés.

## Fonctionnalités Clés

- **Dashboard Éco-Citoyen**
  - Points persistants en `localStorage` et évolution de profil utilisateur.
  - Validation de défis via une modale caméra simulée avec animation de chargement et succès.
  - Profil dynamique : `Lionceau Éco-Citoyen`, `Grand Gaindé`, `Super Gaindé`.

- **Carte Téranga interactive**
  - Carte SVG fluide de la côte sénégalaise avec points cliquables pour Dakar, Diamniadio et Saly.
  - Filtrage par zone et catégorie, transition de fondu sur les listes de lieux.
  - Informations détaillées sur les lieux, spécialités locales et transports propres.

- **Sport-Matcher**
  - Quiz en 3 étapes avec jauge de progression 33 / 66 / 100 %.
  - Algorithme de profilage simple pour recommander un sport des JOJ.
  - Résultat enrichi avec fiche descriptive, dates de l'événement et actions de partage/calendrier.

## Stack Technique

- **Next.js** 15.2.1 — App Router, structure moderne de pages et performances.
- **TypeScript** 5.6.0 — typage strict et sécurité dans tout le code.
- **React 18** — interactivité client avec composants `use client`.
- **Tailwind CSS** 3.4.4 — UI responsive et design maintenable.
- **Lucide React** — icônes cohérentes pour une interface claire.

## Architecture & Performance

- Approche **mobile-first** avec navigation desktop et barre de navigation basse sur mobile.
- Composants interactifs séparés pour isoler la logique client et éviter les erreurs SSR.
- Persistance utilisateur en `localStorage`, assurant un mode **offline-first** pour les scores et les sessions.
- Organisation propre des pages : `app/page.tsx`, `app/carte/page.tsx`, `app/sports/page.tsx`.

## Installation & Démarrage

```bash
git clone https://github.com/Royal-Ndr/projet-joj.git
cd "projet joj"
npm install
npm run dev
```

Puis ouvre :

- `http://localhost:3000`

## Roadmap

- [x] Dashboard de points persistants
- [x] Validation de défi par modal caméra simulée
- [x] Carte SVG interactive avec filtres
- [x] Quiz Sport-Matcher avec résultat personnalisé
- [ ] Carte dynamique basée sur une API cartographique
- [ ] Notifications géolocalisées pour défis urgents
- [ ] Passage en PWA pour un usage hors-ligne complet

## Contact & Crédits

- Auteur : **Royal-Ndr**
- Projet : **Gaindé Zone — JOJ Dakar 2026**
- Licence : **MIT**

Pour les contributions ou questions, ouvre une issue ou une pull request sur le dépôt GitHub.
