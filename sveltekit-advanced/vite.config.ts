import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { wuchale } from '@wuchale/vite-plugin';

export default defineConfig({
	plugins: [
		wuchale(),
		tailwindcss(),
		sveltekit()
	],
});

