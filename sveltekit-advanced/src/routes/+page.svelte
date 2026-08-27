<script lang="ts">
    import plural from "../locales/plural";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a class="text-blue-600" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>{plural(3, ['There is one item', 'There are # items (to test plurals)'])}</p>
