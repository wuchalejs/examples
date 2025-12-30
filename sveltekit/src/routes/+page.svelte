<script lang="ts">
    import { page } from '$app/state'
    import { greet } from './hello.svelte.js'
</script>

<p><a class="text-blue-600" href="/path?locale={page.data.locale}">Go to sub</a></p>
<h1>Welcome to SvelteKit</h1>
<p>{greet()}</p>
<p>{page.data.layoutMsg}</p>
<p>Visit <a class="text-blue-600" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style lang="scss">
    $font-stack: Helvetica, sans-serif;
    $primary-color: cyan;

    p {
      font: 100% $font-stack;
      color: $primary-color;
    }
</style>
