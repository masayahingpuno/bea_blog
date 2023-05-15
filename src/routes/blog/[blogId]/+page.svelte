<script lang="ts">
	import Blog from '$lib/components/Blog.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;


	//console.log(data.posts)
</script>

<Header />
<div class="flex flex-row mx-auto container mt-4">
	<Sidebar />
	<!-- <Blog /> -->
	<!-- {data.posts} -->
</div>
<Footer />
