<script setup lang="ts">
import ArticleMeta from "./components/article-meta.vue"
import PageHeader from "./components/page-header.vue"
import TableOfContent from "./components/table-of-content.vue"
import { useMarginNoteLayout } from "./margin-note-layout"

const contentRef = useMarginNoteLayout()
</script>

<template>
  <article class="article">
    <PageHeader />
    <main class="article__main">
      <ArticleMeta />
      <section
        ref="contentRef"
        class="article__content content-grid"
      >
        <TableOfContent />
        <Content class="article__body content-grid-prose-and-notes" />
      </section>
    </main>
  </article>
</template>

<style scoped>
.article__content {
  padding-top: var(--space-4);
}

.article__content #toc {
  grid-column: 1;
}

.article__body > :deep(div) {
  min-width: 0;
}

.article__body > :deep(div > :not(.margin-notes)) {
  max-width: var(--content-max-width);
  min-width: 0;
}

.article__body > :deep(div > p) {
  text-align: justify;
  text-justify: inter-word;
}
.article__body :deep(.margin-notes) { margin-top: var(--space-8); }

.article__body :deep(.margin-notes__title) {
  margin: 0 0 var(--space-4);
}

.article__body :deep(.margin-note-group) {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  min-width: 0;
  margin-bottom: var(--space-4);
}
.article__body :deep(.footnote-backref) { display: inline; }

:deep(.footnote-ref a) {
  margin-left: 0.25rem;
}

.article__main {
  background-color: white;
  color: var(--text);
}

@media (width > 62rem) {
  .article__body > :deep(div) { position: relative; }

  .article__body :deep(.margin-notes__title) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }
  .article__body :deep(.margin-note-group) { padding-left: var(--space-4); }
  .article__body :deep(.footnote-backref) { display: none; }

  .article__body :deep(.margin-notes--measuring),
  .article__body :deep(.margin-notes--ready) {
    position: absolute; inset: 0 0 auto var(--content-max-width);
    width: var(--sidebar-max-width); margin-top: 0;
  }
  .article__body :deep(.margin-notes--measuring) { visibility: hidden; }

  .article__body :deep(.margin-notes--measuring .margin-note-group) {
    position: static; margin-bottom: var(--space-4);
  }

  .article__body :deep(.margin-notes--ready .margin-note-group) {
    position: absolute; top: var(--margin-note-top); right: 0; left: 0; margin-bottom: 0;
  }
}

@media (width <= 62rem) {
  .article__content #toc { display: none; }
}
</style>
