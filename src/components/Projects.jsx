import { FiArrowUpRight, FiFileText, FiGithub, FiLock } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'
import { projects } from '../data/content.js'
import Section from './Section.jsx'

const BASE = import.meta.env.BASE_URL

// desenho three-way-merge para cards sem imagem.
function MergeArt() {
  return (
    <svg className="project__art" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M52 108 C92 108 100 62 142 62" className="art-branch" />
      <path d="M52 108 C92 108 100 154 142 154" className="art-branch2" />
      <path d="M142 62 C184 62 192 108 232 108" className="art-branch" />
      <path d="M142 154 C184 154 192 108 232 108" className="art-branch2" />
      <path d="M232 108 H290" className="art-main" />
      <circle cx="52" cy="108" r="7" className="art-node" />
      <circle cx="142" cy="62" r="7" className="art-node art-node--b" />
      <circle cx="142" cy="154" r="7" className="art-node art-node--c" />
      <circle cx="232" cy="108" r="9" className="art-node art-node--head" />
      <circle cx="290" cy="108" r="4" className="art-node art-node--head" />
      <text x="52" y="134" textAnchor="middle" className="art-label">
        base
      </text>
      <text x="142" y="44" textAnchor="middle" className="art-label">
        left
      </text>
      <text x="142" y="182" textAnchor="middle" className="art-label">
        right
      </text>
      <text x="232" y="86" textAnchor="middle" className="art-label art-label--head">
        merged
      </text>
    </svg>
  )
}

export default function Projects() {
  const { l, t } = useLang()

  return (
    <Section id="projetos" kicker={projects.kicker} title={projects.title}>
      <div className="projects">
        {projects.items.map((p) => (
          <article key={p.branch} className="project card" data-reveal>
            <div className={`project__media ${p.imageFit ? `is-${p.imageFit}` : ''}`}>
              {p.image ? (
                <img
                  src={`${BASE}${p.image}`}
                  alt={p.imageAlt ? l(p.imageAlt) : `Captura de tela do ${l(p.name)}`}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <MergeArt />
              )}
              <span className="project__branch">
                <span aria-hidden="true">⎇</span> {p.branch}
              </span>
            </div>
            <div className="project__body">
              <h3 className="project__name">{l(p.name)}</h3>
              <p className="project__text">{l(p.text)}</p>
              <ul className="chips chips--small">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="project__links">
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="link-arrow">
                    <FiGithub aria-hidden="true" /> {t.code} <FiArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <span className="project__private">
                    <FiLock aria-hidden="true" /> {t.private}
                  </span>
                )}
                {p.paper && (
                  <a href={p.paper} target="_blank" rel="noreferrer" className="link-arrow">
                    <FiFileText aria-hidden="true" /> {t.paper} <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
