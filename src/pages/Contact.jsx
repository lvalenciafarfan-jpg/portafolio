import { profile } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    'Hola Luis, vi tu portafolio y me gustaría hablar contigo.'
  )}`

  const channels = [
    {
      icon: '💬',
      title: 'WhatsApp',
      text: profile.whatsappLabel,
      href: whatsappUrl,
      external: true,
      highlight: true,
    },
    {
      icon: '✉️',
      title: 'Enviarme un correo',
      text: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: '🐙',
      title: 'GitHub',
      text: 'Mi código y mis repositorios',
      href: profile.github,
      external: true,
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      text: 'Mi perfil profesional',
      href: profile.linkedin,
      external: true,
    },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">07 · Contacto</span>
          <h1>¿Tienes un proyecto en mente?</h1>
          <p className="lead">
            Estoy abierto a nuevas oportunidades, colaboraciones y desafíos que me permitan seguir
            creciendo como desarrollador.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="container contact-links contact-links-grid">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <a
                className={`contact-link ${c.highlight ? 'contact-link-main' : ''}`}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="contact-icon" aria-hidden="true">{c.icon}</span>
                <span>
                  <strong>{c.title}</strong>
                  <small className="muted">{c.text}</small>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
