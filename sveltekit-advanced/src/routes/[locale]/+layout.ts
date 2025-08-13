// src/routes/+layout.js
import type { LayoutLoad } from './$types'
import '../app.css'
import { locales } from 'virtual:wuchale/locales'
import { loadCatalogs } from 'wuchale/load-utils/pure'
import { loadIDs, loadCatalog } from '../../locales/single/loader.svelte.js'

export const prerender = true

export const load: LayoutLoad = async ({params: {locale}}) => {
    if (!locales.includes(locale)) {
        return
    }
    return {
        locale,
        catalogs: await loadCatalogs(locale, loadIDs, loadCatalog)
    }
}
