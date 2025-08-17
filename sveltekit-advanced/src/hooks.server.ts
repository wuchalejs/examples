import type { Handle } from '@sveltejs/kit';
import './locales/server/loader.js'
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';

// these loaders need SSR, need to load the loaders once at startup for the server
import * as singleLoader from './locales/single/loader.svelte.js'
import * as granularLoader from './locales/granular/loader.svelte.js'

const locales = ['en', 'es']

await loadLocales(singleLoader.key, singleLoader.loadIDs, singleLoader.loadCatalog, locales)
await loadLocales(granularLoader.key, granularLoader.loadIDs, granularLoader.loadCatalog, locales)

export const handle: Handle = async ({ event, resolve }) => {
    const locale = event.params.locale ?? 'en';
    return await runWithLocale(locale, () =>
        resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
        })
    );
};
