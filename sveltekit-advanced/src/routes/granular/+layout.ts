import type { LayoutLoad } from './$types'
import { browser } from '$app/environment'
import { loadLocale } from 'wuchale/load-utils'
// so that the loaders are registered before render
import '../../locales/granular/granularLoad.loader.svelte.js'
import { getLocale } from '../../locales/granular/granularLoad.url'

export const prerender = true

export const load: LayoutLoad = async ({url}) => {
    const locale = getLocale(url)
    if (browser) { // and then load
        await loadLocale(locale)
    }
    return { locale }
}
