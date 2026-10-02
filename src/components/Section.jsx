import { useLang } from '../i18n.jsx'
import { sections } from '../data/content.js'

// cabeçalho de seção no estilo "commit": hash + mensagem + título
export default function Section({ id, kicker, title, children, className = '' }) {
  const { l } = useLang()
  const meta = sections.find((s) => s.id === id)
  const index = sections.findIndex((s) => s.id === id)

  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <header className="section__head" data-reveal>
        <p className="section__commit">
          <span className="section__num">{String(index).padStart(2, '0')}</span>
          <span className="section__hash">{meta?.hash}</span>
          <span className="section__kicker">{l(kicker)}</span>
        </p>
        <h2 id={`${id}-title`} className="section__title">
          {l(title)}
        </h2>
      </header>
      {children}
    </section>
  )
}
