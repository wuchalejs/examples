import { registerLoaders } from 'wuchale/load-utils'
import { loadCatalog, loadCount } from './.wuchale/main.proxy.js'

const key = 'main'

// two exports. can be used anywhere
export const getRuntime = registerLoaders(key, loadCatalog, loadCount)
export const getRuntimeRx = getRuntime
