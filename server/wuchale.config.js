// @ts-check
import { defineConfig } from "wuchale"
import { adapter } from 'wuchale/adapter-vanilla'

export default defineConfig({
    locales: {
        // English included by default
        es: { name: 'Spanish' },
        fr: { name: 'French' }
    },
    adapters: {
        main: adapter({
            writeFiles: {
                compiled: true,
                proxy: true,
                transformed: true,
                outDir: 'dist',
            },
            initInsideFunc: true,
        }),
    }
})
