<script lang="ts">
    import { goto } from '$app/navigation';
    import { locales } from 'virtual:wuchale/locales';
    const { data, children} = $props()
    const displayName = (loc: string) => new Intl.DisplayNames([loc], {type: 'language'}).of(loc)
</script>

<div>
    <select value={data.locale} onchange={e => goto(`/${(<HTMLSelectElement>(e.target))?.value ?? ''}`)}>
        {#each locales as locale}
            <option value={locale}>{displayName(locale)}</option>
        {/each}
    </select>
</div>
<nav>
    <ul>
        <li class="ml-6 text-blue-600"><a href="/{data.locale}/single/" data-sveltekit-preload-data="off">Single</a></li>
        <li class="ml-6 text-blue-600"><a href="/{data.locale}/granular/" data-sveltekit-preload-data="off">Granular</a></li>
        <li class="ml-6 text-blue-600"><a href="/{data.locale}/granular-bundle/" data-sveltekit-preload-data="off">Granular bundle</a></li>
        <li class="ml-6 text-blue-600"><a href="/{data.locale}/server/" data-sveltekit-preload-data="off">Server</a></li>
    </ul>
</nav>

{@render children()}
