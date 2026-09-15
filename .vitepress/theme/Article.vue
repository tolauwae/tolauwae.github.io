<script setup lang="ts">
import ArticleMeta from "./components/articlemeta.vue"
import PageHeader from "./components/pageheader.vue"
import ToC from "./components/toc.vue"
import { useMarginNoteLayout } from "./margin-note-layout"

const contentRef = useMarginNoteLayout()
</script>

<template>
  <article class="article">
    <PageHeader />
    <main class="article__main">
      <ArticleMeta />
      <section ref="contentRef" class="article__content">
        <ToC />
        <Content class="article__body" />
      </section>
    </main>
  </article>
</template>

<style scoped>
.article__content {
  display: grid;
  grid-template-columns: var(--sidebar-max-width) var(--content-max-width) var(--sidebar-max-width);
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 auto;
  padding-top: var(--space-4);
}

.article__content #toc { grid-column: 1; }
.article__body { grid-column: 2 / 4; min-width: 0; }
.article__body > :deep(div) { position: relative; min-width: 0; }
.article__body > :deep(div > :not(.margin-notes)) { max-width: var(--content-max-width); min-width: 0; }
.article__body :deep(.margin-notes) { margin-top: var(--space-8); }
.article__body :deep(.margin-notes__title) {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}
.article__body :deep(.margin-note-group) {
  display: flex; flex-direction: column; gap: var(--space-4); min-width: 0;
  margin-bottom: var(--space-4); padding-left: var(--space-4);
}
.article__body :deep(.margin-notes--measuring),
.article__body :deep(.margin-notes--ready) {
  position: absolute; inset: 0 0 auto var(--content-max-width);
  width: var(--sidebar-max-width); margin-top: 0;
}
.article__body :deep(.margin-notes--measuring) { visibility: hidden; }
.article__body :deep(.margin-notes--measuring .margin-note-group) { position: static; margin-bottom: var(--space-4); }
.article__body :deep(.margin-notes--ready .margin-note-group) {
  position: absolute; top: var(--margin-note-top); right: 0; left: 0; margin-bottom: 0;
}

:deep(.footnote-ref a) {
  margin-left: 0.25rem;
}

.article__main { background-color: white; color: var(--text); }

@media (max-width: 62rem) {
  .article__content { grid-template-columns: minmax(0, 1fr); padding-right: var(--space-4); padding-left: var(--space-4); }
  .article__content #toc, .article__body { grid-column: 1; }
  .article__body > :deep(div) { position: static; min-height: 0; }
  .article__body > :deep(div > :not(.margin-notes)) { max-width: none; }
  .article__body :deep(.margin-notes), .article__body :deep(.margin-notes--ready) {
    position: static; inset: auto; display: block; width: auto; min-width: 0; margin-top: var(--space-8);
  }
  .article__body :deep(.margin-notes__title) {
    position: static; width: auto; height: auto; margin: 0 0 var(--space-4);
    overflow: visible; clip: auto; white-space: normal;
  }
  .article__body :deep(.margin-note-group), .article__body :deep(.margin-notes--ready .margin-note-group) {
    position: static; inset: auto; display: flex; margin-bottom: var(--space-4); padding: 0;
  }
}
</style>
