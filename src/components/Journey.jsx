import { useRef, useState } from 'react'
import { FiGitBranch } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'
import { journey } from '../data/content.js'
import Section from './Section.jsx'

function LogItem({ item }) {
  const { l, t } = useLang()
  return (
    <li className={`log__item kind-${item.kind} ${item.current ? 'is-current' : ''}`}>
      <div className="log__rail" aria-hidden="true">
        <span className="log__node" />
      </div>
      <article className="log__card card">
        <p className="log__period">
          {l(item.period)}
          {item.badge && <span className="log__kind">{l(item.badge)}</span>}
        </p>
        <h3 className="log__title">{l(item.title)}</h3>
        <p className="log__org">{item.org}</p>
        {item.text && <p className="log__text">{l(item.text)}</p>}
        {item.meta?.length > 0 && (
          <dl className="log__meta">
            {item.meta.map((m, j) => (
              <div key={j}>
                <dt>{t[m.k]}</dt>
                <dd>{l(m.v)}</dd>
              </div>
            ))}
          </dl>
        )}
        {item.tags?.length > 0 && (
          <ul className="chips chips--small">
            {item.tags.map((tag, j) => (
              <li key={j} className="chip">
                {l(tag)}
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  )
}

export default function Journey() {
  const { l, t } = useLang()
  const [tab, setTab] = useState(journey.defaultTab)
  const tabRefs = useRef([])
  const active = journey.tabs.find((tb) => tb.id === tab)
  const items = journey.items.filter((it) => it.kind === tab)

  // navegacao pelo teclado
  function onKeyDown(e, index) {
    const n = journey.tabs.length
    const moves = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }
    let next = null
    if (e.key in moves) next = (index + moves[e.key] + n) % n
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = n - 1
    if (next === null) return
    e.preventDefault()
    setTab(journey.tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <Section id="trajetoria" kicker={journey.kicker} title={journey.title}>
      <p className="lead" data-reveal>
        {l(journey.lead)}
      </p>

      <div className="branches" data-reveal>
        <p className="branches__cmd" aria-hidden="true">
          <span className="prompt">$</span> git checkout <span className={`branches__slug kind-${tab}`}>{l(active.slug)}</span>
        </p>
        <div className="branches__list" role="tablist" aria-label={t.journeyTabs}>
          {journey.tabs.map((tb, i) => {
            const selected = tb.id === tab
            const count = journey.items.filter((it) => it.kind === tb.id).length
            return (
              <button
                key={tb.id}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`tab-${tb.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tb.id}`}
                tabIndex={selected ? 0 : -1}
                className={`branch kind-${tb.id} ${selected ? 'is-active' : ''}`}
                onClick={() => setTab(tb.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span className="branch__mark" aria-hidden="true">
                  {selected ? '*' : ' '}
                </span>
                <FiGitBranch className="branch__icon" aria-hidden="true" />
                <span className="branch__name">{l(tb.label)}</span>
                <span className="branch__count">{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div
        key={tab}
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        className={`log-panel kind-${tab}`}
        tabIndex={0}
      >
        <ol className="log">
          {items.map((item, i) => (
            <LogItem key={`${tab}-${i}`} item={item} />
          ))}
        </ol>

        {tab === 'edu' && journey.courses?.length > 0 && (
          <div className="courses">
            <h3 className="subhead">{t.courses}</h3>
            <ul className="courses__list">
              {journey.courses.map((c, j) => (
                <li key={j}>
                  <span className="courses__name">{l(c.name)}</span>
                  <span className="courses__meta">{[c.org, c.year, c.hours && `${c.hours}h`].filter(Boolean).join(' · ')}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  )
}
