// transforma "texto ==destaque== texto" em texto com <mark>.
export default function Rich({ text, as: Tag = 'p', className }) {
  if (!text) return null
  const parts = String(text).split(/(==[^=]+==)/g)
  return (
    <Tag className={className}>
      {parts.map((part, i) =>
        part.startsWith('==') && part.endsWith('==') ? (
          <mark key={i} className={part.length <= 20 ? 'hl hl--nowrap' : 'hl'}>
            {part.slice(2, -2)}
          </mark>
        ) : (
          part
        ),
      )}
    </Tag>
  )
}
