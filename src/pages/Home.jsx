import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/ui/hooks'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import heroBg from '../assets/hero-bg.jpg'
import './Home.css'

/* ── Stat counter ──────────────────────────────────────── */
function StatItem({ target, suffix, label }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.unobserve(el)
      const dur = 1800
      const start = Date.now()
      const tick = () => {
        const p = Math.min((Date.now() - start) / dur, 1)
        const ease = 1 - Math.pow(1 - p, 4)
        el.textContent = Math.round(ease * target) + suffix
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix])

  return (
    <div className="stat">
      <div className="stat__num"><span ref={ref}>{target}{suffix}</span></div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

/* ── Hero line reveal ──────────────────────────────────── */
function HeroLine({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.clipPath = 'inset(0 0 100% 0)'
    el.style.transition = `clip-path 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
    const id = setTimeout(() => { el.style.clipPath = 'inset(0 0 0% 0)' }, 120 + delay)
    return () => clearTimeout(id)
  }, [delay])
  return <div ref={ref} className={className}>{children}</div>
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ══ HERO ════════════════════════════════════════════ */}
        <section className="hero" aria-label="Agojie — L'expertise santé repensée">
          <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="hero__overlay" />

          <div className="hero__content container">
            <HeroLine className="hero__eyebrow" delay={0}>
              <span className="text-label" style={{ color: 'rgba(242,239,232,0.7)' }}>
                Cabinet de Parcours en Santé &bull; D.E. Infirmière
              </span>
            </HeroLine>
            <HeroLine className="hero__headline font-display" delay={150}>
              L'Expertise Santé<br /><em>Repensée.</em>
            </HeroLine>
            <HeroLine className="hero__sub" delay={300}>
              Replacer l'humain au cœur de la stratégie.
            </HeroLine>
            <HeroLine className="hero__actions" delay={450}>
              <Link to="/reserver" className="btn btn-primary">Lancer un projet →</Link>
              <Link to="/expertises" className="btn btn-hero-outline">Nos Expertises</Link>
            </HeroLine>
          </div>

          {/* Arc de cercle signature viicarats */}
          <div className="hero__wave" aria-hidden="true" />

          <div className="hero__scroll" aria-hidden="true">
            <span>Découvrir</span>
            <div className="hero__scroll-line" />
          </div>
        </section>

        {/* ══ HÉRITAGE ════════════════════════════════════════ */}
        <section className="section heritage" id="mission">
          <div className="container">
            <div className="heritage__layout">
              <div className="heritage__left">
                <Reveal>
                  <div className="section-label">
                    <span className="text-label">L'Héritage Agojie</span>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="section-title heritage__title">
                    Reprendre la parole,<br />
                    <em>là où elle s'est arrêtée.</em>
                  </h2>
                </Reveal>
              </div>
              <div className="heritage__right">
                <Reveal delay={200}>
                  <p className="heritage__body">
                    Agojie n'est pas qu'un cabinet. C'est une posture d'écoute et d'action
                    pour transformer les systèmes de santé en écosystèmes souverains,
                    en plaçant les professionnels de proximité au cœur de chaque décision.
                  </p>
                </Reveal>
                <Reveal delay={320}>
                  <div className="heritage__stats">
                    <StatItem target={10} suffix="+" label="Pays d'intervention" />
                    <StatItem target={50} suffix="+" label="Missions réalisées" />
                    <StatItem target={12} suffix="" label="Années d'engagement" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ══ EXPERTISES / OFFRES ══════════════════════════════ */}
        <section className="section offers" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <Reveal>
              <div className="section-label">
                <span className="text-label">Nos Expertises</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="section-title" style={{ marginBottom: 56 }}>
                Expertise hybride.<br /><em>Vision souveraine.</em>
              </h2>
            </Reveal>

            <div className="offers__grid">
              {[
                {
                  tag: 'Session Stratégique',
                  title: 'Clarifier pour mieux avancer.',
                  items: ['Analyse de votre contexte et enjeux', "Identification des opportunités d'amélioration", 'Recommandations concrètes et actionnables'],
                  dark: false, delay: 0,
                },
                {
                  tag: "Parcours d'Accompagnement",
                  title: 'Construire une vision et un plan.',
                  items: ['Diagnostic organisationnel complet', 'Atelier de co-construction', "Plan d'action hiérarchisé et calendrier"],
                  dark: false, delay: 120,
                },
                {
                  tag: 'Transformation Systémique',
                  title: 'Repenser en profondeur, déployer avec méthode.',
                  items: ['Étude de faisabilité complète', 'Stratégie de déploiement sur mesure', 'Accompagnement à la mise en œuvre'],
                  dark: true, delay: 240,
                },
              ].map((o) => (
                <Reveal key={o.tag} delay={o.delay}>
                  <div className={`offer-card ${o.dark ? 'offer-card--dark' : ''}`}>
                    <div className="offer-card__icon" aria-hidden="true">
                      <svg viewBox="0 0 36 36" fill="none">
                        <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.5" opacity=".25" />
                        <path d="M11 18l5 5 9-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="offer-card__tag">{o.tag}</p>
                    <h3 className="offer-card__title">{o.title}</h3>
                    <ul className="offer-card__list">
                      {o.items.map(it => <li key={it}>{it}</li>)}
                    </ul>
                    <div className="offer-card__footer">
                      <span className="offer-card__price">Sur devis</span>
                      <Link to="/reserver" className="offer-card__cta">Détails →</Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ MÉTHODE ══════════════════════════════════════════ */}
        <section className="section methode" id="methode" style={{ background: 'var(--bg-page)' }}>
          <div className="container">
            <div className="methode__layout">
              <div className="methode__left">
                <Reveal>
                  <div className="section-label"><span className="text-label">Méthodologie Agojie</span></div>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="section-title methode__title">
                    L'audit d'abord.<br /><em>L'impact ensuite.</em>
                  </h2>
                </Reveal>
                <Reveal delay={260}>
                  <Link to="/expertises" className="btn btn-primary" style={{ marginTop: 40 }}>
                    Voir notre méthode →
                  </Link>
                </Reveal>
              </div>

              <div className="methode__steps">
                {[
                  { n: '01', t: 'Écouter', d: 'Nous commençons par comprendre. Votre contexte, vos contraintes, vos ambitions, les réalités de vos équipes et de votre territoire.' },
                  { n: '02', t: 'Analyser', d: 'Un diagnostic rigoureux et impartial pour identifier les leviers réels de transformation, sans présupposés.' },
                  { n: '03', t: 'Co-construire', d: "Des solutions bâties avec vous, pas pour vous. Chaque recommandation est co-conçue pour garantir l'adhésion et la pérennité." },
                  { n: '04', t: 'Déployer & Mesurer', d: "Un accompagnement terrain jusqu'aux résultats. Nous mesurons chaque indicateur pour piloter l'impact réel." },
                ].map((s, i) => (
                  <Reveal key={s.n} delay={i * 100}>
                    <div className="methode__step">
                      <span className="methode__step-num">{s.n}</span>
                      <div>
                        <h3 className="methode__step-title">{s.t}</h3>
                        <p className="methode__step-text">{s.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PILIERS (dark section) ═══════════════════════════ */}
        <section className="section piliers">
          <div className="container">
            <Reveal>
              <h2 className="section-title piliers__title font-display">
                Expertise hybride.<br /><em>Vision souveraine.</em>
              </h2>
            </Reveal>
            <div className="piliers__grid">
              {[
                { t: 'Innovation ancrée', d: 'Nous intégrons les meilleures pratiques sans jamais perdre de vue les réalités du terrain.' },
                { t: 'Éthique intransigeante', d: 'Transparence, honnêteté intellectuelle et respect des engagements guident chacune de nos interventions.' },
                { t: 'Impact mesurable', d: 'Nous ne promettons pas, nous mesurons. Chaque projet est évalué sur ses résultats concrets.' },
                { t: 'Intelligence culturelle', d: 'Chaque territoire a sa logique, ses codes et ses forces. Nous les comprenons et les respectons.' },
                { t: 'Collaboration réelle', d: "Nous travaillons avec nos clients, jamais au-dessus d'eux. La co-construction est notre fondement." },
                { t: 'Durabilité', d: "Nous concevons des solutions qui fonctionnent bien au-delà de notre intervention." },

              ].map((p, i) => (
                <Reveal key={p.t} delay={i * 80}>
                  <div className="pilier">
                    <div className="pilier__dot" aria-hidden="true" />
                    <h3 className="pilier__title">{p.t}</h3>
                    <p className="pilier__text">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ════════════════════════════════════════ */}
        <section className="section home-cta">
          <div className="container">
            <Reveal>
              <div className="cta-block">
                <h2 className="cta-block__title font-display">
                  Bâtissons ensemble votre<br />prochain projet de santé.
                </h2>
                <p className="cta-block__sub">
                  Un échange direct pour explorer vos leviers de transformation.<br />
                  Souverain. Éthique. Durable.
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
