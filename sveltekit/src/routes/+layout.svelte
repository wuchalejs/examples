<script lang="ts">
    import { locales } from 'virtual:wuchale/locales';
    const { data, children} = $props()
</script>

<nav>
    <ul>
        {#each Object.entries(locales) as [locale, name]}
            {#if locale === data.locale}
                <li class="ml-6">{name}</li>
            {:else}
                <li class="ml-6 text-blue-600"><a href="?locale={locale}" data-sveltekit-preload-data="off">{name}</a></li>
            {/if}
        {/each}
    </ul>
</nav>

{@render children()}
