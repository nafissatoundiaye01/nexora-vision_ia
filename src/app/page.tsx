export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/nexora.jpg"
                alt="NEXORA Logo"
                className="h-12 w-auto "
              />
              <span className="text-xl font-bold text-slate-900">Vision IA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#problematique" className="text-slate-700 hover:text-blue-600 transition">Problématique</a>
              <a href="#solution" className="text-slate-700 hover:text-blue-600 transition">Solution</a>
              <a href="#fonctionnalites" className="text-slate-700 hover:text-blue-600 transition">Fonctionnalités</a>
              <a href="#impact" className="text-slate-700 hover:text-blue-600 transition">Impact</a>
              <a href="#financement" className="text-slate-700 hover:text-blue-600 transition">Financement</a>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition inline-block">
              Contactez-nous
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Innovation en Sécurité Routière
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Révolutionner la
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Sécurité Routière </span>
              au Sénégal
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Un système intelligent basé sur l'IA pour détecter, notifier et gérer automatiquement
              les infractions routières en temps réel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#demo" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 inline-block">
                Voir la démo
              </a>
              {/*<a
                href="/Projet_Digitalisation_Infractions_Routieres_Senegal.pdf"
                download="NEXORA_Vision_IA_Presentation.pdf"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition inline-block"
              >
                Télécharger le document
              </a>*/}
            </div>

            {/* Hero Video */}
            <div className="mt-12 relative max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden border border-slate-300">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "30K+", label: "Accidents par an au Sénégal" },
              { number: "60%", label: "Infractions non détectées" },
              { number: "15M+", label: "Véhicules en circulation" },
              { number: "100%", label: "Automatisation possible" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problématique Section */}
      <section id="problematique" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Le Contexte</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Une Problématique Critique
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              La gestion manuelle des infractions au Sénégal entraîne des défis majeurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "❌",
                title: "Manque de Traçabilité",
                description: "Les contrevenants sont difficiles à identifier et suivre. Absence de système centralisé."
              },
              {
                icon: "⚠️",
                title: "Corruption & Opacité",
                description: "Processus manuel favorisant les arrangements et le manque de transparence."
              },
              {
                icon: "⏱️",
                title: "Lenteur & Inefficacité",
                description: "Délais importants dans le traitement des infractions et le recouvrement des amendes."
              }
            ].map((problem, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-300 transition">
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-slate-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Notre Solution</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Vision IA
              </h2>
              <p className="text-xl text-slate-700 mb-8">
                Un système intelligent et automatisé qui transforme la gestion des infractions routières
                grâce à l'intelligence artificielle et la vision par ordinateur.
              </p>

              <div className="space-y-4">
                {[
                  "Détection automatique en temps réel",
                  "Reconnaissance de plaques d'immatriculation",
                  "Notifications instantanées aux conducteurs",
                  "Base de données centralisée et sécurisée",
                  "Paiement en ligne simplifié",
                  "Tableau de bord pour les autorités"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden max-h-[480px]">
                <img
                  src="/solution.jpg"
                  alt="Solution NEXORA Vision IA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Section */}
      <section id="fonctionnalites" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Fonctionnalités</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Un Écosystème Complet
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              5 composantes interconnectées pour une solution intelligente et efficace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎥",
                title: "Détection Automatisée",
                description: "Caméras intelligentes avec IA pour détecter les infractions en temps réel",
                features: ["Excès de vitesse", "Feu rouge", "Stationnement interdit", "Dépassement dangereux"]
              },
              {
                icon: "💾",
                title: "Base de Données Centralisée",
                description: "Stockage sécurisé de toutes les infractions avec historique complet",
                features: ["Données sécurisées", "Historique complet", "Recherche avancée", "Rapports détaillés"]
              },
              {
                icon: "📱",
                title: "App Mobile Conducteur",
                description: "Interface intuitive pour les conducteurs avec notifications en temps réel",
                features: ["Notifications push", "Paiement mobile", "Historique", "Conseils sécurité"]
              },
              {
                icon: "🖥️",
                title: "Dashboard Autorités",
                description: "Tableau de bord complet pour le suivi et l'analyse des infractions",
                features: ["Vue temps réel", "Statistiques", "Filtres avancés", "Export de données"]
              },
              {
                icon: "👮",
                title: "App Mobile Agents",
                description: "Outil terrain pour les agents de contrôle routier",
                features: ["Scan de plaques", "Signalement manuel", "Accès historique", "Mode offline"]
              },
              {
                icon: "🤖",
                title: "Intelligence Artificielle",
                description: "Algorithmes avancés pour l'analyse et la prédiction",
                features: ["Reconnaissance d'images", "Analyse prédictive", "Zones à risque", "Apprentissage continu"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-300 transition hover:-translate-y-1">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo/Research Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Démonstration</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Recherches & Prototypes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez nos travaux de recherche et démonstrations techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vidéo Détection d'excès de vitesse */}
            <div className="rounded-2xl shadow-lg overflow-hidden border border-slate-300 relative bg-black flex items-center justify-center h-[500px]">
              <video
                className="h-full w-auto object-contain"
                controls
                playsInline
              >
                <source src="/video-detection-infraction.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                <h3 className="text-white font-bold">Passage au feu rouge</h3>
                <span className="text-xs text-white/80">Vidéo</span>
              </div>
            </div>

            {/* Vidéo Détection de plaques */}
            <div className="rounded-2xl shadow-lg overflow-hidden border border-slate-300 relative bg-black flex items-center justify-center h-[500px]">
              <video
                className="h-full w-auto object-contain"
                controls
                playsInline
              >
                <source src="/video-reconnaissance-plaque.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                <h3 className="text-white font-bold">Détection de plaques</h3>
                <span className="text-xs text-white/80">à faible luminosité</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Benefits Section */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Bénéfices Clés
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une transformation complète de la sécurité routière au Sénégal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Automatisation",
                description: "100% automatisé",
                detail: "De la détection au paiement"
              },
              {
                icon: "🛡️",
                title: "Transparence",
                description: "Réduction corruption",
                detail: "Traçabilité complète"
              },
              {
                icon: "⏱️",
                title: "Gain de temps",
                description: "Processus instantané",
                detail: "Pour tous les acteurs"
              },
              {
                icon: "📊",
                title: "Données exploitables",
                description: "Analyses avancées",
                detail: "Planification optimale"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 transition">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{benefit.description}</div>
                <p className="text-slate-600">{benefit.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Impact Sociétal Majeur</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Réduction significative des accidents, amélioration de la discipline routière,
              et augmentation des revenus publics pour financer les infrastructures.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold">-40%</div>
                <div className="text-sm opacity-90">Accidents estimés</div>
              </div>
              <div>
                <div className="text-4xl font-bold">+300%</div>
                <div className="text-sm opacity-90">Efficacité de contrôle</div>
              </div>
              <div>
                <div className="text-4xl font-bold">100K+</div>
                <div className="text-sm opacity-90">Vies sauvées potentiellement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Recherche & Développement</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Intelligence Artificielle en Développement
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un modèle IA adapté au contexte africain, actuellement en phase de recherche et d'entraînement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Modèle Vision IA</h3>
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">En développement</span>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                Nous développons actuellement un modèle de détection d'objets,
                spécifiquement entraîné pour reconnaître :
              </p>
              <ul className="space-y-3">
                {[
                  "Plaques d'immatriculation sénégalaises",
                  "Véhicules et types de véhicules locaux",
                  "Infractions spécifiques au contexte africain",
                  "Conditions routières et environnement local"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Contexte Africain</h3>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Priorité</span>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                Notre approche se distingue par une adaptation complète au contexte local :
              </p>
              <ul className="space-y-3">
                {[
                  "Dataset avec images du Sénégal et d'Afrique",
                  "Reconnaissance des formats de plaques locales",
                  "Adaptation aux infrastructures routières africaines",
                  "Prise en compte des conditions d'éclairage tropicales"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Défis Techniques */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-200">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Défis Actuels de Développement</h3>
                <p className="text-slate-700">
                  Notre projet fait face à des contraintes techniques qui nécessitent un soutien financier
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💾",
                  title: "Manque de Données",
                  desc: "Besoin de milliers d'images annotées du contexte africain pour entraîner efficacement le modèle"
                },
                {
                  icon: "🖥️",
                  title: "Absence de GPU",
                  desc: "Tests en local limités sans GPU pour l'entraînement du modèle deep learning"
                },
                {
                  icon: "☁️",
                  title: "Plateformes Payantes",
                  desc: "Coût élevé des services cloud GPU pour l'entraînement IA"
                }
              ].map((challenge, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-red-200">
                  <div className="text-4xl mb-3">{challenge.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{challenge.title}</h4>
                  <p className="text-sm text-slate-600">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financement Section */}
      <section id="financement" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Investissement</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Pourquoi Financer Vision IA ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un projet à fort impact sociétal avec un retour sur investissement mesurable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">À Quoi Servira Votre Financement ?</h3>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                <p className="text-slate-700 text-sm leading-relaxed">
                  Votre investissement nous permettra de surmonter les barrières techniques actuelles et
                  d'accélérer considérablement le développement de notre solution IA.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: "💾",
                    title: "Collecte et Annotation de Données",
                    desc: "Créer un dataset de 50,000+ images annotées du contexte sénégalais et africain",
                    budget: "30%"
                  },
                  {
                    icon: "☁️",
                    title: "Infrastructure Cloud GPU",
                    desc: "Accès à des serveurs GPU puissants (AWS, Google Cloud) pour entraîner notre modèle",
                    budget: "35%"
                  },
                  {
                    icon: "🔬",
                    title: "Tests & Validation Terrain",
                    desc: "Caméras pilotes, équipements de test et validation sur routes réelles",
                    budget: "20%"
                  },
                  {
                    icon: "👥",
                    title: "Équipe de Développement",
                    desc: "Data scientists et ingénieurs IA spécialisés pour optimiser le modèle",
                    budget: "15%"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center border-2 border-blue-200 text-2xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">{item.budget}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Opportunité Unique</h4>
                    <p className="text-slate-700 text-sm">
                      Premier système IA de détection routière adapté au contexte africain.
                      Potentiel d'expansion vers 54 pays africains après validation au Sénégal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Roadmap de Développement</h3>
              <div className="space-y-6">
                {[
                  { phase: "Phase 1 - 6 mois", tasks: "Prototype IA + App Mobile MVP" },
                  { phase: "Phase 2 - 12 mois", tasks: "Pilote à Dakar + Intégration autorités" },
                  { phase: "Phase 3 - 18 mois", tasks: "Déploiement national Sénégal" },
                  { phase: "Phase 4 - 24 mois", tasks: "Expansion régionale Afrique" }
                ].map((phase, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-blue-500 last:border-transparent last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-50"></div>
                    </div>
                    <div className="font-bold text-slate-900 mb-1">{phase.phase}</div>
                    <div className="text-slate-600">{phase.tasks}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* État Actuel vs Avec Financement */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Impact du Financement sur le Projet</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sans financement */}
              <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">❌</span>
                  <h4 className="text-xl font-bold text-red-800">Sans Financement</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Développement très lent (2-3 ans)",
                    "Dataset limité (<1000 images)",
                    "Tests uniquement en simulation",
                    "Précision IA faible (~60%)",
                    "Pas d'infrastructure cloud",
                    //"Équipe réduite (bénévoles)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">s
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Avec financement */}
              <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-300 relative">
                <div className="absolute -top-3 right-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">OBJECTIF</span>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">✅</span>
                  <h4 className="text-xl font-bold text-green-800">Avec Votre Soutien</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "MVP opérationnel en 6 mois",
                    "Dataset robuste (50,000+ images)",
                    "Tests réels sur routes de Dakar",
                    "Précision IA élevée (>95%)",
                    "Infrastructure cloud scalable",
                    //"Équipe d'experts dédiée"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez l'Aventure Vision IA</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Investissez dans une solution qui sauve des vies et transforme la mobilité en Afrique.
              Votre soutien permettra de surmonter les obstacles techniques et d'accélérer le déploiement.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">6 mois</div>
                  <div className="text-sm opacity-90">Vers le MVP</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">54 pays</div>
                  <div className="text-sm opacity-90">Potentiel africain</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">100K+</div>
                  <div className="text-sm opacity-90">Vies sauvées</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
                Discuter du Projet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Discutons de Votre Projet
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Vous souhaitez en savoir plus sur Vision IA ou discuter d'une collaboration ?
              N'hésitez pas à nous contacter !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "📧",
                title: "Email",
                info: "nexora.dev.senegal@gmail.com",
                link: "mailto:nexora.dev.senegal@gmail.com"
              },
              {
                icon: "📱",
                title: "Téléphone",
                info: "+221 77 130 85 07",
                link: "tel:+221771308507"
              },
              {
                icon: "📍",
                title: "Localisation",
                info: "Dakar, Sénégal",
                link: null
              }
            ].map((contact, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
                <div className="text-5xl mb-4">{contact.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a href={contact.link} className="text-blue-600 hover:text-blue-700 transition">
                    {contact.info}
                  </a>
                ) : (
                  <p className="text-slate-600">{contact.info}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Envoyez-nous un Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full px-4 py-3 rounded-lg border text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full px-4 py-3 rounded-lg border text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
              <textarea
                placeholder="Votre message..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/nexora-logo.jpg"
                  alt="NEXORA Logo"
                  className="h-12 w-auto object-cover"
                />
                <span className="text-xl font-bold">Vision IA</span>
              </div>
              <p className="text-slate-400">
                Révolutionner la sécurité routière en Afrique grâce à l'intelligence artificielle.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#problematique" className="hover:text-white transition">Problématique</a></li>
                <li><a href="#solution" className="hover:text-white transition">Solution</a></li>
                <li><a href="#fonctionnalites" className="hover:text-white transition">Fonctionnalités</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">-</h4>
              <ul className="space-y-2 text-slate-400">
                 <li><a href="#impact" className="hover:text-white transition">Impact</a></li>
                 <li><a href="#financement" className="hover:text-white transition">Financement</a></li>
                 <li><a href="#contact" className="hover:text-white transition">Contactez-nous</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>nexora.dev.senegal@gmail.com</li>
                <li>+221 77 130 85 07</li>
                <li>Dakar, Sénégal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Powered by NEXORA. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition">;)</a>
              <a href="#" className="text-slate-400 hover:text-white transition">:(</a>
              <a href="#" className="text-slate-400 hover:text-white transition">:|</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
