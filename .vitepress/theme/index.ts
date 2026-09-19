// https://vitepress.dev/guide/custom-theme
import PageLayout from './page-layout.vue'
import MarginNote from './components/margin-note.vue'
import type { Theme } from 'vitepress'
import './styles/code.css'
import './styles/colours.css'
import './styles/global.css'
import './styles/layout.css'
import './styles/print.css'

export default {
  Layout: PageLayout,
  enhanceApp({ app }) {
    app.component('MarginNote', MarginNote)
  }
} satisfies Theme
