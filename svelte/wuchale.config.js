import { defineConfig } from "wuchale"
import { adapter } from '@wuchale/svelte'

export default defineConfig({
    otherLocales: ['es', 'fr'],
    adapters: {
        main: adapter(),
    }
})
