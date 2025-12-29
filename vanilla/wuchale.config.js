import { adapter as basic } from 'wuchale/adapter-vanilla'
import { defineConfig } from 'wuchale'

export default defineConfig({
    locales: ['en', 'es'],
    adapters: {
        main: basic({
            loader: 'vite',
        })
    }
})
