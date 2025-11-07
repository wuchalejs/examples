import { loadCatalog, loadIDs } from './.wuchale/main.proxy.js'
import { registerLoaders } from 'wuchale/load-utils'

const key = 'main'

// two exports. can be used anywhere
export const getRuntime = registerLoaders(key, loadCatalog, loadIDs)
export const getRuntimeRx = getRuntime
