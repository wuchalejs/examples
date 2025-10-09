// @ts-check
import { defineConfig } from "wuchale"
import { adapter as svelte } from '@wuchale/svelte'
import { adapter as js } from 'wuchale/adapter-vanilla'

export default defineConfig({
    otherLocales: ['es', 'fr'],
    adapters: {
        main: svelte(),
        js: js({
            files: [
                'src/**/+{page,layout}.{js,ts}',
                'src/**/+{page,layout}.server.{js,ts}',
                'src/lib/**/*.{js,ts}',
            ],
        })
    }
})
