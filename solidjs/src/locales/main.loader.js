import { loadCatalog, loadIDs } from './.wuchale/main.proxy.js'
import { registerLoaders } from 'wuchale/load-utils'
import { createStore } from 'solid-js/store'

const key = 'main'

const [store, setStore] = createStore({})

// two exports. can be the same because solid-js can use them anywhere unlike react
export const getRuntimeRx = registerLoaders(key, loadCatalog, loadIDs, {
    get: loadID => store[loadID],
    set: (loadID, runtime) => setStore(loadID, () => runtime),
})
export const getRuntime = getRuntimeRx
