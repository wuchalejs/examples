// @ts-check
import { defineConfig } from "wuchale"
import { adapter } from 'wuchale/adapter-vanilla'

export default defineConfig({
    otherLocales: ['es', 'fr'],
    adapters: {
        main: adapter({
            writeFiles: {
                compiled: true,
                proxy: true,
                transformed: true,
                outDir: 'dist',
            },
        }),
    }
})
