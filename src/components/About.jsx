import { useLang } from '../i18n.jsx'
import { about, profile } from '../data/content.js'
import Section from './Section.jsx'
import Rich from './Rich.jsx'
import Photo from './Photo.jsx'

export default function About() {
  const { l } = useLang()
  return (
    <Section id="sobre" kicker={about.kicker} title={about.title}>
      <div className="about">
        <div className="about__text card" data-reveal>
          {l(about.paragraphs).map((p, i) => (
            <Rich key={i} text={p} />
          ))}
        </div>
        <aside className="about__side" data-reveal>
          <figure className="polaroid">
            <Photo src={profile.photoAlt} alt="Pedro na colação de grau" className="polaroid__img" />
            <figcaption className="polaroid__cap">{l(about.photoCaption)}</figcaption>
          </figure>
          <dl className="facts">
            {about.facts.map((f, j) => (
              <div key={j} className="facts__row">
                <dt>{l(f.k)}</dt>
                <dd>{l(f.v)}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  )
}
