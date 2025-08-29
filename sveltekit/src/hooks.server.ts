import type { Handle } from '@sveltejs/kit';
import { loadCatalog, loadIDs, key } from './locales/loader.ssr.svelte.js'
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';
import { locales } from 'virtual:wuchale/locales'

await loadLocales(key, loadIDs, loadCatalog, locales)

export const handle: Handle = async ({ event, resolve }) => {
    const locale = event.url.searchParams.get('locale') ?? 'en';
    return await runWithLocale(locale, async () => {
        return await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
        })
    })
};
