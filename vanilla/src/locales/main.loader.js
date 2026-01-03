import { registerLoaders } from 'wuchale/load-utils'
import { loadCatalog, loadIDs } from './.wuchale/main.proxy.js'

const key = 'main'

// two exports. can be used anywhere
export const getRuntime = registerLoaders(key, loadCatalog, loadIDs)
export const getRuntimeRx = getRuntime
