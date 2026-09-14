<script setup lang="ts">
import ArticleMeta from "./components/articlemeta.vue"
import PageHeader from "./components/pageheader.vue"
import ToC from "./components/toc.vue"
</script>

<template>
  <article class="article">
    <PageHeader />
    <main class="article__main">
      <ArticleMeta />
      <section class="article__content">
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
  padding-top: var(--space-8);
}

.article__content #toc {
  grid-column: 1;
}

.article__body {
  grid-column: 2 / 4;
  min-width: 0;
}

.article__body > :deep(div) {
  display: grid;
  grid-template-columns: minmax(0, var(--content-max-width)) minmax(0, var(--sidebar-max-width));
}

.article__body > :deep(div > *) {
  grid-column: 1;
  min-width: 0;
}

.article__body :deep(.margin-notes) {
  display: contents;
}

.article__body :deep(.margin-notes__title) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.article__body :deep(.margin-note-group) {
  display: flex;
  grid-column: 2;
  grid-row: var(--margin-note-row);
  align-self: start;
  flex-direction: column;
  gap: var(--space-4);
  min-width: 0;
  padding-left: var(--space-4);
}

.article__body :deep(.margin-note-group--fallback) {
  grid-column: 1;
  grid-row: auto;
  padding: 0;
}

.article__main {
  background-color: white;
  color: var(--text);
}

@media (max-width: 62rem) {
  .article__content {
    grid-template-columns: minmax(0, 1fr);
    padding-right: var(--space-4);
    padding-left: var(--space-4);
  }

  .article__content #toc,
  .article__body {
    grid-column: 1;
  }

  .article__body > :deep(div) {
    grid-template-columns: minmax(0, 1fr);
  }

  .article__body :deep(.margin-notes) {
    display: block;
    grid-column: 1;
    min-width: 0;
    margin-top: var(--space-8);
  }

  .article__body :deep(.margin-notes__title) {
    position: static;
    width: auto;
    height: auto;
    margin: 0 0 var(--space-4);
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  .article__body :deep(.margin-note-group) {
    display: flex;
    margin-bottom: var(--space-4);
    padding: 0;
  }
}
</style>
