<script setup lang="ts">
defineProps<{
  id: string
  number: number
}>()
</script>

<template>
  <aside
    :id="id"
    class="margin-note"
    role="note"
    :aria-label="`Note ${number}`"
  >
    <span
      class="margin-note__number"
      aria-hidden="true"
    >{{ number }}.</span>
    <div class="margin-note__content">
      <slot />
    </div>
  </aside>
</template>

<style scoped>
.margin-note {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: var(--space-2);
  color: var(--subtext);
  font-size: var(--tiny);
  line-height: 1.8;
}

.margin-note__number {
  font-weight: 700;
}

.margin-note__content {
  min-width: 0;
}

.margin-note__content :deep(p:last-child) {
  margin-bottom: 0;
}

.margin-note__content :deep(.footnote-backref) {
  white-space: nowrap;
}
</style>
