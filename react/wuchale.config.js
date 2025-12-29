import { adapter } from "@wuchale/jsx";
import { defineConfig } from "wuchale";

export default defineConfig({
    locales: ['en', 'es'],
    adapters: {
        main: adapter({
            loader: 'react'
        })
    }
})
