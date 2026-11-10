import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1>Esta ruta no existe.</h1>
        <p className="lead">Como un endpoint mal escrito: revisa la URL o vuelve al inicio.</p>
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    </section>
  )
}
