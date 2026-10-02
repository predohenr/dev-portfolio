import { FiMoon, FiSun } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'

export function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="seg" role="group" aria-label={t.langLabel}>
      {['pt', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          className="seg__btn"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export function ThemeToggle({ theme, onToggle }) {
  const { t } = useLang()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={onToggle}
      aria-label={dark ? t.themeToLight : t.themeToDark}
      title={dark ? t.themeToLight : t.themeToDark}
    >
      {dark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  )
}
