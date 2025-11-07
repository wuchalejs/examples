import { adapter } from "@wuchale/jsx";
import { defineConfig } from "wuchale";

export default defineConfig({
    otherLocales: ['es'],
    adapters: {
        main: adapter({
            loader: "solidjs",
            variant: "solidjs",
        })
    }
})
