<script setup lang="ts">
import PageHeader from "./components/page-header.vue"
import EssayList from "./components/essay-list.vue"
</script>

<template>
  <section class="overview">
    <PageHeader variant="overview" />
    <main class="overview__content prose-container">
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

.overview__content {
  padding-top: var(--space-12);
  padding-bottom: var(--space-12);
  background-color: white;
  color: var(--text);
}
</style>
