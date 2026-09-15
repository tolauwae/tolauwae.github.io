<script setup lang="ts">
import { computed, useId } from "vue"

const props = defineProps<{
  level?: unknown
}>()

const tooltipId = useId()
const normalizedLevel = computed(() => {
  const level = Number(props.level)
  return Number.isInteger(level) ? Math.min(Math.max(level, 0), 5) : 0
})
</script>

<template>
  <span class="" tabindex="0" :aria-describedby="tooltipId">
    <a class="hide-link ail-badge" target="_blank" href="https://danielmiessler.com/blog/ai-influence-level-ail">
    AIL <b>{{ level }}</b>
    <svg
      v-for="marker in 5"
      :key="marker"
      class="ail-badge__marker"
      :class="{ inactive: marker > normalizedLevel }"
      viewBox="0 0 6 4"
      aria-hidden="true"
    >
      <rect width="6" height="4" rx="2" />
    </svg>
    <span :id="tooltipId" class="ail-badge__tooltip" role="tooltip">
      AI Influence Level (AIL) v1.1
    </span>
    </a>
  </span>
</template>

<style scoped>
.ail-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 0 var(--space-1);
  border-radius: var(--space-1);
}

.ail-badge__marker {
  width: calc(1.5 * var(--space-1));
  height: var(--space-1);
  fill: currentColor;
}

.ail-badge__marker.inactive {
  fill: var(--lines);
}

.ail-badge__tooltip {
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 50%;
  z-index: 10;
  width: max-content;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--space-1);
  background-color: var(--surface);
  color: var(--text-inverse);
  font-size: var(--tiny);
  font-weight: 500;
  line-height: 1.5;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, calc(-1 * var(--space-1)));
  transition: opacity 120ms ease, transform 120ms ease, visibility 120ms ease;
  visibility: hidden;
}

.hide-link {
    color: inherit;
    background: inherit;
    border: none;
}

.ail-badge:hover,
.ail-badge:focus-visible {
  background-color: var(--mantle);
  outline: none;
}

.ail-badge:hover .ail-badge__tooltip,
.ail-badge:focus-visible .ail-badge__tooltip {
  opacity: 1;
  transform: translate(-50%, 0);
  visibility: visible;
}
</style>
