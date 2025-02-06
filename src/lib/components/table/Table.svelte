<script>
	import VirtualList from "$lib/components/VirtualList.svelte";
	import { onMount } from 'svelte';
	import mockData from '../../mock_data.json';

	onMount(() =>{
		console.log(mockData);
	})


</script>

<VirtualList items={mockData} itemHeight={50} containerHeight={400} />
