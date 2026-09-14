import type MarkdownIt from 'markdown-it'
import footnote from 'markdown-it-footnote'

type MarginNoteMeta = {
  id: number
  subId?: number
  marginRow?: number
  marginGroupStart?: boolean
  marginGroupEnd?: boolean
}

function isTopLevelBlockStart(token: MarkdownIt.Token): boolean {
  return token.level === 0 && token.block && token.nesting !== -1
}

function annotateMarginNoteRows(state: MarkdownIt.StateCore): void {
  const firstReferenceRows = new Map<number, number>()
  const footnoteStart = state.tokens.findIndex(({ type }) => type === 'footnote_block_open')
  const contentEnd = footnoteStart === -1 ? state.tokens.length : footnoteStart
  let row = 0

  for (let index = 0; index < contentEnd; index += 1) {
    const token = state.tokens[index]

    if (isTopLevelBlockStart(token)) row += 1

    if (token.type !== 'inline' || !token.children) continue

    for (const child of token.children) {
      if (child.type !== 'footnote_ref') continue

      const id = (child.meta as MarginNoteMeta).id
      if (!firstReferenceRows.has(id)) firstReferenceRows.set(id, row)
    }
  }

  if (footnoteStart === -1) return

  const noteTokens = state.tokens
    .slice(footnoteStart)
    .filter(({ type }) => type === 'footnote_open')

  for (let index = 0; index < noteTokens.length; index += 1) {
    const token = noteTokens[index]
    const meta = token.meta as MarginNoteMeta

    meta.marginRow = firstReferenceRows.get(meta.id)
  }

  for (let index = 0; index < noteTokens.length; index += 1) {
    const meta = noteTokens[index].meta as MarginNoteMeta
    const previousMeta = noteTokens[index - 1]?.meta as MarginNoteMeta | undefined
    const nextMeta = noteTokens[index + 1]?.meta as MarginNoteMeta | undefined

    meta.marginGroupStart = meta.marginRow === undefined || previousMeta?.marginRow !== meta.marginRow
    meta.marginGroupEnd = meta.marginRow === undefined || nextMeta?.marginRow !== meta.marginRow
  }

  let currentNoteMeta: MarginNoteMeta | undefined

  for (const token of state.tokens.slice(footnoteStart)) {
    if (token.type === 'footnote_open') {
      currentNoteMeta = token.meta as MarginNoteMeta
    } else if (token.type === 'footnote_close' && currentNoteMeta) {
      token.meta = currentNoteMeta
      currentNoteMeta = undefined
    }
  }
}

export default function marginNotes(md: MarkdownIt): void {
  md.use(footnote)
  md.core.ruler.after('footnote_tail', 'margin_note_rows', annotateMarginNoteRows)

  md.renderer.rules.footnote_block_open = () =>
    '<section class="margin-notes" aria-labelledby="margin-notes-label">\n' +
    '<h2 id="margin-notes-label" class="margin-notes__title">Notes</h2>\n'

  md.renderer.rules.footnote_block_close = () => '</section>\n'

  md.renderer.rules.footnote_open = (tokens, index, options, env, renderer) => {
    const meta = tokens[index].meta as MarginNoteMeta
    const anchorName = renderer.rules.footnote_anchor_name(tokens, index, options, env, renderer)
    const id = md.utils.escapeHtml(`fn${anchorName}`)
    const number = meta.id + 1
    let output = ''

    if (meta.marginGroupStart) {
      const rowStyle = meta.marginRow === undefined
        ? ''
        : ` style="--margin-note-row: ${meta.marginRow}"`
      const fallbackClass = meta.marginRow === undefined ? ' margin-note-group--fallback' : ''
      output += `<div class="margin-note-group${fallbackClass}"${rowStyle}>\n`
    }

    return `${output}<MarginNote id="${id}" :number="${number}">`
  }

  md.renderer.rules.footnote_close = (tokens, index) => {
    const meta = tokens[index].meta as MarginNoteMeta
    return `</MarginNote>\n${meta.marginGroupEnd ? '</div>\n' : ''}`
  }
}
