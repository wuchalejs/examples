import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { wuchale } from '@wuchale/vite-plugin';

export default defineConfig({
  plugins: [wuchale(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
