/// <reference types="wuchale/virtual" />

import { loadCatalog, loadIDs } from 'virtual:wuchale/loader'
import { page } from '$app/state'
import { Runtime } from 'wuchale/runtime'

export {loadIDs, loadCatalog}

export default (/** @type {string} */ fileID) => {
    return page.data.catalogs?.[fileID] ?? new Runtime()
}
