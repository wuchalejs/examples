updateall:
	for dir in 'svelte' 'sveltekit' 'sveltekit-advanced' 'react' 'solidjs' 'astro' 'vanilla' 'server' ; do \
        cd $$dir ; \
        npm run installLatest ; \
		npm run check --if-present ; \
        npm run build ; \
        cd .. ; \
    done
