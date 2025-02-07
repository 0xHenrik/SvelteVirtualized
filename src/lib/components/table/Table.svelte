<script lang="ts">
	import TableHeader from '$lib/components/table/TableHeader.svelte';
	import TableBody from '$lib/components/table/TableBody.svelte';
	import { setContext } from 'svelte';

	const {data} = $props();
	setContext("tableData",data)
	$inspect(data)
</script>
<div>
	<TableBody />
</div>
