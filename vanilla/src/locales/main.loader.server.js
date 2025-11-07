import { loadCatalog, loadIDs } from './.wuchale/main.proxy.sync.js'
import { currentRuntime } from 'wuchale/load-utils/server'

export const key = 'main'
export { loadCatalog, loadIDs } // for loading before runWithLocale

// two exports, same function
export const getRuntime = (/** @type {string} */ loadID) => currentRuntime(key, loadID)
export const getRuntimeRx = getRuntime
