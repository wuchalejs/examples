import * as main from './locales/main.loader.js'
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';
import { locales } from './locales/data.js'

// load at server startup
loadLocales(main.key, main.loadIDs, main.loadCatalog, locales)

export function onRequest (context, next) {
    const locale = context.params.locale ?? 'en'
    return runWithLocale(locale, next);
};
