<script lang="ts">
	import TableRow from "$lib/components/table/TableRow.svelte";
	import * as Resizable from "$lib/components/ui/resizable";

	let { items = [], itemHeight = 25, containerHeight = 400, columnWidths = [] } = $props();

	let scrollTop = $state(0);
	let scrollLeft = $state(0); // Track horizontal scroll
	let container;
	let contentWrapper; // Reference for syncing horizontal scroll

	let visibleCount = Math.ceil(containerHeight / itemHeight) + 2;
	let startIndex = $derived(Math.max(0, Math.floor(scrollTop / itemHeight) - 1));
	let endIndex = $derived(Math.min(items.length, startIndex + visibleCount));

	let visibleItems = $derived(items.slice(startIndex, endIndex));
	let offsetY = $derived(startIndex * itemHeight);

	// Compute total width dynamically if columnWidths are provided
	let totalWidth = $derived(columnWidths.length ? columnWidths.reduce((a, b) => a + b, 0) : "50%");

	$effect(() => {
		if (container) {
			container.addEventListener("scroll", () => {
				scrollTop = container.scrollTop;
				scrollLeft = container.scrollLeft; // Update horizontal scroll position
			});
		}
		if (contentWrapper) {
			contentWrapper.scrollLeft = scrollLeft; // Sync header scrolling with content
		}
	});
</script>

<style>
    .table-container {
        overflow: auto;
        height: var(--container-height);
        border: 1px solid #ddd;
        position: relative;

    }

    .table-content {
        position: relative;
        width: var(--total-width); /* Ensure it expands horizontally */
        height: var(--total-height); /* Full height */
    }

    .virtual-rows {
        position: absolute;
        top: var(--offset-y);
        left: 0;
        width: 100%;
    }

    .table-header {
        position: sticky;
        top: 0;
        background: white;
        z-index: 2;
        width: var(--total-width);
        display: flex;
    }
</style>

<div bind:this={container} class="table-container" style="--container-height: {containerHeight}px;">
	<div class="table-header" bind:this={contentWrapper}>
		{#each columnWidths as width, index}
			<div class="border" style="min-width: {width}px; border-bottom: 1px solid #ddd; padding: 5px;">
				Header {index}
			</div>
		{/each}
	</div>

	<div class="table-content" style="--total-width: {totalWidth}px; --total-height: {items.length * itemHeight}px;">
		<div class="virtual-rows" style="--offset-y: {offsetY}px;">
			{#each visibleItems as item, index}
				<div
					style="
						height: {itemHeight}px;
						display: flex;
						align-items: center;
						border-bottom: 1px solid #ddd;
						background: white;
						width: {totalWidth}px;
					"
				>
					<TableRow {item} />
				</div>
			{/each}
		</div>
	</div>
</div>
