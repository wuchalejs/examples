import { currentRuntime } from 'wuchale/load-utils/server'
import { loadCatalog, loadCount } from './.wuchale/main.proxy.sync.js'

export const key = 'main'
export { loadCatalog, loadCount } // for loading before runWithLocale

// two exports, same function
export const getRuntime = (loadID = 0) => currentRuntime(key, loadID)
export const getRuntimeRx = getRuntime
