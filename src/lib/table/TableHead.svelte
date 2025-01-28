<script lang="ts">
	// --------- Imports ---------
	import {getContext} from 'svelte';
	// --------- State ---------
	let data = getContext("tableData")
	let width = getContext("columnWidth")
	// --------- Derived ---------
	const columns = $derived(Object.keys(data[0]));
	// --------- Inspect ---------
	$inspect(width);
</script>
<div class="grid grid-cols-5">
	<div class="header-cell">albumId</div>
	<div class="header-cell">id</div>
	<div class="header-cell">title</div>
	<div class="header-cell">url</div>
	<div class="header-cell">thumbnailUrl</div>
</div>

<style>


    .header-cell {
        padding: 10px;
        font-weight: bold;
        text-align: left;
    }

    .header-cell:last-child {
        border-right: none;
    }
</style>