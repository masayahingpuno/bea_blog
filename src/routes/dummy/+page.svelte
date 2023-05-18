<script lang="ts">
	import Blog from '$lib/components/Blog.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<svelte:head>
	<title
		>Towards Miracles and Mysticism: The Story of ‘Day Fe and the Wonders of Faith | The Priestess
		Heart</title
	>

	<meta name="description" content="The Priestess Heart" />

	<meta property="og:site_name" content="The Priestess Heart" />
	<meta property="og:locale" content="en" />
	<meta property="og:url" content="https://thepriestessheart.vercel.app/dummy" />
	<meta property="og:type" content="article" />
	<meta
		property="og:title"
		content="Towards Miracles and Mysticism: The Story of ‘Day Fe and the Wonders of Faith"
	/>
	<meta
		property="og:description"
		content="Read the story of Day Fe, a healer who has been practicing her craft for more than 20 years, as she shares her journey towards miracles and mysticism including the testimonies of her patients."
	/>
	<meta property="og:image" content="heart.png" />
	<meta property="og:image:alt" content="The Priestess Heart" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />

	<link rel="icon" href="favicon_io/favicon-32x32.png" />
</svelte:head>
<Header />
<div class="flex flex-row py-8 px-4">
	<Sidebar />
	<div class="">
		<Blog />
	</div>
</div>

<Footer />
