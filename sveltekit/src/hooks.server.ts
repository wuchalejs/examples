import type { Handle } from '@sveltejs/kit';
import * as main from './locales/main.loader.server.svelte.js'
import * as js from './locales/js.loader.server.js'
import * as lib from './locales/lib.loader.server.svelte.js'
import { runWithLocale, loadLocales, runtimeCtx } from 'wuchale/load-utils/server';
import { locales } from './locales/data.js'
import { isWebContainer } from '@webcontainer/env'
import type { Runtime } from 'wuchale/runtime'

// you don't normally need this block, it is just for StackBlitz
if (isWebContainer()) {
    let currCatalog: ReturnType<typeof runtimeCtx.getStore>
    runtimeCtx.getStore = () => currCatalog
    runtimeCtx.run = (catalog: Runtime, func: Function) => {
        currCatalog = catalog
        return func()
    }
}

await loadLocales(main.key, main.loadIDs, main.loadCatalog, locales)
await loadLocales(js.key, js.loadIDs, js.loadCatalog, locales)
await loadLocales(lib.key, lib.loadIDs, lib.loadCatalog, locales)

export const handle: Handle = async ({ event, resolve }) => {
    const locale = event.url.searchParams.get('locale') ?? 'en';
    return await runWithLocale(locale, async () => {
        return await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
        })
    })
};
