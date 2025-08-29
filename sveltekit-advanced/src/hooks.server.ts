import type { Handle } from '@sveltejs/kit';
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';

// these loaders need SSR, need to load the loaders once at startup for the server
import * as single from './locales/loader.svelte.js'
import * as granular from './locales/granular/loader.ssr.svelte.js'
import * as server from './locales/loader.js'

const locales = ['en', 'es-es']

await loadLocales(single.key, single.loadIDs, single.loadCatalog, locales)
loadLocales(granular.key, granular.loadIDs, granular.loadCatalog, locales) // separate sync loader for ssr
loadLocales(server.key, server.loadIDs, server.loadCatalog, locales) // sync loader directly exported

export const handle: Handle = async ({ event, resolve }) => {
    let locale = event.params.locale ?? 'en';
    if (!locales.includes(locale)) {
        locale = 'en'
    }
    return await runWithLocale(locale, () =>
        resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
        })
    );
};
