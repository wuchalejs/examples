// @ts-check
import { adapter as astro } from "@wuchale/astro"
import { defineConfig } from "wuchale"

export default defineConfig({
    // sourceLocale is en by default
    otherLocales: ['es'],
    adapters: {
        main: astro({
            files: './src/{pages,components}/**/*.astro'
        }),
    }
})
