import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import { projectTag } from '../components/ProjectCard.jsx'
import NotFound from './NotFound.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <section className="project-hero" style={{ background: project.gradient }}>
        <div className="container">
          <Link to="/proyectos" className="back-link">← Todos los proyectos</Link>
          <div className="tags tags-light">
            {project.stack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
          {projectTag(project) && <span className="example-tag static">{projectTag(project)}</span>}
          <div className="hero-actions">
            {project.repo && (
              <a className="btn btn-light" href={project.repo} target="_blank" rel="noreferrer">
                Código fuente ↗
              </a>
            )}
            {project.demo && (
              <a className="btn btn-ghost-light" href={project.demo} target="_blank" rel="noreferrer">
                Ver demo ↗
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container detail-grid">
          <Reveal>
            <div className="card">
              <h3>Características</h3>
              <ul className="check-list">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card">
              <h3>Arquitectura</h3>
              <ul className="layer-list">
                {project.architecture.map((a) => (
                  <li key={a.layer}>
                    <code>{a.layer}</code>
                    <span className="muted">{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {project.endpoints.length > 0 && (
        <section className="section tight">
          <div className="container">
            <Reveal>
              <div className="card">
                <h3>Endpoints principales</h3>
                <ul className="endpoints">
                  {project.endpoints.map((e) => (
                    <li key={e.method + e.path}>
                      <span className={`method m-${e.method.toLowerCase()}`}>{e.method}</span>
                      <code>{e.path}</code>
                      <span className="muted">{e.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section tight">
        <div className="container">
          <Reveal>
            <div className="card">
              <h3>Decisiones técnicas</h3>
              <ul className="check-list">
                {project.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {project.image && (
        <section className="section tight">
          <div className="container">
            <Reveal>
              <figure className="shot">
                <img src={project.image} alt={`Captura de ${project.title}`} onError={(e) => (e.currentTarget.parentElement.hidden = true)} />
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {project.note && (
        <section className="section tight">
          <div className="container">
            <Reveal>
              <div className="note">
                <strong>Nota</strong>
                <p>{project.note}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section tight">
        <div className="container">
          <Link to={`/proyectos/${next.slug}`} className="next-project">
            <span className="muted small">Siguiente proyecto</span>
            <strong>{next.title} →</strong>
          </Link>
        </div>
      </section>
    </>
  )
}
