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
        <Content />
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

.article__content * {
  grid-column: 2;
}

.article__main {
  background-color: white;
  color: var(--text);
}
</style>
