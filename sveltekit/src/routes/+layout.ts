// src/routes/+layout.js
import type { LayoutLoad } from './$types'
import { locales } from 'virtual:wuchale/locales'
import { loadCatalogs } from 'wuchale/load-utils/pure'
import { loadIDs, loadCatalog } from '../locales/loader.svelte.js'

export const load: LayoutLoad = async ({url}) => {
    const locale = url.searchParams.get('locale') ?? 'en'
    if (!locales.includes(locale)) {
        return
    }
    return {
        locale,
        catalogs: await loadCatalogs(locale, loadIDs, loadCatalog)
    }
}
