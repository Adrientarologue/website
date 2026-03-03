# Site professionnel - Accompagnement spirituel

Site web Next.js (App Router) pour un praticien en accompagnement spirituel spécialisé dans les problématiques amoureuses : retour affectif, guidance sentimentale, désenvoûtement.

## Stack

- Next.js + React + TypeScript
- Tailwind CSS
- Framer Motion
- API Route avec Nodemailer
- SEO App Router (metadata, Open Graph, `sitemap.xml`, `robots.txt`)

## Démarrage local

```bash
npm install
npm run dev
```

Application disponible sur `http://localhost:3000`.

## Variables d’environnement

Créer un fichier `.env.local` à partir de `.env.example`.

Variables requises pour l’envoi d’email :

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO` (optionnel, fallback sur l’email principal)

## Scripts utiles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Déploiement Vercel

Le projet est prêt pour Vercel.

1. Importer le dépôt sur Vercel.
2. Ajouter les variables d’environnement SMTP.
3. Déployer.

## Arborescence principale

- `src/app`: pages, routes API, SEO routes
- `src/components`: UI modulaire réutilisable
- `src/data/testimonials.json`: témoignages dynamiques
- `src/config/site.ts`: configuration globale du site
