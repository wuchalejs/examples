import { loadLocales } from 'wuchale/load-utils/server'
import { locales } from './data.js'
import { loadCatalog, loadIDs } from './.wuchale/server.proxy.sync.js'

export { loadIDs, loadCatalog }
export const key = 'server'

// two exports
export const getRuntime = await loadLocales(key, loadIDs, loadCatalog, locales)
export const getRuntimeRx = getRuntime
