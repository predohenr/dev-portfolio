import { FiDisc, FiMapPin, FiMusic } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'
import { offCode } from '../data/content.js'
import Section from './Section.jsx'

// piano decorativo
function Keys() {
  const whites = Array.from({ length: 7 })
  const blacks = [0, 1, 3, 4, 5]
  return (
    <div className="keys" aria-hidden="true">
      {whites.map((_, i) => (
        <span key={i} className="keys__white" />
      ))}
      {blacks.map((b) => (
        <span key={b} className="keys__black" style={{ left: `calc(${(b + 1) * (100 / 7)}% - 5.5%)` }} />
      ))}
    </div>
  )
}

export default function OffCode() {
  const { l } = useLang()
  const { music, playlist, roots } = offCode

  return (
    <Section id="fora-do-codigo" kicker={offCode.kicker} title={offCode.title}>
      <div className="off">
        <article className="card off__music" data-reveal>
          <Keys />
          <h3 className="off__title">
            <FiMusic aria-hidden="true" /> {l(music.title)}
          </h3>
          <p>{l(music.text)}</p>
          <ul className="off__courses">
            {music.courses.map((c, i) => (
              <li key={i}>
                <span>{l(c.name)}</span>
                <span className="off__muted">
                  {c.org} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card off__playlist" data-reveal>
          <h3 className="off__title">
            <FiDisc aria-hidden="true" /> {l(playlist.title)}
          </h3>
          <p className="off__muted">{l(playlist.note)}</p>
          <ol className="tracklist">
            {playlist.albums.map((a, i) => (
              <li key={a.title}>
                <span className="tracklist__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="tracklist__title">{a.title}</span>
                <span className="tracklist__artist">{a.artist}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="card off__roots" data-reveal>
          <h3 className="off__title">
            <FiMapPin aria-hidden="true" /> {l(roots.title)}
          </h3>
          <p>{l(roots.text)}</p>
          <div className="roots__swatches" aria-hidden="true">
            <span className="sw sw--terra">barro</span>
            <span className="sw sw--ocre">sol</span>
            <span className="sw sw--mare">maré</span>
          </div>
        </article>
      </div>
    </Section>
  )
}
