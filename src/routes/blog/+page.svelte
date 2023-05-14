<script lang="ts">
	import Blog from '$lib/components/Blog.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<Header />
<div class="flex flex-row mx-auto container mt-8">
	<Sidebar />
	<Blog />
</div>
<Footer />
