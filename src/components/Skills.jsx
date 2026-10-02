import { useLang } from '../i18n.jsx'
import { skills } from '../data/content.js'
import Section from './Section.jsx'

export default function Skills() {
  const { l } = useLang()

  return (
    <Section id="skills" kicker={skills.kicker} title={skills.title}>
      <div className="skills">
        {skills.groups.map((g, i) => (
          <div key={g.title.pt ?? i} className="card skills__group" data-reveal>
            <h3 className="skills__title">
              <span className="skills__idx">{String(i + 1).padStart(2, '0')}</span>
              {l(g.title)}
            </h3>
            <ul className="chips">
              {g.items.map((it, j) => (
                <li key={j} className="chip">
                  {l(it)}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="card skills__group skills__langs" data-reveal>
          <h3 className="skills__title">
            <span className="skills__idx">{String(skills.groups.length + 1).padStart(2, '0')}</span>
            {l(skills.languages.title)}
          </h3>
          <ul className="langs">
            {skills.languages.items.map((it, j) => (
              <li key={j}>
                <span className="langs__name">{l(it.name)}</span>
                <span className="langs__meter" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, k) => (
                    <span key={k} className={k < it.value ? 'on' : ''} />
                  ))}
                </span>
                <span className="langs__level">{l(it.level)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
