import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { wuchale } from '@wuchale/vite-plugin';

export default defineConfig({
    plugins: [wuchale(), solidPlugin()],
    resolve: {
        // for locally checking, without installing solid-js in wuchale
        dedupe: ['solid-js']
    }
});
