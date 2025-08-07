/// <reference types="wuchale/virtual" />

import { loadCatalog, loadIDs } from 'virtual:wuchale/proxy'
import { page } from '$app/state'
import { Runtime } from 'wuchale/runtime'

export {loadIDs, loadCatalog}

export default (/** @type {string} */ loadID) => {
    return page.data.catalogs?.[loadID] ?? new Runtime()
}
