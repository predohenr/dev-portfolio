import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from './data/content.js'

const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* sem localStorage: segue o navegador */
  }
  const nav = (navigator.language || 'pt').toLowerCase()
  return nav.startsWith('pt') ? 'pt' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title =
      lang === 'pt' ? 'Pedro Lopes | Engenheiro de Software' : 'Pedro Lopes | Software Engineer'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ok */
    }
  }, [lang])

  // l({ pt, en }) → string no idioma atual; strings simples passam direto.
  const l = useCallback(
    (value) => {
      if (value && typeof value === 'object' && !Array.isArray(value) && ('pt' in value || 'en' in value)) {
        return value[lang] ?? value.pt
      }
      return value
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, l, t: ui[lang] }), [lang, l])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang precisa estar dentro de <LangProvider>')
  return ctx
}
