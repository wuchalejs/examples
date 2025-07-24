import type { LayoutLoad } from './$types'
import { locales } from 'virtual:wuchale/locales'
import { loadCatalogs } from 'wuchale/run-client'
import { loadIDs, loadCatalog } from '../../../locales/granular/loader.svelte.js'

export const prerender = true

export const load: LayoutLoad = async ({params: {locale}}) => {
    if (!(locale in locales)) {
        return
    }
    return {
        locale,
        catalogsGranular: await loadCatalogs(locale, loadIDs, loadCatalog)
    }
}
