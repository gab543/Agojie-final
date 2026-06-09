import { Link } from 'react-router-dom'
import { Reveal } from '../components/ui/hooks'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import './APropos.css'

export default function APropos() {
  return (
    <>
      <Header />
      <main>
        {/* ══ HERO PAGE ═══════════════════════════════════════ */}
        <section className="page-hero">
          <div className="container">
            <Reveal>
              <div className="section-label">
                <span className="text-label">Manifeste &amp; Vision</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="page-hero__title font-display">
                Reprendre la parole,<br />
                <em>là où elle s'est arrêtée.</em>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="page-hero__sub">
                Agojie n'est pas qu'un cabinet. C'est une posture d'écoute et d'action
                pour transformer les systèmes de santé en écosystèmes souverains.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══ FONDATRICE ══════════════════════════════════════ */}
        <section className="section founder">
          <div className="container">
            <div className="founder__layout">
              <Reveal direction="left" className="founder__card-wrap">
                <div className="founder__card">
                  <div className="founder__avatar" aria-label="Fondatrice Agojie">
                    <div className="founder__avatar-inner font-display">A</div>
                  </div>
                  <div className="founder__badge">
                    <span className="founder__badge-num font-display">12</span>
                    <span className="founder__badge-label">Années d'engagement</span>
                  </div>
                  <div className="founder__card-footer">
                    <p className="founder__name">Visionnaire &amp; Stratège</p>
                    <p className="founder__role">Expertise Clinique &amp; Gouvernance</p>
                  </div>
                </div>
              </Reveal>

              <div className="founder__content">
                <div className="founder__quote" aria-hidden="true">"</div>
                <Reveal delay={100}>
                  <h2 className="section-title">
                    Une vision enracinée,<br /><em>un impact mondial.</em>
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="founder__text">
                    Agojie est née d'un constat simple : l'innovation technologique en santé
                    échoue sans une compréhension intime de la culture et des infrastructures locales.
                  </p>
                  <p className="founder__text">
                    De la gestion de crises sanitaires à la structuration de financements
                    internationaux, Agojie offre aux décideurs un partenaire capable de
                    réconcilier souveraineté numérique et réalité clinique.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <blockquote className="founder__blockquote">
                    « Nous ne vendons pas de solutions sur étagère.
                    Nous bâtissons des systèmes qui appartiennent à ceux qui soignent. »
                  </blockquote>
                </Reveal>
                <Reveal delay={380}>
                  <div className="founder__stats">
                    <div className="stat">
                      <div className="stat__num font-display">10+</div>
                      <div className="stat__label">Pays d'intervention</div>
                    </div>
                    <div className="stat">
                      <div className="stat__num font-display">50+</div>
                      <div className="stat__label">Audits stratégiques</div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ══ BOUSSOLE ÉTHIQUE ════════════════════════════════ */}
        <section className="section ethics" style={{ background: 'var(--bg-warm)' }}>
          <div className="container">
            <Reveal>
              <div className="section-label"><span className="text-label">Nos engagements</span></div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" style={{ marginBottom: 64 }}>
                La boussole<br /><em>éthique Agojie.</em>
              </h2>
            </Reveal>
            <div className="ethics__grid">
              {[
                { n: '01', t: 'Souveraineté', d: 'Chaque solution appartient à ceux qui la mettent en œuvre. Nous ne créons pas de dépendances.' },
                { n: '02', t: 'Transparence', d: 'Nos diagnostics sont honnêtes, même quand ils sont inconfortables. Pas de promesses vides.' },
                { n: '03', t: 'Ancrage local', d: "Les meilleures pratiques mondiales n'ont de valeur que si elles s'adaptent aux réalités locales." },
                { n: '04', t: 'Impact durable', d: "Chaque intervention est conçue pour survivre à notre départ et s'inscrire dans la durée." },
              ].map((e, i) => (
                <Reveal key={e.n} delay={i * 80}>
                  <div className="ethic-card">
                    <span className="ethic-card__num font-display">{e.n}</span>
                    <h3 className="ethic-card__title">{e.t}</h3>
                    <p className="ethic-card__text">{e.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ═════════════════════════════════════════════ */}
        <section className="section" style={{ background: 'var(--bg-page)' }}>
          <div className="container">
            <Reveal>
              <div className="cta-block">
                <h2 className="cta-block__title font-display">
                  Prêt à transformer<br />votre écosystème de santé ?
                </h2>
                <p className="cta-block__sub">
                  Rencontrons-nous pour explorer ensemble ce qui est possible.
                </p>
                <Link to="/reserver" className="btn btn-caramel">
                  Réserver un échange →
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
