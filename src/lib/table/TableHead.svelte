<script lang="ts">
	// --------- Imports ---------
	import {getContext} from 'svelte';
	import {getTableStateByKey} from '$lib/state/virtualTableState.svelte';
	// --------- State ---------
	let columns = getTableStateByKey("columns")
	// --------- Derived ---------

	// --------- Inspect ---------
	// --------- Function --------
</script>
<div class="grid grid-cols-{columns.length}">
	{#each columns as col (col.index)}
		<div class="w-{col.width}" class:frozen={col.frozen}>
			{col.name}
		</div>
	{/each}
</div>

<style>

	.frozen{
			background-color: gray;
	}

</style>