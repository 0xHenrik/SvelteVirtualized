<script lang="ts">
	import TableRow from "$lib/components/table/TableRow.svelte"
	import * as Resizable from "$lib/components/"
	let { items = [], itemHeight = 50, containerHeight = 400 } = $props();

	let scrollTop = $state(0);
	let container;

	let visibleCount = Math.ceil(containerHeight / itemHeight) + 2;
	let startIndex = $derived(Math.max(0, Math.floor(scrollTop / itemHeight) - 1));
	let endIndex = $derived(Math.min(items.length, startIndex + visibleCount));

	let visibleItems = $derived(items.slice(startIndex, endIndex));
	let offsetY = $derived(startIndex * itemHeight);

	$effect(() => {
		if (container) {
			container.addEventListener("scroll", () => {
				scrollTop = container.scrollTop;
			});
		}
	});
</script>

<div bind:this={container} style="overflow-y: auto; height: {containerHeight}px; border: 1px solid #ddd;">
	<div style="height: {items.length * itemHeight}px; position: relative;">
		<div style="position: absolute; top: {offsetY}px; left: 0; width: 100%;">
			{#each visibleItems as item, index}
				<div
					style="
            height: {itemHeight}px;
            display: flex;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            background: white;
          "
				>

					<TableRow {item} />
				</div>
			{/each}
		</div>
	</div>
</div>
