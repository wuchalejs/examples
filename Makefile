updateall:
	for dir in 'svelte' 'sveltekit' 'sveltekit-advanced' 'react' 'solidjs' 'vanilla' 'server' ; do \
        cd $$dir ; \
        npm run installLatest ; \
        npm run build ; \
        cd .. ; \
    done
