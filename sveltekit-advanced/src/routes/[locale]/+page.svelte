<script lang="ts">

function plural(num: number, candidates: string[], rule = (n: number) => n === 1 ? 0 : 1) {
    const index = rule(num)
    return candidates[index].replace('#', num.toString())
}

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a class="text-blue-600" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>{plural(3, ['There is one item', 'There are # items (to test plurals)'])}</p>
