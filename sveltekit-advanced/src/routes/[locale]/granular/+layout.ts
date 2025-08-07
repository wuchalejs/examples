import type { LayoutLoad } from './$types'
import { locales } from 'virtual:wuchale/locales'
import { loadCatalogs } from 'wuchale/run-client'
import { loadIDs, loadCatalog } from '../../../locales/granular/loader.svelte.js'

export const load: LayoutLoad = async ({params: {locale}}) => {
    if (!locales.includes(locale)) {
        return
    }
    return {
        locale,
        catalogsGranular: await loadCatalogs(locale, loadIDs, loadCatalog)
    }
}
