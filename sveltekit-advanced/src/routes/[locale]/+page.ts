import type { EntryGenerator } from './$types'
import { locales } from 'virtual:wuchale/locales'

export const entries: EntryGenerator = () => {
	return Object.keys(locales).map(locale => ({ locale }))
}

