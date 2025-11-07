import type { EntryGenerator } from './$types'
import { locales } from '../../locales/data.js'

export const entries: EntryGenerator = () => {
	return locales.map(locale => ({ locale }))
}

