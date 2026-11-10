import { useState } from 'react'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'

function TechIcon({ src, name }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return <span className="tech-fallback">{name.slice(0, 2)}</span>
  }
  return <img src={CDN + src} alt="" loading="lazy" onError={() => setFailed(true)} />
}

export default function TechCard({ item, learning = false }) {
  return (
    <div className={`tech-card ${learning ? 'is-learning' : ''}`}>
      <div className="tech-icon">
        <TechIcon src={item.icon} name={item.name} />
      </div>
      <div className="tech-info">
        <div className="tech-top">
          <strong>{item.name}</strong>
          <span className={`level ${learning ? 'level-learning' : ''}`}>{item.label}</span>
        </div>
        <div className="bar" role="presentation">
          <span style={{ width: `${item.level}%` }} />
        </div>
      </div>
    </div>
  )
}
