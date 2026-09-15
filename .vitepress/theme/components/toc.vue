<script setup lang="ts">
import {useData} from "vitepress"

const {page} = useData()
</script>

<template>
  <nav id="toc" aria-labelledby="toc-title">
    <h2 id="toc-title">Contents</h2>
    <ul v-if="page.headers.length">
      <li v-for="header in page.headers" :key="header.slug">
        <a :href="header.link">{{ header.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#toc {
  align-self: start;
  padding: 0 var(--space-4) var(--space-8) 0;
  text-align: end;
}

h2 {
  margin: 0 0 var(--space-2);
  font-family: var(--serif);
  font-size: 1rem;
}

:deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
}

:deep(a) {
  color: var(--subtext);
  font-family: var(--serif);
  font-size: var(--toc);
  line-height: 1.0;
  text-decoration: none;
  background-color: inherit;
  border: none;
}

:deep(a:hover) {
  color: var(--text);
  text-decoration: none;
  background-color: inherit;
  border-bottom: 1px solid var(--text);
}
</style>
