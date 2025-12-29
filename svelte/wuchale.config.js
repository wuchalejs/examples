import { defineConfig } from "wuchale"
import { adapter } from '@wuchale/svelte'

export default defineConfig({
    locales: ['en', 'es'],
    adapters: {
        main: adapter({
            loader: 'svelte',
        }),
    }
})
