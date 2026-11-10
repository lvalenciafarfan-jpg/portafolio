import { Link } from 'react-router-dom'
import { profile, heroStack, highlights, specialties, projects } from '../data/portfolio.js'
import CodeCard from '../components/CodeCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="badge">{profile.role}</span>
            <h1>
              Hola, soy <span className="accent">{profile.name}.</span>
            </h1>
            <p className="hero-lead">{profile.headline}</p>

            <ul className="stack-list" aria-label="Tecnologías principales">
              {heroStack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="hero-actions">
              <Link to="/proyectos" className="btn btn-primary">Ver proyectos</Link>
              <Link to="/contacto" className="btn btn-outline">Contáctame</Link>
            </div>
          </div>

          <div className="hero-visual">
            <CodeCard />
          </div>
        </div>

        <div className="container highlights">
          {highlights.map((h) => (
            <div className="highlight" key={h.title}>
              <span className="highlight-icon" aria-hidden="true">{h.icon}</span>
              <div>
                <strong>{h.title}</strong>
                <p className="muted small">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- ESPECIALIDADES ---------- */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Mi enfoque"
            title="Qué sé hacer como desarrollador"
            text="Backend sólido: servicios claros, datos bien modelados y seguridad desde el diseño."
          />
          <div className="grid grid-4">
            {specialties.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card specialty">
                  <span className="specialty-icon" aria-hidden="true">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROYECTOS DESTACADOS ---------- */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-row">
            <SectionTitle eyebrow="Proyectos" title="Lo que he construido" />
            <Link to="/proyectos" className="link-arrow">Ver todos →</Link>
          </div>
          <div className="grid grid-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta">
              <h2>¿Tienes un proyecto en mente?</h2>
              <p>
                Estoy abierto a nuevas oportunidades, colaboraciones y desafíos que me permitan
                seguir creciendo como desarrollador.
              </p>
              <Link to="/contacto" className="btn btn-light">Hablemos</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
