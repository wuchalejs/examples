import type { Handle } from '@sveltejs/kit';
import { loadCatalog, loadIDs, key } from './locales/loader.svelte.js'
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';

await loadLocales(key, loadIDs, loadCatalog, ['en', 'es', 'fr'])

export const handle: Handle = async ({ event, resolve }) => {
    const locale = event.url.searchParams.get('locale') ?? 'en';
    return await runWithLocale(locale, async () => {
        return await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
        })
    })
};
