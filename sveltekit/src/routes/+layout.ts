// src/routes/+layout.js
import type { LayoutLoad } from './$types'
import { locales } from '../locales/data.js'
import { browser } from '$app/environment'
import { loadLocale } from 'wuchale/load-utils'

// so that the loaders are registered, needed only once
import '../locales/main.loader.svelte.js'
import '../locales/js.loader.js'
import '../locales/lib.loader.svelte.js'

export const load: LayoutLoad = async ({url}) => {
    const locale = url.searchParams.get('locale') ?? 'en'
    if (locales.includes(locale) && browser) {
        await loadLocale(locale)
    }
    return {
        locale,
        layoutMsg: 'Hello from layout!',
    }
}
