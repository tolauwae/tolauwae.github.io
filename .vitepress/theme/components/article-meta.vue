<script setup lang="ts">
import {useData} from "vitepress"
import AilBadge from "./ail-badge.vue"

const {frontmatter} = useData()

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
})

function formatDate(value: unknown): string {
  if (!value) return ""

  const date = value instanceof Date ? value : new Date(String(value))
  return Number.isNaN(date.getTime()) ? String(value) : dateFormatter.format(date)
}
</script>

<template>
  <section class="metadata">
    <div class="article__metadata-grid content-grid">
      <div class="article__metadata-content content-grid-prose-and-notes">
        <span class="subdued tags">
          <b>{{ frontmatter.author }}</b>
          <span>{{ formatDate(frontmatter.date) }}</span>
          <AilBadge :level="frontmatter.ail" />
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  font-family: var(--sans-serif);
}

.article__metadata-content {
  padding-top: var(--space-8);
  border-bottom: 2px solid var(--lines);
}

.metadata {
  font-size: var(--tiny);
  line-height: 1.5;
}

span.tags {
  display: flex;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
}

</style>
