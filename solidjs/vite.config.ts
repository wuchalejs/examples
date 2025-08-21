import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { wuchale } from '@wuchale/vite-plugin';

export default defineConfig({
    plugins: [wuchale(), solidPlugin()],
});
