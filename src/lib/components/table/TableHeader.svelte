<script lang="ts">

import { getContext } from 'svelte';

const tableData = getContext("tableData");

const columns = $derived.by(() => {
	let keys = Object.keys(tableData[0]);
	return keys.map((col,i) => ({
		name:col,
		index: i,
		isFrozen: false,
		isVisible: true,
	}))
})
</script>

<div class="flex justify-between">
	{#each columns as col}
		<div class="block border">
			{col.name}
		</div>
	{/each}
</div>