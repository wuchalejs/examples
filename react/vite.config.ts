import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { wuchale } from '@wuchale/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
    plugins: [wuchale(), react()],
})
