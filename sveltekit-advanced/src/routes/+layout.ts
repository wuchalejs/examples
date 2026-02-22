// src/routes/+layout.js
import type { LayoutLoad } from './$types'
import './app.css'
import { browser } from '$app/environment'
import { loadLocale } from 'wuchale/load-utils'
// so that the loaders are registered before render
import '../locales/single.loader.svelte.js'
import { getLocale } from '../locales/single.url'

export const prerender = true

export const load: LayoutLoad = async ({url}) => {
    const locale = getLocale(url)
    if (browser) {
        await loadLocale(locale)
    }
    return { locale }
}
