import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { wuchale } from 'wuchale/vite';

export default defineConfig({
	plugins: [
		wuchale(),
		sveltekit()
	],
    server: {
        fs: {
            allow: ['locales']
        }
    },
    optimizeDeps: {
        exclude: ['sv-lib'],
    }
});

