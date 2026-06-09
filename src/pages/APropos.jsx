import { Link } from 'react-router-dom'
import { Reveal } from '../components/ui/hooks'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import photoFonda from '../assets/photo-fonda.jpeg'
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
                Replacer l'humain<br />
                <em>au cœur de la stratégie.</em>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="page-hero__sub">
                Agojie n'est pas qu'un cabinet. C'est une posture d'écoute et d'action
                pour transformer les parcours de santé en expériences souveraines et humaines.
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
                  {/* Photo fondatrice */}
                  <div className="founder__photo-wrap">
                    <img
                      src={photoFonda}
                      alt="Fondatrice Agojie — D.E. Infirmière"
                      className="founder__photo"
                      onError={(e) => {
                        // Fallback si photo pas encore disponible
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    {/* Fallback avatar */}
                    <div className="founder__avatar-fallback" style={{ display: 'none' }}>
                      <span className="font-display">A</span>
                    </div>
                  </div>

                  <div className="founder__badge">
                    <span className="founder__badge-num font-display">12</span>
                    <span className="founder__badge-label">Années d'engagement</span>
                  </div>

                  <div className="founder__card-footer">
                    <p className="founder__name">Fondatrice &amp; Directrice</p>
                    <p className="founder__role">D.E. Infirmière · Stratégie &amp; Parcours de Santé</p>
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
                    Diplômée d'État infirmière, la fondatrice d'Agojie a bâti son expertise
                    au carrefour du soin clinique et de la stratégie organisationnelle.
                    Une double compétence rare qui lui permet d'aborder chaque projet avec
                    la rigueur du terrain et la vision du décideur.
                  </p>
                  <p className="founder__text">
                    De la structuration de parcours patients à la réforme des organisations
                    de santé, Agojie offre aux décideurs un partenaire capable de réconcilier
                    l'humain et la performance, le soin et la souveraineté.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <blockquote className="founder__blockquote">
                    « Ce n'est pas la technologie ni les protocoles qui guérissent —
                    c'est la qualité de la relation et la cohérence du parcours. »
                  </blockquote>
                </Reveal>
                <Reveal delay={380}>
                  <div className="founder__diploma">
                    <div className="diploma-badge">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Diplôme d'État Infirmière</span>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={420}>
                  <div className="founder__stats">
                    <div className="stat">
                      <div className="stat__num font-display">10+</div>
                      <div className="stat__label">Pays d'intervention</div>
                    </div>
                    <div className="stat">
                      <div className="stat__num font-display">50+</div>
                      <div className="stat__label">Missions réalisées</div>
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
                { n: '01', t: 'Souveraineté', d: "Chaque solution appartient à ceux qui la mettent en œuvre. Nous ne créons pas de dépendances." },
                { n: '02', t: 'Transparence', d: "Nos diagnostics sont honnêtes, même quand ils sont inconfortables. Pas de promesses vides." },
                { n: '03', t: 'Ancrage clinique', d: "La compétence infirmière est au cœur de notre méthode. Nous partons toujours du terrain." },
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
                  Prêt à transformer<br />votre parcours de santé ?
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
