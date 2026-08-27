// @ts-check
import { wuchale } from '@wuchale/astro/integration';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [wuchale()]
});
