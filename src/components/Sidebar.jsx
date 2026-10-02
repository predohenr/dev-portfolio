import { useEffect, useState } from 'react'
import { FiBookOpen, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'
import { profile, sections } from '../data/content.js'
import { LangSwitch, ThemeToggle } from './Controls.jsx'

const ITEM_H = 44
const X_MAIN = 14
const X_BRANCH = 34

// navegação como um grafo de commits.
function GitGraph({ activeIndex }) {
  const n = sections.length
  const y = (i) => i * ITEM_H + ITEM_H / 2
  const first = sections.findIndex((s) => s.onBranch)
  const last = first + sections.filter((s) => s.onBranch).length - 1
  const from = first - 1
  const to = last + 1
  const bend = ITEM_H * 0.55

  const branchPath =
    `M ${X_MAIN} ${y(from)} C ${X_MAIN} ${y(from) + bend}, ${X_BRANCH} ${y(first) - bend}, ${X_BRANCH} ${y(first)} ` +
    `L ${X_BRANCH} ${y(last)} C ${X_BRANCH} ${y(last) + bend}, ${X_MAIN} ${y(to) - bend}, ${X_MAIN} ${y(to)}`

  const onBranch = activeIndex >= first && activeIndex <= last
  const progressY = y(onBranch ? from : Math.max(activeIndex, 0))
  const branchProgress = onBranch
    ? `M ${X_MAIN} ${y(from)} C ${X_MAIN} ${y(from) + bend}, ${X_BRANCH} ${y(first) - bend}, ${X_BRANCH} ${y(first)} L ${X_BRANCH} ${y(activeIndex)}`
    : branchPath

  return (
    <svg className="graph" width="48" height={n * ITEM_H} viewBox={`0 0 48 ${n * ITEM_H}`} aria-hidden="true">
      <line x1={X_MAIN} y1={y(0)} x2={X_MAIN} y2={y(n - 1)} className="graph__rail" />
      <path d={branchPath} className="graph__rail graph__rail--branch" fill="none" />
      <line x1={X_MAIN} y1={y(0)} x2={X_MAIN} y2={progressY} className="graph__progress" />
      {activeIndex >= first && (
        <path d={branchProgress} className="graph__progress graph__progress--branch" fill="none" />
      )}
      {sections.map((s, i) => {
        const cx = s.onBranch ? X_BRANCH : X_MAIN
        const state = i === activeIndex ? 'active' : i < activeIndex ? 'done' : 'todo'
        return (
          <g key={s.id} className={`graph__node graph__node--${state} ${s.onBranch ? 'is-branch' : ''}`}>
            {state === 'active' && <circle cx={cx} cy={y(i)} r="10" className="graph__halo" />}
            <circle cx={cx} cy={y(i)} r={s.merge ? 6 : 5} />
            {s.merge && <circle cx={cx} cy={y(i)} r="2" className="graph__merge-dot" />}
          </g>
        )
      })}
    </svg>
  )
}

function NavList({ active, onNavigate }) {
  const { l } = useLang()
  const activeIndex = sections.findIndex((s) => s.id === active)

  return (
    <nav className="nav" aria-label="Seções">
      <GitGraph activeIndex={activeIndex} />
      <ol className="nav__list">
        {sections.map((s) => {
          const isActive = s.id === active
          return (
            <li key={s.id} style={{ height: ITEM_H }}>
              <a
                href={`#${s.id}`}
                className={`nav__link ${s.onBranch ? 'is-branch' : ''} ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={onNavigate}
              >
                {isActive ? (
                  <span className="nav__hash nav__hash--head" title={s.hash}>
                    HEAD
                  </span>
                ) : (
                  <span className="nav__hash">{s.hash}</span>
                )}
                <span className="nav__label">{l(s.label)}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function Socials({ className = '' }) {
  const { t } = useLang()
  return (
    <ul className={`socials ${className}`}>
      <li>
        <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <FiGithub aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <FiLinkedin aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href={profile.links.lattes} target="_blank" rel="noreferrer" aria-label={t.lattes} title={t.lattes}>
          <FiBookOpen aria-hidden="true" />
        </a>
      </li>
      {profile.email && (
        <li>
          <a href={`mailto:${profile.email}`} aria-label={t.email} title={profile.email}>
            <FiMail aria-hidden="true" />
          </a>
        </li>
      )}
    </ul>
  )
}

export default function Sidebar({ active, theme, onToggleTheme }) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <div className="topbar">
        <a href="#inicio" className="brand brand--small">
          Pedro Lopes
        </a>
        <div className="topbar__actions">
          <LangSwitch />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="icon-btn"
            aria-label={open ? t.closeMenu : t.menu}
            aria-expanded={open}
            aria-controls="sidebar"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className={`scrim ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />

      <aside id="sidebar" className={`sidebar ${open ? 'is-open' : ''}`}>
        <div className="sidebar__top">
          <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
            Pedro Lopes
          </a>
          <p className="sidebar__path">
            <span className="prompt">$</span> git checkout main
          </p>
        </div>

        <div>
          <NavList active={active} onNavigate={() => setOpen(false)} />
          <ul className="graph-legend" aria-hidden="true">
            <li className="graph-legend__main">main</li>
            <li className="graph-legend__branch">{t.branch}</li>
          </ul>
        </div>

        <div className="sidebar__bottom">
          <div className="sidebar__controls">
            <LangSwitch />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
          <Socials />
        </div>
      </aside>
    </>
  )
}
