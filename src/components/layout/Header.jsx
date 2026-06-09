import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''} ${isHome && !scrolled ? 'header--hero' : ''}`}>
        <div className="container">
          <div className="header__inner">
            <Link to="/" className="header__logo" aria-label="Agojie — Accueil">
              <span className="header__logo-name">Agojie</span>
              <span className="header__logo-tag">Concevoir pour l'impact</span>
            </Link>

            <nav className="header__nav" aria-label="Navigation principale">
              <HashLink smooth to="/#mission" className={pathname === '/' ? 'active' : ''}>Notre Mission</HashLink>
              <Link to="/expertises" className={pathname === '/expertises' ? 'active' : ''}>Expertises</Link>
              <HashLink smooth to="/#methode">Notre Approche</HashLink>
              <Link to="/a-propos" className={pathname === '/a-propos' ? 'active' : ''}>À Propos</Link>
            </nav>

            <div className="header__cta">
              <Link
                to="/reserver"
                className={`btn ${isHome && !scrolled ? 'btn-hero-cta' : 'btn-primary'}`}
              >
                Prendre RDV →
              </Link>
            </div>

            <button
              className={`header__burger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer ${menuOpen ? 'drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="drawer__nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          <Link to="/expertises" onClick={() => setMenuOpen(false)}>Expertises</Link>
          <Link to="/a-propos" onClick={() => setMenuOpen(false)}>À Propos</Link>
          <Link to="/reserver" onClick={() => setMenuOpen(false)}>Réserver</Link>
        </nav>
        <Link to="/reserver" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Prendre RDV →
        </Link>
      </div>
    </>
  )
}
