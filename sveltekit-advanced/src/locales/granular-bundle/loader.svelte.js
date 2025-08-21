// This is just the default loader.
// You can customize it however you want, it will not be overwritten once it exists and is not empty.

import { page } from '$app/state'

/**
 * @param {{ [locale: string]: import("wuchale/runtime").CatalogModule }} catalogs
*/ 
export default catalogs => catalogs[page.data.locale ?? 'en']
