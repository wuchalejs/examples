import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { wuchale } from '@wuchale/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [wuchale(), svelte()],
})
