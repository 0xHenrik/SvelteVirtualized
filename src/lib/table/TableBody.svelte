<script lang="ts">
	// --------- Import ---------
	import { getContext } from "svelte";
	import {getTableStateByKey} from '$lib/state/virtualTableState.svelte';

	// --------- State ---------
	let data = getContext("tableData"); // Get data from the context
	let container: HTMLDivElement; // The scrollable container reference
	let rowHeight = $state(50); // Fixed row height in pixels
	let containerHeight = $state(600); // Height of the scrollable body in pixels
	let scrollTop = $state(0); // Tracks the scroll position
	let visibleRows = $state([]); // Subset of rows to render
  let columns = getTableStateByKey("columns");
	// --------- Derived ---------
	let totalHeight = $derived(data.length * rowHeight); // Total height of the table
	let startIndex = $derived(Math.floor(scrollTop / rowHeight)); // Start index
	let visibleCount = $derived(Math.ceil(containerHeight / rowHeight) + 10); // Visible rows + buffer
	let endIndex = $derived(Math.min(data.length, startIndex + visibleCount)); // End index

	// Effect: Update visible rows when scroll position changes
	$effect(() => {
		visibleRows = data.slice(startIndex, endIndex);
	});

	$inspect(startIndex); // Debugging: Inspect startIndex value

	function handleScroll() {
		scrollTop = container.scrollTop; // Update the scroll position
	}
</script>


	<div
		bind:this={container}
		class="body"
		onscroll={handleScroll}
	>
		<div
			class="spacer"
			style="height: {totalHeight}px;"
		>
			<div
				class="rows"
				style="top: {startIndex * rowHeight}px;"
			>
				{#each visibleRows as row,index (row.id)}

					<div class="grid grid-cols-{columns.length}" style="height: {rowHeight}px;">
						{#each columns as col}
							<div class="w-{col.width}" class:frozen={col.frozen}>{row[col.name]}</div>
						{/each}
<!--						<div class="cell">{row.albumId}</div>-->
<!--						<div class="cell">{row.id}</div>-->
<!--						<div class="cell">{row.title}</div>-->
<!--						<div class="cell"><a href="{row.url}" target="_blank">Link</a></div>-->
<!--						<div class="cell">-->
<!--							<img src="{row.thumbnailUrl}" alt="Thumbnail" width="50" />-->
<!--						</div>-->
					</div>
				{/each}
			</div>
		</div>
	</div>


<style>



	.frozen{
			background-color: gray;
	}
    .body {
        height: 600px; /* Match containerHeight */
        overflow-y: auto;
        width: 100%;
        position: relative;
    }

    .spacer {
        height: var(--total-height);
        position: relative;
    }

    .rows {
        position: absolute;
        top: var(--start-offset);
        left: 0;
        right: 0;
    }

    .row {
        display: grid;
        grid-template-columns: 100px 100px 1fr 200px 150px; /* Must match header columns */
        align-items: center;
        border-bottom: 1px solid #eee;
        background-color: white;
    }

    .cell {
        padding: 8px 10px;
        border-right: 1px solid #eee;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .cell:last-child {
        border-right: none;
    }

    /* Optional: Hover effect for rows */
    .row:hover {
        background-color: #fafafa;
    }
</style>