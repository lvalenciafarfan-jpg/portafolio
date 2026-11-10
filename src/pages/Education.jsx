import { education, learningNow } from '../data/portfolio.js'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Education() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">06 · Formación y aprendizaje</span>
          <h1>Mi trayectoria.</h1>
          <p className="lead">
            Los proyectos personales también cuentan: así es como he ido construyendo mis conocimientos.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="container narrow">
          <ol className="timeline">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <li className="timeline-item">
                  <span className="timeline-dot" aria-hidden="true" />
                  <span className="timeline-period">{e.period}</span>
                  <h3>{e.title}</h3>
                  <p className="timeline-place">{e.place}</p>
                  <p className="muted">{e.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="En proceso"
            title="Lo que estoy aprendiendo"
            text="Ampliando mi perfil hacia el frontend para entender el producto completo."
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
