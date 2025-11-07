import { loadCatalog, loadIDs } from './.wuchale/main.proxy.sync.js'
import { locales } from './data.js'
import { loadLocales } from 'wuchale/load-utils/server'

export { loadIDs, loadCatalog }
export const key = 'main'

// two exports
export const getRuntime = await loadLocales(key, loadIDs, loadCatalog, locales)
export const getRuntimeRx = getRuntime
