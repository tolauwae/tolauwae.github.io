<script setup lang="ts">
import PageHeader from "./components/pageheader.vue"
import EssayList from "./components/essaylist.vue"
</script>

<template>
  <section class="overview">
    <PageHeader variant="overview" />
    <main class="overview__content">
      <h3>All Essays</h3>
      <EssayList />
    </main>
  </section>
</template>

<style scoped>
h3 {
  padding: var(--space-2) 0;
  border-bottom: 2px solid var(--text);
  border-top: 1px solid var(--lines);
}

.overview__content { box-sizing: border-box; width: 100%; max-width: var(--content-max-width); margin: 0 auto; padding: var(--space-12) var(--space-4); background-color: white; color: var(--text); }
@media (max-width: 62rem) { .overview__header-content { min-height: auto; padding-top: var(--space-12); } }
</style>
