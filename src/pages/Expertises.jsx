import { Link } from 'react-router-dom'
import { Reveal } from '../components/ui/hooks'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import './Expertises.css'

const EXPERTISES = [
  {
    tag: 'Gouvernance',
    title: "Systèmes de santé & gouvernance",
    desc: "Structurer les institutions pour qu'elles durent. Nous accompagnons les ministères, agences et partenaires dans la refonte de leur architecture décisionnelle.",
    items: ['Réforme institutionnelle', 'Politique de santé publique', 'Financement et budget santé'],
  },
  {
    tag: 'Numérique',
    title: 'Transformation numérique',
    desc: "La technologie au service du soin, pas l'inverse. Nous évaluons, sélectionnons et déployons des solutions numériques adaptées aux réalités locales.",
    items: ['SIS & dossier patient', 'Télémédecine & e-santé', 'Infrastructure & souveraineté'],
  },
  {
    tag: 'Financement',
    title: 'Financement & mobilisation des ressources',
    desc: "Identifier et activer les bons leviers financiers. Des mécanismes innovants aux partenariats publics-privés, nous structurons l'accès aux ressources.",
    items: ['Fonds santé internationaux', 'PPP & financements mixtes', 'Budgétisation sensible genre'],
  },
  {
    tag: 'Ressources humaines',
    title: 'Ressources humaines en santé',
    desc: "Les professionnels de santé sont le coeur du système. Nous planifions, formons et fidélisons les équipes médicales et paramédicales.",
    items: ['Planification RHS', 'Formation & renforcement des capacités', 'Gestion des carrières'],
  },
  {
    tag: 'Crises',
    title: 'Gestion de crises sanitaires',
    desc: "Préparer, répondre, relever. Nous bâtissons les capacités de résilience avant les crises et accompagnons la réponse quand elles surviennent.",
    items: ['Plans de préparation pandémique', 'Coordination multi-acteurs', 'Communication de crise'],
  },
  {
    tag: 'Évaluation',
    title: 'Évaluation & impact',
    desc: "Mesurer pour progresser. Nous concevons des cadres d'évaluation qui transforment les données en décisions et les projets en apprentissages.",
    items: ["Cadres logiques & théories du changement", "Évaluation d'impact (quantitative & qualitative)", 'Apprentissage organisationnel'],
  },
]

const TIMELINE = [
  { n: '01', t: 'Écouter', d: 'Comprendre votre contexte, vos contraintes, vos ambitions et les réalités de votre territoire.' },
  { n: '02', t: 'Analyser', d: 'Un diagnostic rigoureux et impartial pour identifier les vrais leviers de transformation.' },
  { n: '03', t: 'Co-construire', d: "Des solutions bâties avec vous pour garantir l'adhésion et la pérennité." },
  { n: '04', t: 'Déployer', d: 'Accompagnement terrain avec des jalons clairs et des indicateurs de résultats.' },
  { n: '05', t: 'Mesurer', d: "Évaluation rigoureuse de chaque intervention pour piloter l'impact réel." },
]

export default function Expertises() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ────────────────────────────────────────── */}
        <section className="page-hero">
          <div className="container">
            <Reveal><div className="section-label"><span className="text-label">Nos Expertises &amp; Méthode</span></div></Reveal>
            <Reveal delay={100}>
              <h1 className="page-hero__title font-display">
                Expertise hybride.<br /><em>Vision souveraine.</em>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="page-hero__sub">
                Six domaines d'intervention pour transformer les systèmes de santé en profondeur,
                avec une méthode éprouvée sur plus de 10 pays.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Expertises Grid ──────────────────────────────── */}
        <section className="section" style={{ background: 'var(--bg-surface)', paddingTop: 0 }}>
          <div className="container">
            <div className="exp-grid">
              {EXPERTISES.map((e, i) => (
                <Reveal key={e.tag} delay={Math.floor(i / 2) * 100}>
                  <div className="exp-card">
                    <p className="exp-card__tag">{e.tag}</p>
                    <h2 className="exp-card__title font-display">{e.title}</h2>
                    <p className="exp-card__desc">{e.desc}</p>
                    <ul className="exp-card__items">
                      {e.items.map(it => <li key={it}>{it}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Méthode Timeline ─────────────────────────────── */}
        <section className="section methode-section">
          <div className="container">
            <Reveal><div className="section-label"><span className="text-label">Notre Méthode</span></div></Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" style={{ marginBottom: 72 }}>
                L'audit d'abord.<br /><em>L'impact ensuite.</em>
              </h2>
            </Reveal>
            <div className="timeline">
              {TIMELINE.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="timeline__step">
                    <div className="timeline__left">
                      <div className="timeline__num font-display">{s.n}</div>
                      {i < TIMELINE.length - 1 && <div className="timeline__line" />}
                    </div>
                    <div className="timeline__content">
                      <h3 className="timeline__title">{s.t}</h3>
                      <p className="timeline__desc">{s.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── KPI ──────────────────────────────────────────── */}
        <section className="section kpi-section">
          <div className="container">
            <div className="kpi-grid">
              {[
                { n: '10+',  l: "Pays d'intervention" },
                { n: '50+',  l: 'Audits stratégiques' },
                { n: '12',   l: "Années d'engagement" },
                { n: '100%', l: 'Projets co-construits' },
              ].map((k, i) => (
                <Reveal key={k.l} delay={i * 80}>
                  <div className="kpi">
                    <div className="kpi__num font-display">{k.n}</div>
                    <div className="kpi__label">{k.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--bg-page)' }}>
          <div className="container">
            <Reveal>
              <div className="cta-block">
                <h2 className="cta-block__title font-display">
                  Discutons de votre<br />territoire de santé.
                </h2>
                <p className="cta-block__sub">
                  Un échange confidentiel pour explorer les leviers qui correspondent
                  à votre contexte spécifique.
                </p>
                <Link to="/reserver" className="btn btn-caramel">
                  Réserver un échange stratégique →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
