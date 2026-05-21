# Gaindé Zone

Application Next.js + TypeScript + Tailwind CSS pour les JOJ Dakar 2026.

## Structure principale

- `package.json` - dépendances et scripts
- `tsconfig.json` - configuration TypeScript
- `tailwind.config.ts` - configuration Tailwind
- `postcss.config.js` - PostCSS configuration
- `app/layout.tsx` - layout principal avec navigation mobile/desktop
- `app/page.tsx` - page d’accueil avec tableau de bord et défis
- `app/carte/page.tsx` - page Carte culturelle & événements
- `app/sports/page.tsx` - page Sport-Matcher interactive
- `components/BottomNav.tsx` - barre de navigation mobile
- `components/SideNav.tsx` - barre latérale desktop
- `components/Badge.tsx` - composant badge
- `components/CardDefi.tsx` - composant de carte de défi

## Commandes

```bash
cd "C:\Users\HP 840 G8\Desktop\projet joj"
npm install
npm run dev
```

## Notes

- Le projet utilise `lucide-react` pour les icônes.
- Le quiz Sport-Matcher est géré avec `use client`.
- La page carte utilise un filtre de catégories et des fiches d’événements.
