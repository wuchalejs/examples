// @ts-check
import { defineConfig } from "wuchale"
import { adapter } from 'wuchale/adapter-vanilla'

export default defineConfig({
    locales: ['en', 'es', 'fr'],
    adapters: {
        main: adapter({
            loader: 'server',
            outDir: 'dist',
        }),
    }
})
