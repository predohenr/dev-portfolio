import { useState } from 'react'
import { FiAlertCircle, FiBookOpen, FiCheck, FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { useLang } from '../i18n.jsx'
import { contact, profile } from '../data/content.js'
import Section from './Section.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Mostra o link sem "https://www."
const pretty = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function Contact() {
  const { l, t } = useLang()
  const [status, setStatus] = useState('idle') // idle | invalid | sending | ok | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (!name || !EMAIL_RE.test(email) || !message) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(profile.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contato" kicker={contact.kicker} title={contact.title}>
      <div className="contact">
        <div className="contact__info" data-reveal>
          <p className="lead">{l(contact.text)}</p>
          <p className="contact__loc">
            <FiMapPin aria-hidden="true" /> {contact.location}
          </p>
          <ul className="contact__links">
            {profile.email && (
              <li>
                <a href={`mailto:${profile.email}`}>
                  <FiMail aria-hidden="true" /> {profile.email}
                </a>
              </li>
            )}
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin aria-hidden="true" /> {pretty(profile.links.linkedin)}
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> {pretty(profile.links.github)}
              </a>
            </li>
            <li>
              <a href={profile.links.lattes} target="_blank" rel="noreferrer">
                <FiBookOpen aria-hidden="true" /> {pretty(profile.links.lattes)}
              </a>
            </li>
          </ul>
        </div>

        <form className="card form" onSubmit={onSubmit} noValidate data-reveal>
          <h3 className="form__title">{t.form.title}</h3>
          <label className="field">
            <span>{t.form.name}</span>
            <input name="name" type="text" autoComplete="name" required onInput={() => status === 'invalid' && setStatus('idle')} />
          </label>
          <label className="field">
            <span>{t.form.email}</span>
            <input name="email" type="email" autoComplete="email" required onInput={() => status === 'invalid' && setStatus('idle')} />
          </label>
          <label className="field">
            <span>{t.form.message}</span>
            <textarea name="message" rows="5" required onInput={() => status === 'invalid' && setStatus('idle')} />
          </label>
          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? t.form.sending : t.form.send} <FiSend aria-hidden="true" />
          </button>
          <p className={`form__status is-${status}`} role="status" aria-live="polite">
            {status === 'ok' && (
              <>
                <FiCheck aria-hidden="true" /> {t.form.ok}
              </>
            )}
            {status === 'error' && (
              <>
                <FiAlertCircle aria-hidden="true" /> {t.form.error}
              </>
            )}
            {status === 'invalid' && (
              <>
                <FiAlertCircle aria-hidden="true" /> {t.form.invalid}
              </>
            )}
          </p>
        </form>
      </div>
    </Section>
  )
}
