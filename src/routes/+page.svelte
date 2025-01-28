<script lang="ts">
	import type {PageProps} from "./$types"
	import {virtualTableStateSvelte} from '$lib/state/virtualTableState.svelte';
	import Table from '$lib/table/Table.svelte';

	let {data}:PageProps = $props();
	virtualTableStateSvelte.buildCols(data.photos);
</script>
<div class="flex">
	<div>hey</div>
<Table tableData={data.photos}>
	{#snippet header()}
		<h1>snippet from the header</h1>
	{/snippet}
</Table>
</div>