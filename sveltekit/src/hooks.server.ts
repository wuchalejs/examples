import type { Handle } from '@sveltejs/kit';
import * as main from './locales/main.loader.server.svelte.js'
import * as js from './locales/js.loader.server.js'
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';
import { locales } from './locales/data.js'

await loadLocales(main.key, main.loadIDs, main.loadCatalog, locales)
await loadLocales(js.key, js.loadIDs, js.loadCatalog, locales)

export const handle: Handle = async ({ event, resolve }) => {
    const locale = event.url.searchParams.get('locale') ?? 'en';
    return await runWithLocale(locale, async () => {
        return await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
        })
    })
};
