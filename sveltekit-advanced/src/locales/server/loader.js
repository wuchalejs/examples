import { loadCatalog, loadIDs, key } from './proxy.js'
import { loadLocales } from 'wuchale/run-server'

export default await loadLocales(key, loadIDs, loadCatalog, ['en', 'es'])
