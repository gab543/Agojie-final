# Agojie — Cabinet de Conseil en Santé

Site institutionnel du cabinet de conseil en santé **Agojie**, bâti sur **Vite + React**.

## Stack

- **Vite** v8 + **React** 19
- **React Router** v7 (SPA multi-pages)
- **React Router Hash Link** (navigation par ancre)
- **Vanilla CSS** avec design system basé sur tokens CSS
- Animations via `IntersectionObserver` (hook `useInView`)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — Hero fullscreen, héritage, offres, méthode, piliers, CTA |
| `/a-propos` | Manifeste & vision — fondatrice, boussole éthique |
| `/expertises` | 6 domaines d'expertise + timeline méthode + KPIs |
| `/reserver` | Formulaire de contact avec sidebar |

## Démarrage local

```bash
npm install
npm run dev
```

Ouvre **http://localhost:5173**

## Build production

```bash
npm run build
npm run preview
```

---

**Palette** : Vert forêt `#1B2A2A` · Caramel `#B8936A` · Ivoire `#F2EFE8`
