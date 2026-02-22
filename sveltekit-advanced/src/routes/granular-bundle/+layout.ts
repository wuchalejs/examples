import type { LayoutLoad } from './$types'
import { getLocale } from '../../locales/granular-bundle/granularLoadBundle.url'

export const load: LayoutLoad = async ({url}) => {
    const locale = getLocale(url)
    return { locale }
}
