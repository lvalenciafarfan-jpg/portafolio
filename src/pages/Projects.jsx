import { useState } from 'react'
import { projects } from '../data/portfolio.js'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'

// Genera las etiquetas de filtro a partir de las tecnologías de los proyectos
const allTags = ['Todos', ...Array.from(new Set(projects.flatMap((p) => p.stack)))]

export default function Projects() {
  const [tag, setTag] = useState('Todos')
  const visible = tag === 'Todos' ? projects : projects.filter((p) => p.stack.includes(tag))

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">04 · Mis proyectos</span>
          <h1>Proyectos que demuestran lo que sé.</h1>
          <p className="lead">
            Cada proyecto incluye su código fuente, las tecnologías usadas y las decisiones técnicas detrás.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Filtrar por tecnología">
            {allTags.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tag === t}
                className={`filter ${tag === t ? 'active' : ''}`}
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-3">
            {visible.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} index={projects.indexOf(p)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
