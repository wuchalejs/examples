<script>
    import Hello from "$lib/Hello.svelte";
    import { loadLocale } from 'wuchale/load-utils'
    // so that the loaders are registered first
    import '../locales/main.loader.svelte.js'
    // you can use any state from anywhere for the locale
    let locale = $state('en')
</script>

<button onclick={() => {locale = locale === 'en' ? 'es' : 'en'}}>{locale}</button>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#await loadLocale(locale)}
    <!-- Ignored because it is rendered before the catalog is loaded -->
    <!-- @wc-ignore -->
    Loading translations...
{:then}
    <Hello />
{/await}

