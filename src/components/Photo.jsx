import { useState } from 'react'

const BASE = import.meta.env.BASE_URL

// foto com fallback caso o arquivo não exista.
export default function Photo({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div className={`photo photo--fallback ${className}`} role="img" aria-label={alt}>
        <span>PL</span>
      </div>
    )
  }
  return (
    <img
      className={`photo ${className}`}
      src={`${BASE}${src}`}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
