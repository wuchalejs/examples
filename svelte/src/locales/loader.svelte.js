// This is just the default loader.
// You can customize it however you want, it will not be overwritten once it exists and is not empty.

/// <reference types="wuchale/virtual" />

import { loadCatalog, loadIDs, key } from 'virtual:wuchale/proxy' // or proxy/sync
import { registerLoaders, defaultCollection } from 'wuchale/load-utils'

const catalogs = $state({})

// two exports
export const get = registerLoaders(key, loadCatalog, loadIDs, defaultCollection(catalogs))
export default get
