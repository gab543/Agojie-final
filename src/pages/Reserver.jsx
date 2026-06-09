import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/ui/hooks'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import './Reserver.css'

export default function Reserver() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', organisation: '', sujet: '', message: '', typeEchange: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setTimeout(() => setSent(true), 800)
  }

  return (
    <>
      <Header />
      <main>
        <section className="page-hero" style={{ paddingBottom: 80 }}>
          <div className="container">
            <Reveal><div className="section-label"><span className="text-label">Réserver un échange</span></div></Reveal>
            <Reveal delay={100}>
              <h1 className="page-hero__title font-display">
                Parlons de<br /><em>votre projet.</em>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="page-hero__sub">
                Un premier échange confidentiel pour explorer ensemble vos leviers de transformation.
                Souverain. Éthique. Durable.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section reserver-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="reserver__layout">
              {/* Infos latérales */}
              <Reveal direction="left" className="reserver__sidebar">
                <div className="sidebar-card">
                  <h2 className="sidebar-card__title font-display">Ce que vous obtenez</h2>
                  <ul className="sidebar-card__list">
                    <li><span className="check">✓</span> Échange confidentiel de 45 min</li>
                    <li><span className="check">✓</span> Analyse préliminaire de votre contexte</li>
                    <li><span className="check">✓</span> Identification des leviers prioritaires</li>
                    <li><span className="check">✓</span> Proposition de collaboration sur mesure</li>
                  </ul>

                  <div className="sidebar-card__divider" />

                  <h3 className="sidebar-card__sub">Types d'échange</h3>
                  {[
                    { t: 'Session Stratégique', d: 'Clarifier vos enjeux en profondeur' },
                    { t: 'Revue de Projet', d: 'Évaluer un projet en cours' },
                    { t: 'Partenariat', d: 'Explorer une collaboration' },
                  ].map(o => (
                    <div key={o.t} className="sidebar-offer">
                      <p className="sidebar-offer__title">{o.t}</p>
                      <p className="sidebar-offer__desc">{o.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Formulaire */}
              <Reveal direction="right" className="reserver__form-wrap">
                {sent ? (
                  <div className="form-success">
                    <div className="form-success__icon font-display">✓</div>
                    <h2 className="form-success__title font-display">Message envoyé !</h2>
                    <p className="form-success__text">
                      Merci pour votre message. Nous vous répondrons dans les 48h pour planifier notre échange.
                    </p>
                    <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nom" className="form-label">Nom complet *</label>
                        <input id="nom" name="nom" type="text" required className="form-input"
                          placeholder="Marie Dupont" value={form.nom} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email professionnel *</label>
                        <input id="email" name="email" type="email" required className="form-input"
                          placeholder="marie@organisation.com" value={form.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="organisation" className="form-label">Organisation</label>
                      <input id="organisation" name="organisation" type="text" className="form-input"
                        placeholder="Ministère de la Santé, ONG, Hôpital…" value={form.organisation} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="typeEchange" className="form-label">Type d'échange *</label>
                      <select id="typeEchange" name="typeEchange" required className="form-input form-select"
                        value={form.typeEchange} onChange={handleChange}>
                        <option value="">Sélectionner…</option>
                        <option value="strategique">Session Stratégique</option>
                        <option value="projet">Revue de Projet</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Décrivez votre contexte *</label>
                      <textarea id="message" name="message" required rows={5} className="form-input form-textarea"
                        placeholder="Parlez-nous de votre projet, vos enjeux, votre territoire…"
                        value={form.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary form-submit">
                      Envoyer ma demande →
                    </button>
                    <p className="form-note">
                      Vos données sont strictement confidentielles et ne seront jamais partagées.
                    </p>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
