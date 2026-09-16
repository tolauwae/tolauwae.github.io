// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import MarginNote from './components/marginnote.vue'
import type { Theme } from 'vitepress'
import './styles/colours.css'
import './styles/global.css'
import './styles/grid.css'
import './styles/print.css'
import './style.css'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('MarginNote', MarginNote)
  }
} satisfies Theme

