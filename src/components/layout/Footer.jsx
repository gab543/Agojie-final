import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">Agojie</div>
            <p className="footer__desc">
              Conseil en projets de santé à impact. De la stratégie au terrain,
              nous accompagnons les décideurs qui osent transformer.
            </p>
            <span className="footer__tagline">Conseil en santé · Paris · International</span>
          </div>

          <div>
            <p className="footer__col-title">Navigation</p>
            <ul className="footer__links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À Propos</Link></li>
              <li><Link to="/expertises">Expertises</Link></li>
              <li><Link to="/reserver">Réserver</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer__col-title">Contact</p>
            <ul className="footer__links">
              <li><a href="mailto:contact@agojie-ate.com">contact@agojie-ate.com</a></li>
              <li><Link to="/reserver">Réserver un échange →</Link></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn ↗</a></li>
            </ul>
          </div>

          <div>
            <p className="footer__col-title">Informations légales</p>
            <ul className="footer__links">
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">CGU</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Agojie. Tous droits réservés.</p>
          <ul className="footer__legal">
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
