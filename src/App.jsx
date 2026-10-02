import { useLang } from './i18n.jsx'
import { sections } from './data/content.js'
import { useActiveSection, useReveal, useTheme } from './hooks.js'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import { Publications, Research } from './components/Research.jsx'
import Journey from './components/Journey.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import OffCode from './components/OffCode.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Cada id de `sections` (content.js) aponta para o componente da seção.
// A página segue a ordem da lista `sections`.
const SECTION_COMPONENTS = {
  inicio: Hero,
  sobre: About,
  trajetoria: Journey,
  projetos: Projects,
  skills: Skills,
  pesquisa: Research,
  publicacoes: Publications,
  'fora-do-codigo': OffCode,
  contato: Contact,
}

const IDS = sections.map((s) => s.id)

export default function App() {
  const { t } = useLang()
  const { theme, toggle } = useTheme()
  const active = useActiveSection(IDS)
  useReveal()

  return (
    <>
      <a className="skip" href="#conteudo">
        {t.skip}
      </a>
      <Sidebar active={active} theme={theme} onToggleTheme={toggle} />
      <main id="conteudo" className="main">
        {sections.map(({ id }) => {
          const Component = SECTION_COMPONENTS[id]
          return Component ? <Component key={id} /> : null
        })}
        <Footer />
      </main>
    </>
  )
}
