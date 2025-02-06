<script lang="ts">
	 import * as Resizable from "$lib/components/ui/resizable"
	 import TableCell from '$lib/components/table/TableCell.svelte';
	 const {item}  = $props();
	 const col = $derived(Object.keys(item))
</script>

<Resizable.PaneGroup direction="horizontal" class="h-screen">
	{#each col as col,index (index)}
	<Resizable.Pane defaultSize={5}>
		<TableCell cell={item[col]} />
	</Resizable.Pane>
	<Resizable.Handle />
	{/each}
</Resizable.PaneGroup>