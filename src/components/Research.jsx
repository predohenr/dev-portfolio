import { useState } from 'react'
import { FiArrowUpRight, FiAward, FiFileText, FiGitBranch, FiGitMerge, FiMonitor, FiPackage } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'
import { profile, publications, research } from '../data/content.js'
import Section from './Section.jsx'

const ICONS = { branch: FiGitBranch, merge: FiGitMerge }

// nome do link principal do artigo a partir da url
function paperLabel(url, t) {
  if (!url) return t.lattes
  if (url.includes('arxiv.org')) return 'arXiv'
  if (url.includes('doi.org')) return 'DOI'
  return t.paper
}

export function Research() {
  const { l, t } = useLang()
  return (
    <Section id="pesquisa" kicker={research.kicker} title={research.title} className="section--branch">
      <p className="lead" data-reveal>
        {l(research.lead)}
      </p>

      <ul className="advisors" data-reveal>
        {research.advisors.map((a) => (
          <li key={a.name}>
            <span className="advisors__role">{t[a.role]}</span>
            <span className="advisors__name">{a.name}</span>
          </li>
        ))}
      </ul>

      <div className="lines">
        {research.lines.map((line) => {
          const Icon = ICONS[line.icon]
          return (
            <article key={line.icon} className="card line-card" data-reveal>
              <div className="line-card__icon" aria-hidden="true">
                <Icon />
              </div>
              <h3 className="line-card__title">{l(line.title)}</h3>
              <p>{l(line.text)}</p>
              <p className="line-card__since">
                {t.since} {line.since}
              </p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export function Publications() {
  const { l, t } = useLang()
  const [showAll, setShowAll] = useState(false)
  const events = showAll ? publications.events : publications.events.slice(0, 4)

  return (
    <Section id="publicacoes" kicker={publications.kicker} title={publications.title} className="section--branch">
      {publications.papers.map((p) => (
        <article key={p.title} className="paper" data-reveal>
          <div className="paper__stamp" aria-hidden="true">
            <FiAward />
            <span>{p.year}</span>
          </div>
          <p className="paper__type">{l(p.type)}</p>
          <h3 className="paper__title">{p.title}</h3>
          <p className="paper__authors">
            {p.authors.map((a, i) => (
              <span key={a}>
                {i === 0 ? <strong>{a}</strong> : a}
                {i < p.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p className="paper__venue">{p.venue}</p>
          <div className="paper__links">
            <a className="link-arrow" href={p.url || profile.links.lattes} target="_blank" rel="noreferrer">
              <FiFileText aria-hidden="true" /> {paperLabel(p.url, t)} <FiArrowUpRight aria-hidden="true" />
            </a>
            {p.replication && (
              <a className="link-arrow" href={p.replication} target="_blank" rel="noreferrer">
                <FiPackage aria-hidden="true" /> {t.replication} <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
            {p.slides && (
              <a className="link-arrow" href={p.slides} target="_blank" rel="noreferrer">
                <FiMonitor aria-hidden="true" /> {t.slides} <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
        </article>
      ))}

      <h3 className="subhead" data-reveal>
        {l(publications.eventsTitle)}
      </h3>
      <ul className="events" data-reveal>
        {events.map((e) => (
          <li key={e.title} className={`events__item ${e.featured ? 'is-featured' : ''}`}>
            <span className="events__year">{e.year}</span>
            <span className="events__title">{e.title}</span>
            <span className="events__type">{l(e.type)}</span>
          </li>
        ))}
      </ul>
      {publications.events.length > 4 && (
        <button type="button" className="btn btn--text" onClick={() => setShowAll((s) => !s)} aria-expanded={showAll}>
          {showAll ? t.seeLess : `${t.seeAll} (${publications.events.length})`}
        </button>
      )}
    </Section>
  )
}
