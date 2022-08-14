<script lang="ts">
    export let actionUrl: string;
    export let doPost: boolean = false;
    export let targetBlank: boolean = false;

</script>

<form>
    <slot></slot>
</form>