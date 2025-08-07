/// <reference types="wuchale/virtual" />

import { loadCatalog, loadIDs, key } from 'virtual:wuchale/proxy'
import { registerLoaders } from 'wuchale/run-client'

export default registerLoaders(key, loadCatalog, loadIDs)
