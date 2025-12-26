// Astro loader template (server-side, synchronous)
// This is a template file that wuchale will use to generate the actual loader
import { loadCatalog, loadIDs } from './.wuchale/main.proxy.sync.js'
import { currentRuntime } from 'wuchale/load-utils/server'

const key = 'main'

export { loadCatalog, loadIDs, key }

// For non-reactive server-side rendering
export const getRuntime = (/** @type {string} */ loadID) => currentRuntime(key, loadID)

// Same function for compatibility
export const getRuntimeRx = getRuntime
