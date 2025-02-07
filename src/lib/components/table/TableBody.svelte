<script>
import VirtualList from '$lib/components/VirtualList.svelte';
import { getContext } from 'svelte';
let columnWidths = [150, 200, 250,100,230,200,200,300,100,100]; // Widths for each column
const items = getContext("tableData")
</script>

<VirtualList items={items} itemHeight={25} {columnWidths} containerHeight={900} />
