// src/routes/+layout.js
import type { LayoutLoad } from './$types'
import '../app.css'
import { locales } from 'virtual:wuchale/locales'
import { browser } from '$app/environment'
import { loadLocale } from 'wuchale/load-utils'
// so that the loaders are registered before render
import '../../locales/loader.svelte.js'

export const prerender = true

export const load: LayoutLoad = async ({ params: { locale } }) => {
    if (!locales.includes(locale)) {
        return
    }
    if (browser) {
        await loadLocale(locale)
    }
    return { locale }
}
