# 🚦 NEXORA Vision IA

**Révolutionner la sécurité routière au Sénégal grâce à l'intelligence artificielle**

Site web de présentation du projet NEXORA Vision IA, un système intelligent de détection automatique des infractions routières pour digitaliser et automatiser la gestion des violations du code de la route au Sénégal.

---

## 📋 À propos du projet

NEXORA Vision IA est une solution innovante qui utilise la vision par ordinateur et l'intelligence artificielle pour :

- 🎯 **Détecter automatiquement** les infractions routières (feux rouges grillés, excès de vitesse, etc.)
- 📱 **Notifier instantanément** les conducteurs via une application mobile
- 💳 **Faciliter le paiement** des amendes en ligne
- 📊 **Centraliser les données** dans une base sécurisée
- 👮 **Équiper les agents** d'outils numériques de contrôle
- 🏛️ **Fournir aux autorités** un tableau de bord de supervision

### Impact attendu

- 🛡️ **-40%** de réduction des accidents estimés
- ⚡ **+300%** d'efficacité des contrôles
- 💚 **100 000+** vies potentiellement sauvées

---

## 🛠️ Stack technique

Ce site est construit avec les technologies les plus modernes :

### Frontend
- **[Next.js 16.0.1](https://nextjs.org)** - Framework React avec App Router
- **[React 19.2.0](https://react.dev)** - Bibliothèque UI
- **[TypeScript 5.x](https://www.typescriptlang.org)** - Typage statique

### Styling
- **[Tailwind CSS 4.x](https://tailwindcss.com)** - Framework CSS utility-first
- **[Lightning CSS](https://lightningcss.dev)** - Processeur CSS ultra-rapide
- **PostCSS** avec @tailwindcss/postcss

### Outils de développement
- **[Biome](https://biomejs.dev)** - Linting et formatage de code
- **[Turbopack](https://turbo.build)** - Bundler ultra-rapide
- **React Compiler** - Optimisation des performances React

### Déploiement
- Optimisé pour **[Netlify](https://www.netlify.com)** et **[Vercel](https://vercel.com)**
- Support cross-platform (Linux/Windows)

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18.x ou supérieur
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/nexora-vision-ia.git
cd nexora-vision-ia

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
# Créer un build optimisé
npm run build

# Lancer le serveur de production
npm start
```

### Linting et formatage

```bash
# Vérifier le code
npm run lint

# Formater le code
npm run format
```

---

## 📁 Structure du projet

```
nexora-vision-ia/
├── public/                          # Assets statiques
│   ├── nexora.jpg                  # Logo NEXORA
│   ├── solution.jpg                # Image de la solution
│   ├── hero-video.mp4              # Vidéo hero
│   ├── video-detection-infraction.mp4    # Démo détection feu rouge
│   ├── video-reconnaissance-plaque.mp4   # Démo reconnaissance plaque
│   └── videos-detection/           # Vidéos supplémentaires
│
├── src/
│   └── app/
│       ├── page.tsx                # Page principale
│       ├── layout.tsx              # Layout racine
│       ├── globals.css             # Styles globaux
│       └── favicon.ico             # Favicon
│
├── Configuration
│   ├── package.json                # Dépendances
│   ├── tsconfig.json               # Config TypeScript
│   ├── next.config.ts              # Config Next.js
│   ├── postcss.config.mjs          # Config PostCSS
│   └── biome.json                  # Config Biome
│
└── README.md                       # Ce fichier
```

---

## 🎨 Fonctionnalités du site

Le site présente 10 sections principales :

1. **Hero** - Vidéo de démonstration et statistiques clés
2. **Problématique** - Défis actuels de la gestion des infractions
3. **Solution** - Présentation de Vision IA
4. **Fonctionnalités** - 6 composantes du système
5. **Démo/Recherche** - Vidéos de démonstration
6. **Impact** - Bénéfices et impact sociétal
7. **Technologie** - Développement du modèle IA
8. **Financement** - Besoins et roadmap (24 mois)
9. **Contact** - Formulaire et coordonnées
10. **Footer** - Navigation et informations

---

## 🔧 Configuration spécifique

### Support cross-platform

Le projet utilise des dépendances optionnelles pour les packages spécifiques à Windows :

```json
"optionalDependencies": {
  "@tailwindcss/oxide-win32-x64-msvc": "^4.0.12",
  "lightningcss-win32-x64-msvc": "^1.30.2"
}
```

Cela permet le build sur des environnements Linux (comme Netlify) sans erreurs.

### React Compiler

Le React Compiler est activé dans `next.config.ts` pour optimiser les performances :

```typescript
const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
};
```

---

## 📞 Contact

**NEXORA Vision IA**

- 📧 Email : nexora.dev.senegal@gmail.com
- 📱 Téléphone : +221 77 130 85 07
- 📍 Localisation : Dakar, Sénégal

---

## 📄 Licence

Ce projet est développé par NEXORA pour révolutionner la sécurité routière en Afrique.

---

## 🤝 Contribution

Ce projet est actuellement en phase de recherche et développement. Pour toute opportunité de collaboration ou d'investissement, veuillez nous contacter.

---

## 🌍 Vision

Notre vision est de déployer NEXORA Vision IA dans les **54 pays africains** pour sauver des milliers de vies et transformer la gestion de la sécurité routière sur le continent.

**Ensemble, bâtissons un avenir plus sûr sur nos routes ! 🚗💨**
