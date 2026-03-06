DIRS = svelte sveltekit sveltekit-advanced react solidjs astro vanilla server

define run_all
	for dir in $(DIRS); do \
		cd $$dir ; \
		npm run $(1) ; \
		npm run check --if-present ; \
		npm run build ; \
		cd .. ; \
	done
endef

updatecheck:
	$(call run_all,installLatest)

updatechecklocal:
	$(call run_all,installLocal)
