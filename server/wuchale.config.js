// @ts-check
import { defineConfig } from "wuchale"
import { adapter } from 'wuchale/adapter-vanilla'

export default defineConfig({
    otherLocales: ['es', 'fr'],
    adapters: {
        main: adapter({
            loader: 'server',
            outDir: 'dist',
        }),
    }
})
