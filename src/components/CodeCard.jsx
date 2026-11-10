// Tarjeta tipo terminal con un controlador Spring Boot de ejemplo.
const LINES = [
  '@RestController',
  '@RequestMapping("/api/v1/pedidos")',
  'public class PedidoController {',
  '',
  '    private final PedidoService service;',
  '',
  '    @GetMapping("/{id}")',
  '    public ResponseEntity<PedidoDto> buscar(',
  '            @PathVariable Long id) {',
  '        return ResponseEntity.ok(',
  '            service.buscarPorId(id));',
  '    }',
  '}',
]

const TOKEN = /(@\w+)|("[^"]*")|\b(public|class|private|final|return|void|Long)\b/g

function highlight(line) {
  const out = []
  let last = 0
  let key = 0
  let m
  const re = new RegExp(TOKEN.source, 'g')
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index))
    const cls = m[1] ? 'tk-ann' : m[2] ? 'tk-str' : 'tk-kw'
    out.push(
      <span key={key++} className={cls}>
        {m[0]}
      </span>
    )
    last = m.index + m[0].length
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

export default function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="code-file">PedidoController.java</span>
      </div>
      <pre>
        {LINES.map((line, i) => (
          <div className="code-line" key={i}>
            <span className="ln">{i + 1}</span>
            <span>{highlight(line)}</span>
          </div>
        ))}
      </pre>
      <div className="code-status">
        <span className="pulse" /> 200 OK · 12 ms
      </div>
    </div>
  )
}
