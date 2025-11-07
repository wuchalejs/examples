import type { LayoutLoad } from './$types'
import { locales } from '../../../locales/data.js'

export const load: LayoutLoad = async ({params: {locale}}) => {
    if (!(locale in locales)) {
        return
    }
    return { locale }
}
