import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { useRoute } from "vitepress"

export function useMarginNoteLayout() {
  const contentRef = ref<HTMLElement | null>(null)
  const route = useRoute()
  let layoutFrame: number | undefined
  let resizeObserver: ResizeObserver | undefined
  let isMounted = false

  function resetMarginNoteLayout(): void {
    const content = contentRef.value
    if (!content) return
    const body = content.querySelector<HTMLElement>(".article__body")
    const markdown = body?.querySelector<HTMLElement>(":scope > div")
    if (markdown) markdown.style.removeProperty("min-height")
    body?.querySelectorAll<HTMLElement>(".margin-notes").forEach((notes) => {
      notes.classList.remove("margin-notes--ready", "margin-notes--measuring")
      notes.querySelectorAll<HTMLElement>(".margin-note-group").forEach((group) => {
        group.style.removeProperty("--margin-note-top")
      })
    })
  }

  function getSpacing(markdown: HTMLElement): number {
    const probe = document.createElement("span")
    probe.style.cssText = "position:absolute; visibility:hidden; height:var(--space-4); width:0"
    markdown.append(probe)
    const spacing = probe.getBoundingClientRect().height
    probe.remove()
    return spacing
  }

  function layoutMarginNotes(): void {
    if (!isMounted) return
    const content = contentRef.value
    const layoutMode = content && getComputedStyle(content).getPropertyValue("--margin-note-layout").trim()
    if (!content || layoutMode !== "sidebar") {
      resetMarginNoteLayout()
      return
    }
    const body = content.querySelector<HTMLElement>(".article__body")
    const markdown = body?.querySelector<HTMLElement>(":scope > div")
    const notes = body?.querySelector<HTMLElement>(":scope > div > .margin-notes")
    if (!body || !markdown || !notes) return
    resetMarginNoteLayout()
    notes.classList.add("margin-notes--measuring")
    void notes.offsetHeight

    const groups = Array.from(notes.querySelectorAll<HTMLElement>(":scope > .margin-note-group"))
    const markdownRect = markdown.getBoundingClientRect()
    const spacing = getSpacing(markdown)
    let previousBottom = 0
    const offsets: Array<[HTMLElement, number]> = []

    for (const group of groups) {
      const referenceId = group.dataset.marginNoteRef
      const anchor = referenceId ? document.getElementById(referenceId) : null
      if (!anchor || !content.contains(anchor)) {
        notes.classList.remove("margin-notes--measuring")
        return
      }
      const paragraph = anchor.closest<HTMLElement>("p")
      const anchorTop = (paragraph ?? anchor).getBoundingClientRect().top - markdownRect.top
      const top = Math.max(anchorTop, previousBottom + spacing)
      offsets.push([group, top])
      previousBottom = top + group.getBoundingClientRect().height
    }

    const proseBottom = Math.max(0, ...Array.from(markdown.children)
      .filter((child): child is HTMLElement => child instanceof HTMLElement && !child.classList.contains("margin-notes"))
      .map((child) => child.getBoundingClientRect().bottom - markdownRect.top))
    if (previousBottom > proseBottom) markdown.style.minHeight = `${previousBottom}px`
    for (const [group, top] of offsets) group.style.setProperty("--margin-note-top", `${top}px`)
    notes.classList.remove("margin-notes--measuring")
    notes.classList.add("margin-notes--ready")
  }

  function scheduleMarginNoteLayout(): void {
    if (layoutFrame !== undefined) return
    layoutFrame = requestAnimationFrame(() => {
      layoutFrame = undefined
      void nextTick(layoutMarginNotes)
    })
  }

  watch(() => route.path, () => {
    resetMarginNoteLayout()
    scheduleMarginNoteLayout()
  })

  onMounted(() => {
    isMounted = true
    resizeObserver = new ResizeObserver(scheduleMarginNoteLayout)
    if (contentRef.value) {
      resizeObserver.observe(contentRef.value)
      const body = contentRef.value.querySelector<HTMLElement>(".article__body")
      const markdown = body?.querySelector<HTMLElement>(":scope > div")
      const notes = body?.querySelector<HTMLElement>(":scope > div > .margin-notes")
      if (markdown) resizeObserver.observe(markdown)
      if (notes) resizeObserver.observe(notes)
    }
    scheduleMarginNoteLayout()
  })

  onBeforeUnmount(() => {
    isMounted = false
    resizeObserver?.disconnect()
    if (layoutFrame !== undefined) cancelAnimationFrame(layoutFrame)
    layoutFrame = undefined
  })

  return contentRef
}
