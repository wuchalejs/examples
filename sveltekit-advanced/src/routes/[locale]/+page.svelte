<script>
	const { form } = $props();
    $effect(() => {
        if (form) {
            alert(form.message)
        }
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a class="text-blue-600" href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<form method={/* @wc-ignore */ 'POST'}>
    <button class="p-1 me-2 text-sm border rounded-lg">
        Get message from the server
    </button>
</form>
