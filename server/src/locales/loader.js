// This is just the default loader.
// You can customize it however you want, it will not be overwritten once it exists and is not empty.

import { loadCatalog, loadIDs } from './proxy.js' // or loader/sync
import { loadLocales } from 'wuchale/load-utils/server'

export const get = await loadLocales('main', loadIDs, loadCatalog, ['en', 'es', 'fr'])
export default get
