// src/routes/+layout.js
import type { LayoutLoad } from './$types'
import '../app.css'
import { locales } from 'virtual:wuchale/locales'
import { loadCatalogs } from 'wuchale/run-client'
import { loadIDs, loadCatalog } from '../../locales/single/loader.svelte.js'

export const load: LayoutLoad = async ({params: {locale}}) => {
    if (!(locale in locales)) {
        return
    }
    return {
        locale,
        catalogs: await loadCatalogs(locale, loadIDs, loadCatalog)
    }
}
