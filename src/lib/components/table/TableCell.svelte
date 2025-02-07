<script lang="ts">
	const {cell,index} = $props()
	let columnWidths = [150, 200, 250,100,230,200,200,300,100,100]; // Widths for each column

</script>
<div class="border max-h-[25px] truncate " style={`width: ${columnWidths[index]}px;`}>
	{cell}
</div>