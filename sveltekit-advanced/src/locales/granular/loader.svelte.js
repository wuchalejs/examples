/// <reference types="wuchale/virtual" />

import { loadCatalog, loadIDs } from 'virtual:wuchale/loader' // or /loader/sync
import { page } from '$app/state'
import { Runtime } from 'wuchale/runtime'

export {loadIDs, loadCatalog}

export default (/** @type {string} */ loadID) => {
    return page.data.catalogsGranular?.[loadID] ?? new Runtime()
}
