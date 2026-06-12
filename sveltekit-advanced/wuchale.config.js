// @ts-check
import { defineConfig, pofile } from "wuchale"
import { adapter as svelte } from '@wuchale/svelte'
import { adapter as vanilla } from "wuchale/adapter-vanilla"

const urlConf = {
    localize: true,
    patterns: [
        '/',
        '/single',
        '/granular',
        '/granular-bundle',
        '/server',
        '/**'
    ]
}

export default defineConfig({
    locales: ['en', 'es-es'],
    adapters: {
        // Applies over the components inside the single route as well as the top level route.
        // Uses a single compiled catalog per locale, downloaded once.
        single: svelte({
            loader: 'sveltekit',
            url: urlConf,
            storage: pofile({location: './src/locales/single/{locale}.po'}),
            files: [
                './src/routes/{single,server}/**/*.svelte',
                './src/routes/single/**/*.svelte.{js,ts}',
                './src/routes/*.svelte',
                './src/routes/*.svelte.{js,ts}'
            ],
        }),
        // Applies over the granular route.
        // Uses one compiled catalog per locale per each file/component
        //   unless they contain /group/ in which case they will share one compiled catalog.
        // Which one to download is decided at runtime
        granularLoad: svelte({
            loader: 'sveltekit',
            files: './src/routes/granular/**/*.svelte',
            url: urlConf,
            storage: pofile({location: './src/locales/granular/{locale}.po'}),
            loading: {
                granular: true,
                group: [
                    '**/*grouped*',
                ]
            }
        }),
        // Applies over the granular-bundle route.
        // Each file directly imports all locale variants of its own catalog,
        //   even though only one will be selected at runtime.
        // It only takes the locale identifier string from the loader at runtime.
        // This mimicks how ParaglideJS downloads catalogs but is not recommended.
        granularLoadBundle: svelte({
            loader: 'sveltekit',
            files: './src/routes/granular-bundle/**/*.svelte',
            url: urlConf,
            storage: pofile({location: './src/locales/granular-bundle/{locale}.po'}),
            loading: {
                granular: true,
                direct: true,
            }
        }),
        // Used for messages that are sent from the server instead of being rendered client-side.
        // Uses one compiled catalog because bundle size optimizations are irrelevant on the server.
        // It is necessary to write the loader proxy and the compiled catalogs to disk
        //   because node.js doesn't support virtual modules.
        // Also since node.js is not a reactive environment, we have to initialize the runtime inside functions.
        server: vanilla({
            loader: 'server',
            storage: pofile({location: './src/locales/single/{locale}.po'}),
            files: './src/**/*.server.{js,ts}',
        }),
    },
})
