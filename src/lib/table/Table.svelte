<script lang="ts">
	// --------- Imports ---------

	import { setContext } from 'svelte';
	import type {Snippet} from "svelte"
	import {virtualTableStateSvelte} from '$lib/state/virtualTableState.svelte';
	import TableHead from '$lib/table/TableHead.svelte';
	import TableFooter from '$lib/table/TableFooter.svelte';
	import TableBody from '$lib/table/TableBody.svelte';

  // --------- Props ---------
	interface Props {
		header: Snippet;
		tableData: [];
	}
	const {tableData,header}: Props = $props()

	// --------- Contexts ---------
	setContext("tableData", tableData)
	setContext("columnWidth",virtualTableStateSvelte.columnWidth)

	// --------- Derived ---------
	// --------- Functions ---------


</script>
<div class="table-container">
	{@render header()}
 	<TableHead />
 	<TableBody />
	<TableFooter />
</div>
<style>
    .table-container {
        position: relative;
        width: 100%;
        border: 1px solid #ccc;
        overflow: hidden;
        font-family: Arial, sans-serif;
    }
</style>