import { FiArrowDown, FiBookOpen, FiDownload } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'
import { hero, profile } from '../data/content.js'
import Rich from './Rich.jsx'
import Photo from './Photo.jsx'
import { Socials } from './Sidebar.jsx'

function Badge() {
  return (
    <svg className="hero__badge" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
      </defs>
      <circle cx="60" cy="60" r="58" className="hero__badge-bg" />
      <text className="hero__badge-text">
        <textPath href="#badge-circle">{hero.badge}</textPath>
      </text>
      <g className="hero__badge-mark" transform="translate(60 60)">
        <line x1="-7" y1="-12" x2="-7" y2="12" />
        <path d="M-7 -4 C -7 4, 8 0, 8 8" fill="none" />
        <circle cx="-7" cy="-12" r="3.2" />
        <circle cx="-7" cy="12" r="3.2" />
        <circle cx="8" cy="8" r="3.2" />
      </g>
    </svg>
  )
}

export default function Hero() {
  const { l, t } = useLang()

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="hero__path" data-reveal>
          <span className="prompt">$</span> cd {hero.path}
          <span className="caret" aria-hidden="true" />
        </p>
        <h1 id="hero-title" className="hero__name" data-reveal>
          <span className="hero__first">Pedro</span>
          <br />
          <em>Lopes</em>
        </h1>
        <p className="hero__role" data-reveal>
          {l(hero.role)}
        </p>
        <div className="hero__intro-wrap" data-reveal>
          <Rich text={l(hero.intro)} className="hero__intro" />
        </div>

        <div className="hero__actions" data-reveal>
          <a href="#projetos" className="btn btn--primary">
            {t.seeProjects} <FiArrowDown aria-hidden="true" />
          </a>
          <a href={profile.links.lattes} target="_blank" rel="noreferrer" className="btn btn--ghost">
            <FiBookOpen aria-hidden="true" /> {t.lattes}
          </a>
          {profile.cvUrl && (
            <a href={`${import.meta.env.BASE_URL}${profile.cvUrl}`} className="btn btn--ghost" download>
              <FiDownload aria-hidden="true" /> {t.cv}
            </a>
          )}
        </div>
        <Socials className="hero__socials" />
      </div>

      <div className="hero__visual" data-reveal>
        <div className="arch">
          <div className="arch__shadow" aria-hidden="true" />
          <Photo src={profile.photo} alt="Foto de Pedro Lopes" className="arch__photo" eager />
          <Badge />
        </div>

        <figure className="terminal" aria-label="git log">
          <div className="terminal__bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <pre className="terminal__body">
            <code>
              <span className="prompt">$</span> git log --oneline -3{'\n'}
              {hero.log.map((c) => (
                <span key={c.hash} className="terminal__line">
                  <span className="terminal__hash">{c.hash}</span>{' '}
                  {c.head && <span className="terminal__ref">(HEAD → main)</span>}
                  {c.head && ' '}
                  {l(c.msg)}
                  {'\n'}
                </span>
              ))}
            </code>
          </pre>
        </figure>
      </div>
    </section>
  )
}
