import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const meta = document.querySelectorAll('meta[name="theme-color"]')
    meta.forEach((m) => m.setAttribute('content', theme === 'dark' ? '#181513' : '#F1EADF'))
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ok */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

// Descobre qual seção está no meio da tela (para o "HEAD" do grafo).
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return undefined
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids])

  return active
}

// Adiciona .is-visible quando o elemento entra na tela (animação de entrada).
// Também acompanha elementos que surgem depois do carregamento (troca de idioma,
// abas, "ver mais"), para nada ficar invisível.
export function useReveal() {
  useEffect(() => {
    const SELECTOR = '[data-reveal]:not(.is-visible)'

    if (!('IntersectionObserver' in window)) {
      const showAll = () => document.querySelectorAll(SELECTOR).forEach((el) => el.classList.add('is-visible'))
      showAll()
      const mo = new MutationObserver(showAll)
      mo.observe(document.body, { childList: true, subtree: true })
      return () => mo.disconnect()
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    const watch = (node) => {
      if (node.nodeType !== 1) return
      if (node.matches(SELECTOR)) io.observe(node)
      node.querySelectorAll(SELECTOR).forEach((el) => io.observe(el))
    }

    watch(document.body)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach(watch))
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
