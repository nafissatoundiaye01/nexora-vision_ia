export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-slate-900">NEXORA Vision IA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#problematique" className="text-slate-700 hover:text-blue-600 transition">Problématique</a>
              <a href="#solution" className="text-slate-700 hover:text-blue-600 transition">Solution</a>
              <a href="#fonctionnalites" className="text-slate-700 hover:text-blue-600 transition">Fonctionnalités</a>
              <a href="#impact" className="text-slate-700 hover:text-blue-600 transition">Impact</a>
              <a href="#financement" className="text-slate-700 hover:text-blue-600 transition">Financement</a>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Contactez-nous
            </button>
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
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
                Voir la démo
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition">
                Télécharger le pitch deck
              </button>
            </div>

            {/* Hero Image/Video Placeholder */}
            <div className="mt-16 relative">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl overflow-hidden border border-slate-300">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-slate-600 font-medium">Vidéo de démonstration</p>
                  </div>
                </div>
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
                NEXORA Vision IA
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
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-2xl p-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎥</div>
                    <p className="text-xl font-semibold">Caméras IA</p>
                    <p className="text-sm mt-2 opacity-90">Surveillance intelligente 24/7</p>
                  </div>
                </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
            {[
              { title: "Détection d'excès de vitesse", type: "Vidéo" },
              { title: "Reconnaissance de plaques", type: "Image" },
              { title: "Interface mobile conducteur", type: "Prototype" },
              { title: "Dashboard en temps réel", type: "Démo live" }
            ].map((demo, index) => (
              <div key={index} className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-lg overflow-hidden border border-slate-300 relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{demo.type}</span>
                  </div>
                </div>
              </div>
            ))}
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Technologie</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Stack Technique Moderne
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technologies de pointe pour une solution robuste et scalable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 transition">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Intelligence Artificielle</h3>
              <div className="space-y-4">
                {["TensorFlow / PyTorch", "YOLO / OpenCV", "OCR pour plaques", "Deep Learning"].map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-green-300 transition">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Backend & Cloud</h3>
              <div className="space-y-4">
                {["Node.js / Python", "PostgreSQL / MongoDB", "AWS / Azure", "API REST / GraphQL"].map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-cyan-300 transition">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Applications</h3>
              <div className="space-y-4">
                {["React / Next.js", "React Native / Flutter", "Tailwind CSS", "Mobile Money API"].map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-slate-700">{tech}</span>
                  </div>
                ))}
              </div>
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
              Pourquoi Financer NEXORA ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un projet à fort impact sociétal avec un retour sur investissement mesurable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Opportunité d'Investissement</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Marché en croissance",
                    desc: "Besoin urgent au Sénégal et exportable en Afrique (54 pays)"
                  },
                  {
                    title: "Modèle économique viable",
                    desc: "SaaS pour gouvernements + revenus d'amendes optimisés"
                  },
                  {
                    title: "Impact social mesurable",
                    desc: "Réduction des accidents et amélioration de la sécurité"
                  },
                  {
                    title: "Technologie brevetable",
                    desc: "Algorithmes IA propriétaires adaptés au contexte africain"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold">{idx + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
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

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez l'Aventure NEXORA</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Investissez dans une solution qui sauve des vies et transforme la mobilité en Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition transform hover:scale-105">
                Télécharger le Business Plan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-xl font-bold">NEXORA Vision IA</span>
              </div>
              <p className="text-slate-400">
                Révolutionner la sécurité routière en Afrique grâce à l'intelligence artificielle.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Produit</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition">Démo</a></li>
                <li><a href="#" className="hover:text-white transition">Technologie</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">À propos</a></li>
                <li><a href="#" className="hover:text-white transition">Équipe</a></li>
                <li><a href="#" className="hover:text-white transition">Carrières</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>contact@nexora-vision.sn</li>
                <li>+221 XX XXX XX XX</li>
                <li>Dakar, Sénégal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 NEXORA Vision IA. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
