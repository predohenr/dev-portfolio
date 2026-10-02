import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p className="footer__cmd">
        <span className="prompt">$</span> git commit -m "{t.footer}"
      </p>
      <p className="footer__small">
        © {year} Pedro Lopes · {t.rights}
      </p>
    </footer>
  )
}
