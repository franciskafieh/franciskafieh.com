<script lang="ts">
import { prefersLight } from '../lib/stores';
	// let icon;

	// if ($theme === 'light') {
	// 	icon = Sun;
	// } else {
	// 	icon = Moon;
	// }
	// function toggleTheme() {
	// 	$theme = $theme === 'light' ? 'dark' : 'light';

	// 	if ($theme === 'light') {
	// 		icon = Sun;
	// 	} else {
	// 		icon = Moon;
	// 	}
	// }

	// TODO: cleanup and replace with checkbox
	// <input type=checkbox bind:checked={yes}>

</script>


<input class="opacity-0" type="checkbox" bind:checked={$prefersLight} />

{#if $prefersLight}
	<p>dd</p>
{:else}
	<p>fsdfsdf</p>
{/if}