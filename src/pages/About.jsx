import { Link } from 'react-router-dom'
import { profile, about, specialties, learningNow } from '../data/portfolio.js'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">02 · Sobre mí</span>
          <h1>{about.title}</h1>
        </div>
      </section>

      <section className="section tight">
        <div className="container about-grid">
          <Reveal>
            <div className="avatar-wrap">
              {/* La foto se configura en src/data/portfolio.js → profile.photo */}
              {profile.photo ? (
                <img src={profile.photo} alt={`Foto de ${profile.firstName}`} className="avatar" />
              ) : (
                <div className="avatar" aria-label="Foto de perfil">{initials(profile.name)}</div>
              )}
              <span className="avatar-badge">{profile.role}</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="about-text">
              {about.paragraphs.map((p) => (
                <p key={p} className="lead">{p}</p>
              ))}
              <div className="hero-actions">
                <Link to="/proyectos" className="btn btn-primary">Ver mis proyectos</Link>
                <Link to="/formacion" className="btn btn-outline">Mi formación</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="container grid grid-3">
          {about.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="card">
                <span className="specialty-icon" aria-hidden="true">{c.icon}</span>
                <h3>{c.title}</h3>
                <p className="muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="05 · Especialidades"
            title="Mi enfoque como desarrollador"
            text="Aquí profundizo en lo que sé hacer."
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

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Ahora mismo"
            title="Aprendiendo frontend"
            text="Mi base es el backend, pero estoy ampliando mis conocimientos hacia el frontend."
          />
          <div className="grid grid-4">
            {learningNow.map((l, i) => (
              <Reveal key={l.name} delay={i * 80}>
                <div className="card learn-card">
                  <span className="level level-learning">En proceso</span>
                  <h3>{l.name}</h3>
                  <p className="muted">{l.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
