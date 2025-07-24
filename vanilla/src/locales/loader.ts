/// <reference types="wuchale/virtual" />

import { loadCatalog, loadIDs } from 'virtual:wuchale/loader'
import { registerLoaders } from 'wuchale/run-client'

export default registerLoaders('main', loadCatalog, loadIDs)
