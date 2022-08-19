<script lang="ts">
import { prefersLight } from '../lib/stores';
import { onMount } from 'svelte';


onMount(() => {
    if ($prefersLight) {
        document.body.classList.toggle('dark');
    }
});

// "Note: Stores can be defined and used outside of Svelte components, so you can organize them in any way you please."
// TODO!!!!: inline this in a normal <script> tag in Page.astro
    // https://stackoverflow.com/questions/59126405/is-it-possible-to-access-svelte-store-from-external-js-files

</script>

<h1>ok!!</h1>
<!-- 
// const stored = localStorage.getItem('prefersLight');

// const prefersLight = stored ? Boolean(stored) : window.matchMedia('(prefers-color-scheme: light)').matches;
// localStorage.setItem('prefersLight', prefersLight.toString());

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
// 	
// } -->