<script>
    import Comp1 from "./comp1.svelte";
    import Comp2 from "./comp2.svelte";
    import { page } from "$app/state";
</script>

<div class="m-3 text-blue-600"><a href="/{page.data.locale}">&lt;=</a></div>

<Comp1 />
<Comp2 />
