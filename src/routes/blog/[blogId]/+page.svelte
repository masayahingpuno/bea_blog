<script lang="ts">
	import Blog from '$lib/components/Blog.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Toc from 'svelte-toc';

	export let data;
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
	<meta property="og:image" content="/dayfe.png" />
	<meta property="og:image:alt" content="The Priestess Heart" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />

	<link rel="icon" href="/favicon_io/favicon-32x32.png" />
</svelte:head>

<Header />
<article class="dark dark:bg-gray-900 flex flex-row justify-center py-10">
	<div class="prose dark:prose-invert">
		<Toc />
	</div>

	<!-- <div class="hidden md:block">
		<Sidebar />
	</div> -->
	<div class="md:pr-28 md:pl-10 px-4">
		<div class="font-noto-sans font-semibold text-purple-400 text-xs md:text-sm">BLOG NO. 1</div>
		<div class="py-2">
			<div
				class="dark:text-gray-300 border-2 border-purple-400 rounded-md p-2 shadow-md font-primary text-2xl md:text-3xl font-bold w-fit text-purple-400 bg-purple-800 my-2"
			>
				Towards Miracles and Mysticism: <br />The Story of ‘Day Fe and the Wonders of Faith
			</div>
		</div>
		<div class="border w-full border-black/20" />

		<div class="font-noto-sans font-semibold text-xs md:text-sm py-2 text-purple-400">
			Bea Javier
		</div>
		<div
			class="prose lg:prose-xl prose-slate dark:prose-invert prose-p:indent-16 prose-img:border-4 prose-img:border-purple-800 prose-img:shadow-md prose-img:rounded-md prose-img:mb-0 prose-em:text-sm prose-em:text-gray-400 prose-em:italic prose-em:text-center prose-h1:pt-8 prose-h2:pt-4"
		>
			<svelte:component this={data.component} />
		</div>
	</div>
</article>

<Footer />
