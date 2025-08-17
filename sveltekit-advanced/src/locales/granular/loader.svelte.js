/// <reference types="wuchale/virtual" />

export { loadCatalog, loadIDs, key } from 'virtual:wuchale/proxy'
import { key } from 'virtual:wuchale/proxy'
import { page } from '$app/state'
import { Runtime } from 'wuchale/runtime'

// for server to be set from hooks.server.js
let loadC = (/** @type {string} */ loadID) => {
    return page.data.catalogsGranular?.[loadID] ?? new Runtime()
}

if (import.meta.env.SSR) {
    const { currentRT } = await import('wuchale/load-utils/server')
    loadC = loadID => currentRT(key, loadID)
}

/**
 * @param {string} loadID
 */
export default loadC
