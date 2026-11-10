import { useState } from 'react'
import { techCategories } from '../data/portfolio.js'
import TechCard from '../components/TechCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Technologies() {
  const [filter, setFilter] = useState('todas')

  const visible =
    filter === 'todas' ? techCategories : techCategories.filter((c) => c.id === filter)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">03 · Tecnologías y herramientas</span>
          <h1>Mi stack, organizado.</h1>
          <p className="lead">
            Backend es mi fuerte. El frontend lo estoy aprendiendo, y lo marco con honestidad.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Filtrar por categoría">
            <button
              role="tab"
              aria-selected={filter === 'todas'}
              className={`filter ${filter === 'todas' ? 'active' : ''}`}
              onClick={() => setFilter('todas')}
            >
              Todas
            </button>
            {techCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={filter === c.id}
                className={`filter ${filter === c.id ? 'active' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                {c.title}
              </button>
            ))}
          </div>

          {visible.map((cat) => (
            <div className="tech-group" key={cat.id}>
              <div className="tech-group-head">
                <h2>{cat.title}</h2>
                {cat.learning && <span className="level level-learning">En proceso de aprendizaje</span>}
                <p className="muted">{cat.description}</p>
              </div>
              <div className="grid grid-tech">
                {cat.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 60}>
                    <TechCard item={item} learning={cat.learning} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
