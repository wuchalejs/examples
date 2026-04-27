// Astro loader template (server-side, synchronous)
// This is a template file that wuchale will use to generate the actual loader

import { currentRuntime } from 'wuchale/load-utils/server'
import { loadCatalog, loadIDs } from './.wuchale/main.proxy.sync.js'

const key = 'main'

export { key, loadCatalog, loadIDs }

// For non-reactive server-side rendering
export const getRuntime = (/** @type {string} */ loadID) => currentRuntime(key, loadID)

// Same function for compatibility
export const getRuntimeRx = getRuntime
