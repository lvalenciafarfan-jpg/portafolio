import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p className="muted small">{profile.role} · Java · Spring Boot</p>
        </div>
        <nav className="footer-links" aria-label="Pie de página">
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/tecnologias">Tecnologías</Link>
          <Link to="/contacto">Contacto</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
        <p className="muted small">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
