<script lang="ts">
import { prefersLight } from '../lib/stores';
</script>


<input class="opacity-0" type="checkbox" bind:checked={$prefersLight} />

{#if $prefersLight}
    <p>dd</p>
{:else}
    <p>fsdfsdf</p>
{/if}