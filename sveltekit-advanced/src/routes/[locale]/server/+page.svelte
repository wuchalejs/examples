<script>
    import { page } from "$app/state";
	const { form } = $props();
    $effect(() => {
        if (form) {
            alert(form.message)
        }
    })
</script>

<div class="m-3 text-blue-600"><a href="/{page.data.locale}">&lt;=</a></div>

<form method={/* @wc-ignore */ 'POST'}>
    <button class="p-1 me-2 text-sm border rounded-lg">
        Get message from the server
    </button>
</form>
