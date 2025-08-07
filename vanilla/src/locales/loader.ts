/// <reference types="wuchale/virtual" />

import { loadCatalog, loadIDs } from 'virtual:wuchale/proxy'
import { registerLoaders } from 'wuchale/run-client'

export default registerLoaders('main', loadCatalog, loadIDs)
