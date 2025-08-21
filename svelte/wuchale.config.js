import { defineConfig } from "wuchale"
import { adapter } from '@wuchale/svelte'

export default defineConfig({
    otherLocales: ['es'],
    adapters: {
        main: adapter(),
    }
})
