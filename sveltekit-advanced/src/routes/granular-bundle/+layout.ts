import type { LayoutLoad } from './$types'
import { getLocale } from '../../locales/granularLoadBundle.url'
import { setLocale } from '../../locales/granularLoadBundle.loader.svelte'

export const load: LayoutLoad = async ({url}) => {
    const locale = getLocale(url)
    setLocale(locale)
    return { locale }
}
