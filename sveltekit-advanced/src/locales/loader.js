// This is just the default loader.
// You can customize it however you want, it will not be overwritten once it exists and is not empty.

import { loadCatalog, loadIDs, key } from './proxy.js'
import { currentCatalog } from 'wuchale/load-utils/server'

export { loadCatalog, loadIDs, key } // for hooks.server.{js,ts}

export default (/** @type {string} */ loadID) => currentCatalog(key, loadID)
