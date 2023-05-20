<script lang="ts">
	import Toc from 'svelte-toc';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Share from '$lib/components/Share.svelte';

	export let data;

	const post = data.posts[0];
</script>

<svelte:head>
	<title>{post.title}</title>

	<meta name="description" content="The Priestess Heart" />

	<meta property="og:site_name" content="The Priestess Heart" />
	<meta property="og:locale" content="en" />
	<meta property="og:url" content={`https://thepriestessheart.vercel.app/blog/${post.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.description} />
	<meta property="og:image" content={`/${post.image}`} />
	<meta property="og:image:alt" content="The Priestess Heart" />
	<meta property="og:image:width" content="512" />
	<meta property="og:image:height" content="512" />

	<link rel="icon" href="/favicon_io/favicon-32x32.png" />
</svelte:head>

<Header />
<article class=" dark:bg-gray-900 flex flex-row justify-center py-10">
	<div class="prose dark:prose-invert">
		<Toc
			title="In this article"
			--toc-desktop-aside-margin="10em 0 0 0"
			--toc-desktop-sticky-top="3em"
			--toc-desktop-width="15em"
			--toc-title-padding="0 0 0.8em 0"
			--toc-overflow="auto"
			--toc-active-bg="#9333ea"
			--toc-li-hover-color="#9333ea"
		>
			<span class="" let:heading slot="toc-item">
				{heading.innerText}
			</span>
		</Toc>
	</div>

	<!-- <div class="hidden md:block">
		<Sidebar />
	</div> -->
	<div class="md:pl-10 px-4">
		<div class="font-noto-sans font-semibold text-purple-400 text-xs md:text-sm">
			BLOG NO. {data.posts.length}
		</div>
		<div class="py-2 lg:w-2/3">
			<div
				class="dark:text-gray-300 border-2 dark:border-purple-400 rounded-md p-2 shadow-md font-primary
				text-2xl md:text-3xl font-bold w-fit text-purple-800 dark:bg-purple-800 bg-purple-100 my-2"
			>
				{post.title}
			</div>
		</div>

		<div class="font-noto-sans font-semibold text-xs md:text-sm py-2 text-purple-400">
			{post.author}
		</div>
		<div class="w-full mt-4 mb-8" />
		<div
			class="prose lg:prose-xl prose-slate dark:prose-invert prose-p:indent-12 prose-img:border-4
			dark:prose-img:border-purple-900 prose-img:border-purple-400 prose-img:shadow-md prose-img:rounded-md
			prose-img:mb-0 prose-em:text-sm dark:prose-em:text-gray-400 prose-em:text-gray-700 prose-em:italic
			prose-h1:pt-4 prose-h2:pt-4 prose-headings:flex prose-headings:flex-col prose-headings:items-baseline
			prose-headings:justify-start prose-img:flex prose-img:flex-col prose-img:items-center
			prose-img:justify-stretch prose-img:w-full prose-em:flex prose-em:flex-col prose-em:items-center
			prose-em:pt-2 prose-p:font-georgia prose-headings:font-georgia"
		>
			<svelte:component this={data.component} />
		</div>
		<div class="mt-16 border-t-2 border-gray-500">
			<div class="dark:text-white text-xl py-4">Share this article:</div>
			<Share />
		</div>
	</div>
</article>

<Footer />
