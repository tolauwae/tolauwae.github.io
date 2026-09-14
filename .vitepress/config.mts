import { defineConfig } from 'vitepress'
import marginNotes from './markdown/margin-notes'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tolauwae.github.io",
  description: "Personal website",
  markdown: {
    headers: true,
    config(md) {
      md.use(marginNotes)
    },
  },
})
