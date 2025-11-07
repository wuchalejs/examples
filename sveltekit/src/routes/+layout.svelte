<script lang="ts">
    import { locales } from '../locales/data.js';
    const { data, children} = $props()
    const displayName = (loc: string) => new Intl.DisplayNames([loc], {type: 'language'}).of(loc)
</script>

<nav>
    <ul>
        {#each locales as locale}
            {#if locale === data.locale}
                <li class="ml-6">{displayName(locale)}</li>
            {:else}
                <li class="ml-6 text-blue-600"><a href="?locale={locale}" data-sveltekit-preload-data="off">{displayName(locale)}</a></li>
            {/if}
        {/each}
    </ul>
</nav>

{@render children()}
