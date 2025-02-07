<script lang="ts">
	 import TableCell from '$lib/components/table/TableCell.svelte';
	 const {item}  = $props();
	 const col = $derived(Object.keys(item))
</script>
<div class="flex w-full">
	{#each col as col,index (index)}
		<TableCell {index} cell={item[col]} />
	{/each}
</div>