
            import * as enOfmain from './en.compiled.main.js'
import * as esOfmain from './es.compiled.main.js'
import * as frOfmain from './fr.compiled.main.js'
            const catalogs = {main: {en: enOfmain,es: esOfmain,fr: frOfmain}}
            export const loadIDs = ['main']
            export const loadCatalog = (loadID, locale) => catalogs[loadID][locale]
        