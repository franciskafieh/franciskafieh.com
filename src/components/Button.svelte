<script lang="ts">
    export let buttonAction: () => void = () => alert('ok!');
</script>

<button on:click={buttonAction}>This is a test!</button>

