import type { LayoutLoad } from "./$types";
import { browser } from '$app/environment'
import { locales } from '../../locales/data.js'
import { loadLocale } from 'wuchale/load-utils'

export const load: LayoutLoad = async ({url}) => {
    const locale = url.searchParams.get('locale') ?? 'en'
    if (locales.includes(locale) && browser) {
        await loadLocale(locale)
    }
    return {
        nestedLayoutMsg: "Hello from nested layout!",
    };
};
