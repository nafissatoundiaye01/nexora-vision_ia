import { getAllVideos } from '@/lib/videos';
import ProtectedVideo from '@/components/ProtectedVideo';

export default function Home() {
  const { heroVideos, feuxRougeVideos, sansCasqueVideos, surveillanceVideos, telephoneVolantVideos } = getAllVideos();

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
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
                Innovation en Sécurité Routière
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
            {heroVideos.length > 0 && (
              <div className="mt-12 relative max-w-4xl mx-auto">
                <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden border border-slate-300">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={heroVideos[0]} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
              </div>
            )}
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
                icon: <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Manque de Traçabilité",
                description: "Les contrevenants sont difficiles à identifier et suivre. Absence de système centralisé."
              },
              {
                icon: <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
                title: "Corruption & Opacité",
                description: "Processus manuel favorisant les arrangements et le manque de transparence."
              },
              {
                icon: <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Lenteur & Inefficacité",
                description: "Délais importants dans le traitement des infractions et le recouvrement des amendes."
              }
            ].map((problem, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-300 transition">
                <div className="flex justify-center mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{problem.title}</h3>
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
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
                title: "Détection Automatisée",
                description: "Caméras intelligentes avec IA pour détecter les infractions en temps réel",
                features: ["Excès de vitesse", "Feu rouge", "Stationnement interdit", "Dépassement dangereux"]
              },
              {
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
                title: "Base de Données Centralisée",
                description: "Stockage sécurisé de toutes les infractions avec historique complet",
                features: ["Données sécurisées", "Historique complet", "Recherche avancée", "Rapports détaillés"]
              },
              {
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                title: "App Mobile Conducteur",
                description: "Interface intuitive pour les conducteurs avec notifications en temps réel",
                features: ["Notifications push", "Paiement mobile", "Historique", "Conseils sécurité"]
              },
              {
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                title: "Dashboard Autorités",
                description: "Tableau de bord complet pour le suivi et l'analyse des infractions",
                features: ["Vue temps réel", "Statistiques", "Filtres avancés", "Export de données"]
              },
              {
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                title: "App Mobile Agents",
                description: "Outil terrain pour les agents de contrôle routier",
                features: ["Scan de plaques", "Signalement manuel", "Accès historique", "Mode offline"]
              },
              {
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
                title: "Intelligence Artificielle",
                description: "Algorithmes avancés pour l'analyse et la prédiction",
                features: ["Reconnaissance d'images", "Analyse prédictive", "Zones à risque", "Apprentissage continu"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-300 transition hover:-translate-y-1">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-slate-600 mb-4 text-center">{feature.description}</p>
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
              Capacités de Détection IA
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Notre système détecte automatiquement plusieurs types d'infractions en temps réel
            </p>
          </div>

          {/* Détection d'Infractions */}
          {(feuxRougeVideos.length > 0 || sansCasqueVideos.length > 0 || telephoneVolantVideos.length > 0) && (
            <div className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">Détection d'Infractions</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {/* Feux rouges */}
                {feuxRougeVideos.map((video, index) => (
                  <ProtectedVideo
                    key={`feux-${index}`}
                    src={video}
                    showLabel={false}
                  />
                ))}

                {/* Sans casque */}
                {sansCasqueVideos.map((video, index) => (
                  <ProtectedVideo
                    key={`casque-${index}`}
                    src={video}
                    showLabel={false}
                  />
                ))}

                {/* Téléphone au volant */}
                {telephoneVolantVideos.map((video, index) => (
                  <ProtectedVideo
                    key={`tel-${index}`}
                    src={video}
                    showLabel={false}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Surveillance & Tracking */}
          {surveillanceVideos.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">Surveillance & Tracking</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {surveillanceVideos.map((video, index) => (
                  <ProtectedVideo
                    key={index}
                    src={video}
                    showLabel={true}
                    label={`Surveillance #${index + 1}`}
                    subtitle="Tracking automatique"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Capacités Avancées de Vision IA</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Ces démonstrations illustrent la puissance de notre système de détection automatique.
              Notre IA continue d'évoluer pour détecter encore plus d'infractions et améliorer la sécurité routière.
            </p>
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
                icon: <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: "Automatisation",
                description: "100% automatisé",
                detail: "De la détection au paiement"
              },
              {
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                title: "Transparence",
                description: "Réduction corruption",
                detail: "Traçabilité complète"
              },
              {
                icon: <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Gain de temps",
                description: "Processus instantané",
                detail: "Pour tous les acteurs"
              },
              {
                icon: <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                title: "Données exploitables",
                description: "Analyses avancées",
                detail: "Planification optimale"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 transition">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
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
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
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
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
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
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
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
                  icon: <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
                  title: "Manque de Données",
                  desc: "Besoin de milliers d'images annotées du contexte africain pour entraîner efficacement le modèle"
                },
                {
                  icon: <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  title: "Absence de GPU",
                  desc: "Tests en local limités sans GPU pour l'entraînement du modèle deep learning"
                },
                {
                  icon: <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
                  title: "Plateformes Payantes",
                  desc: "Coût élevé des services cloud GPU pour l'entraînement IA"
                }
              ].map((challenge, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-red-200">
                  <div className="flex justify-center mb-3">{challenge.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2 text-center">{challenge.title}</h4>
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
                    icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
                    title: "Collecte et Annotation de Données",
                    desc: "Créer un dataset de 50,000+ images annotées du contexte sénégalais et africain",
                    budget: "30%"
                  },
                  {
                    icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
                    title: "Infrastructure Cloud GPU",
                    desc: "Accès à des serveurs GPU puissants (AWS, Google Cloud) pour entraîner notre modèle",
                    budget: "35%"
                  },
                  {
                    icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
                    title: "Tests & Validation Terrain",
                    desc: "Caméras pilotes, équipements de test et validation sur routes réelles",
                    budget: "20%"
                  },
                  {
                    icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                    title: "Équipe de Développement",
                    desc: "Data scientists et ingénieurs IA spécialisés pour optimiser le modèle",
                    budget: "15%"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center border-2 border-blue-200">
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
                  <svg className="w-8 h-8 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
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
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h4 className="text-xl font-bold text-red-800">Sans Financement</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Développement très lent (2-3 ans)",
                    "Dataset limité (<10 000 images)",
                    "Tests uniquement en simulation",
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
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <h4 className="text-xl font-bold text-green-800">Avec Votre Soutien</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "MVP opérationnel en 6 mois",
                    "Dataset robuste (+100 000 images)",
                    "Tests réels sur routes de Dakar",
                    "Meilleure Précision (>95%)",
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
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                title: "Email",
                info: "nexora.dev.senegal@gmail.com",
                link: "mailto:nexora.dev.senegal@gmail.com"
              },
              {
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                title: "Téléphone",
                info: "+221 77 130 85 07",
                link: "tel:+221771308507"
              },
              {
                icon: <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                title: "Localisation",
                info: "Dakar, Sénégal",
                link: null
              }
            ].map((contact, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 transition">
                <div className="flex justify-center mb-4">{contact.icon}</div>
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
