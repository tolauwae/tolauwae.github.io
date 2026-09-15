<script setup lang="ts">
import PageHeader from "./components/pageheader.vue"
import {data as essays} from "../../essays.data"

const formatDate = (date: unknown) => new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(String(date)))
</script>

<template>
  <section class="overview">
    <PageHeader variant="overview" />
    <main class="overview__content">
      <h3>Latest Essays</h3>
      <ul class="essay-list">
        <li v-for="essay in essays" :key="essay.url">
          <a :href="essay.url">
            <span class="essay-list__date">{{ formatDate(essay.frontmatter.date) }}</span>
            <span class="essay-list__title">{{ essay.frontmatter.title }}</span>
            <span v-if="essay.frontmatter.description" class="essay-list__description">
              {{ essay.frontmatter.description }}
            </span>
          </a>
        </li>
      </ul>
    </main>
  </section>
</template>

<style scoped>
h3 {
  border-bottom: 2px solid var(--text);
}

.essay-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.essay-list li {
  border-bottom: 1px solid var(--lines);
}

.essay-list a {
  display: grid;
  gap: var(--space-2) var(--space-4);
  padding: var(--space-6) 0;
  background: transparent;
  border-bottom: 0;
}

.essay-list__date {
  grid-row: span 2;
  color: var(--subtext);
  font-size: var(--tiny);
}

.essay-list__title {
  font-family: var(--serif);
  font-weight: bold;
}

.essay-list__description {
  color: var(--subtext);
}

.overview__content { box-sizing: border-box; width: 100%; max-width: var(--content-max-width); margin: 0 auto; padding: var(--space-12) var(--space-4); background-color: white; color: var(--text); }
@media (max-width: 62rem) { .overview__header-content { min-height: auto; padding-top: var(--space-12); } }
</style>
