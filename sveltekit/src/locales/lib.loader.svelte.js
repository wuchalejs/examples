import { defaultCollection, registerLoaders } from 'wuchale/load-utils'
import { loadCatalog, loadCount } from './.wuchale/lib.proxy.js'

const key = 'lib'

/** @type import('wuchale/runtime').Runtime[] */
const runtimes = $state([])

// for non-reactive
export const getRuntime = registerLoaders(key, loadCatalog, loadCount, defaultCollection(runtimes))

// same function, only will be inside $derived when used
export const getRuntimeRx = getRuntime
