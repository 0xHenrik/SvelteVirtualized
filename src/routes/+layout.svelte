<script lang="ts">
	import '../app.css';
	import Table from "$lib/components/table/Table.svelte"
	let { children } = $props();
</script>
{@render children()}
