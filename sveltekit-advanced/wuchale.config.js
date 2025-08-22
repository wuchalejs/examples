// @ts-check
import { defineConfig, defaultGenerateLoadID } from "wuchale"
import { adapter as svelte } from '@wuchale/svelte'
import { adapter as vanilla } from "wuchale/adapter-vanilla"

export default defineConfig({
    otherLocales: ['es'],
    adapters: {
        // Applies over the components inside the single route as well as the top level route.
        // Uses a single compiled catalog per locale, downloaded once.
        single: svelte({
            files: [
                './src/routes/[locale]/{single,server}/**/*.svelte',
                './src/routes/[locale]/single/**/*.svelte.{js,ts}',
                './src/routes/[locale]/*.svelte',
                './src/routes/[locale]/*.svelte.{js,ts}'
            ],
        }),
        // Applies over the granular route.
        // Uses one compiled catalog per locale per each file/component
        //   unless they contain /group/ in which case they will share one compiled catalog.
        // Which one to download is decided at runtime
        granularLoad: svelte({
            files: './src/routes/[locale]/granular/**/*',
            catalog: './src/locales/granular/{locale}',
            granularLoad: true,
            generateLoadID: filename => {
                if (filename.includes('grouped')) {
                    return 'grouped'
                }
                return defaultGenerateLoadID(filename)
            },
        }),
        // Applies over the granular-bundle route.
        // Each file directly imports all locale variants of its own catalog,
        //   even though only one will be selected at runtime.
        // It only takes the locale identifier string from the loader at runtime.
        // This mimicks how ParaglideJS downloads catalogs but is not recommended.
        granularLoadBundle: svelte({
            files: './src/routes/[locale]/granular-bundle/**/*',
            catalog: './src/locales/granular-bundle/{locale}',
            granularLoad: true,
            bundleLoad: true,
        }),
        // Used for messages that are sent from the server instead of being rendered client-side.
        // Uses one compiled catalog because bundle size optimizations are irrelevant on the server.
        // It is necessary to write the loader proxy and the compiled catalogs to disk
        //   because node.js doesn't support virtual modules.
        // Also since node.js is not a reactive environment, we have to initialize the runtime inside functions.
        server: vanilla({
            files: './src/**/*.server.{js,ts}',
            writeFiles: {
                compiled: true,
                proxy: true,
            },
        }),
    },
})
