import type { LayoutLoad } from './$types'
import { locales } from 'virtual:wuchale/locales'

export const prerender = true

export const load: LayoutLoad = async ({params: {locale}}) => {
    if (!(locale in locales)) {
        return
    }
    return { locale }
}
