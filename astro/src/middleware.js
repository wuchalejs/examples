import * as main from './locales/main.loader.js'
import { runWithLocale, loadLocales, runtimeCtx } from 'wuchale/load-utils/server';
import { locales } from './locales/data.js'
import {isWebContainer} from '@webcontainer/env'

// you don't normally need this block, it is just for StackBlitz
if (isWebContainer()) {
    let currCatalog
    runtimeCtx.getStore = () => currCatalog
    runtimeCtx.run = (catalog, func) => {
        currCatalog = catalog
        return func()
    }
}

// load at server startup
loadLocales(main.key, main.loadIDs, main.loadCatalog, locales)

export function onRequest (context, next) {
    const locale = context.params.locale ?? 'en'
    return runWithLocale(locale, next);
};
