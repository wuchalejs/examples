import type { Handle } from '@sveltejs/kit';
import './locales/loader.js'
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';

// these loaders need SSR, need to load the loaders once at startup for the server
import * as single from './locales/loader.svelte.js'
import * as granular from './locales/granular/loader.svelte.js'

const locales = ['en', 'es']

await loadLocales(single.key, single.loadIDs, single.loadCatalog, locales)
await loadLocales(granular.key, granular.loadIDs, granular.loadCatalog, locales)

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
