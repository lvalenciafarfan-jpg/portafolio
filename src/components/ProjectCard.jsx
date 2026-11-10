import { Link } from 'react-router-dom'

// Fondo de la portada: si hay captura la usa (con un degradado oscuro abajo para
// que se lea el número); si la imagen no existe, se ve el degradado de color.
export function coverBackground(project) {
  if (!project.image) return project.gradient
  return `linear-gradient(180deg, rgba(15,15,20,0) 45%, rgba(15,15,20,0.7) 100%), url(${project.image}) center top / cover no-repeat, ${project.gradient}`
}

export function projectTag(project) {
  return project.example ? 'Proyecto de ejemplo' : project.status
}

export default function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0')
  const tag = projectTag(project)

  return (
    <article className="project-card">
      <Link
        to={`/proyectos/${project.slug}`}
        className="project-cover"
        style={{ background: coverBackground(project) }}
      >
        <span className="project-num">{num}</span>
        {tag && <span className="example-tag">{tag}</span>}
        <span className="project-arrow" aria-hidden="true">↗</span>
      </Link>

      <div className="project-body">
        <div className="tags">
          {project.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
        <h3>
          <Link to={`/proyectos/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="muted">{project.summary}</p>

        <div className="project-actions">
          <Link to={`/proyectos/${project.slug}`} className="btn btn-primary btn-sm">
            Ver detalle
          </Link>
          {project.repo && (
            <a className="btn btn-outline btn-sm" href={project.repo} target="_blank" rel="noreferrer">
              Código fuente
            </a>
          )}
          {project.demo && (
            <a className="btn btn-outline btn-sm" href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
