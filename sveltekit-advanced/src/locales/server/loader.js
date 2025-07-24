import { loadCatalog, loadIDs } from './proxy.js' // or loader/sync
import { loadLocales } from 'wuchale/run-server'

export default await loadLocales('main', loadIDs, loadCatalog, ['en', 'es'])
