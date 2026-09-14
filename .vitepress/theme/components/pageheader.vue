<script setup lang="ts">
import {useData} from "vitepress"

const {frontmatter} = useData()
</script>

<template>
  <header class="article__header">
    <div class="article__header-grid">
      <div class="article__header-content">
        <h1>{{ frontmatter.title }}</h1>
        <p v-if="frontmatter.description">{{ frontmatter.description }}</p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.article__header {
  background-color: var(--surface);
  color: var(--text-inverse);
}

.article__header-grid {
  display: grid;
  grid-template-columns: var(--sidebar-max-width) var(--content-max-width) var(--sidebar-max-width);
  box-sizing: border-box;
  width: 100%;
  max-width: var(--page-max-width);
  min-height: calc(4 * var(--navbar-height));
  margin: 0 auto;
  padding: var(--space-16) 0 var(--space-12);
}

.article__header-content {
  grid-column: 2 / -1;
  align-self: center;
  max-width: var(--content-max-width);
}

.article__header h1 {
  margin: 0;
  font-size: var(--title);
  font-weight: bold;
  line-height: 1.2;
}

.article__header p {
  margin: var(--space-4) 0 0;
  color: color-mix(in srgb, var(--text-inverse) 70%, transparent);
  line-height: 1.5;
}

@media (max-width: 62rem) {
  .article__header-grid {
    grid-template-columns: minmax(0, var(--sidebar-max-width)) minmax(0, var(--content-max-width));
    padding-right: var(--space-4);
    padding-left: var(--space-4);
  }
}

@media (max-width: 50rem) {
  .article__header-grid {
    display: block;
    min-height: auto;
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }
}
</style>
