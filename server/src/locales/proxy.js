
            import * as _w_c_main_0_ from './en.compiled.main.js'
import * as _w_c_main_1_ from './es.compiled.main.js'
import * as _w_c_main_2_ from './fr.compiled.main.js'
            const catalogs = {main: {en: _w_c_main_0_,es: _w_c_main_1_,fr: _w_c_main_2_}}
            export const loadCatalog = (loadID, locale) => catalogs[loadID][locale]
            
            export const loadIDs = ['main']
            export const key = 'main'
        
        