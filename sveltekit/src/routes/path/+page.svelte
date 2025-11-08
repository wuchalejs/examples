<script lang="ts">
    import { page } from "$app/state"
    let { data } = $props()
</script>
<p>
    <a class="text-blue-600" href="/?locale={page.data.locale}">&lt =</a>
</p>

<p>This is a sub path</p>

<p>Load messages from page state</p>
<p>{page.data.layoutMsg}</p>
<p>{page.data.nestedLayoutMsg}</p>

<p>Load messages from props/data</p>
<p>{data.layoutMsg}</p>
<p>{data.nestedLayoutMsg}</p>
