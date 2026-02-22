<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/state';
    import { locales } from '../locales/data.js';
    import { getLocale } from '../locales/single.url.js';
    const { children} = $props()
    const displayName = (loc: string) => new Intl.DisplayNames([loc], {type: 'language'}).of(loc)
</script>

<div>
    <select value={getLocale(page.url)} onchange={e => goto(/* @wc-ignore */ `/${(<HTMLSelectElement>(e.target))?.value ?? ''}`)}>
        {#each locales as locale}
            <option value={locale}>{displayName(locale)}</option>
        {/each}
    </select>
</div>
<nav>
    <ul>
        <li class="ml-6 text-blue-600"><a href="/single" data-sveltekit-preload-data="off">Single</a></li>
        <li class="ml-6 text-blue-600"><a href="/granular" data-sveltekit-preload-data="off">Granular</a></li>
        <li class="ml-6 text-blue-600"><a href="/granular-bundle" data-sveltekit-preload-data="off">Granular bundle</a></li>
        <li class="ml-6 text-blue-600"><a href="/server" data-sveltekit-preload-data="off">Server</a></li>
    </ul>
</nav>

{@render children()}
