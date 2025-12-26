import { sveltekit } from '@sveltejs/kit/vite';
import { wuchale } from '@wuchale/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [wuchale(), sveltekit()]
});
