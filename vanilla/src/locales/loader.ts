/// <reference types="wuchale/virtual" />

import { loadCatalog, loadIDs, key } from 'virtual:wuchale/proxy'
import { registerLoaders } from 'wuchale/load-utils'

export const get = registerLoaders(key, loadCatalog, loadIDs)
export default get
