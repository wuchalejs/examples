// @ts-check
import { defineConfig, pofile } from "wuchale"
import { adapter as svelte } from '@wuchale/svelte'
import { adapter as js } from 'wuchale/adapter-vanilla'

export default defineConfig({
    locales: ['en', 'es', 'fr'],
    localesDir: './locales',
    adapters: {
        main: svelte({
            loader: 'sveltekit',
            storage: pofile({dir: 'locales'}),
        }),
        js: js({
            loader: 'vite',
            files: [
                'src/**/+{page,layout}.{js,ts}',
                'src/**/+{page,layout}.server.{js,ts}',
            ],
            storage: pofile({dir: 'locales'}),
        }),
        lib: svelte({
            loader: 'sveltekit',
            files: 'node_modules/sv-lib/dist/*.svelte',
            storage: pofile({dir: 'locales'}),
        })
    }
})
