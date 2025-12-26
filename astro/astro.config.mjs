// @ts-check
import { wuchale } from '@wuchale/vite-plugin';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [wuchale()],
    },
    redirects: {
        "/": "/en",
    }
});
