import type { Handle } from '@sveltejs/kit';
import './locales/server/loader.js'
import { runWithLocale } from 'wuchale/load-utils/server';

export const handle: Handle = async ({ event, resolve }) => {
    const locale = event.params.locale ?? 'en';
    return await runWithLocale(locale, () =>
        resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%sveltekit.lang%', locale)
        })
    );
};
