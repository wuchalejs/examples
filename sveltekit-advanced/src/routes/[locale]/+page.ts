import type { EntryGenerator } from './$types'
import { locales } from 'virtual:wuchale/locales'

export const entries: EntryGenerator = () => {
	return locales.map(locale => ({ locale }))
}

