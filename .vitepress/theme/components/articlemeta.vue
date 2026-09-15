<script setup lang="ts">
import {useData} from "vitepress"
import AilBadge from "./ailbadge.vue"

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
    <div class="article__metadata-grid">
      <div class="article__metadata-content">
        <b>{{ frontmatter.author }}</b>
        <span class="subdued tags">
          <span>{{ formatDate(frontmatter.date) }}</span>
          <AilBadge :level="frontmatter.ail" />
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article__metadata-grid {
  display: grid;
  grid-template-columns: var(--sidebar-max-width) calc(var(--content-max-width) + var(--sidebar-max-width));
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 auto;
}

.article__metadata-content {
  grid-column: 2;
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
