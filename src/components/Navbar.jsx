import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/portfolio.js'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/tecnologias', label: 'Tecnologías' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/formacion', label: 'Formación' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Cierra el menú móvil al navegar
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label="Ir al inicio">
          <span className="brand-purple">Portafolio</span> de desarrollo
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>
              {l.label}
            </NavLink>
          ))}
          <a className="btn btn-dark btn-sm nav-github-mobile" href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>

        <a className="btn btn-dark btn-sm nav-github" href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>

        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
