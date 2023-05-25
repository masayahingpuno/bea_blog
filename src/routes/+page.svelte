<script lang="ts">
	import { createBlogData } from '$lib/utility/general';
	import { faker } from '@faker-js/faker/locale/af_ZA';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import { format } from 'date-fns';
	import Sidebar from '$lib/components/Sidebar.svelte';

	const data = createBlogData(0);

	let selectedBookmark = [0, 1, 2] as number[];

	import { Card, Button, Toggle, GradientButton } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>The Priestess Heart</title>

	<link rel="icon" href="favicon_io/favicon-32x32.png" />

	<meta name="description" content="The Priestess Heart" />

	<meta property="og:image" content="http://localhost:5173/og" />
</svelte:head>

<Header />
<!-- main story -->
<div class="dark:bg-gray-900 py-8 px-4 flex justify-around flex-row">
	
	<div class="">
		<div class="py-8 md:px-6 rounded-md flex flex-col items-start">
			<div class="font-georgia font-bold text-gray-900 dark:text-white text-4xl md:p-4 text-center">
				Towards Miracles and Mysticism: The Story of ‘Day Fe and the Wonders of Faith
			</div>
			<div class="px-4 flex-col lg:flex-row flex py-8 items-center">
				<img
					src="dayfe_healing.png"
					alt="feature story"
					height="150"
					width="500"
					class="border-4 dark:border-purple-900 border-purple-400 rounded-xl shadow-lg"
				/>
				<div class="flex flex-col items-center justify-center">
					<div class="pt-4 lg:pt-0 md:px-8 text-xl text-center font-georgia text-gray-800 dark:text-white">
						Read the story of `Day Fe, a healer who has been practicing her craft for more than 20
						years, as she shares her journey towards miracles and mysticism including the
						testimonies of her patients.
					</div>
					<div class="py-8">
						<GradientButton size="xl" shadow color="purple">
							<a href="blog/f0010287-13be-4842-89ee-7c116a4229e5" class="text-white font-bold 
							font-georgia"> Read more </a>
						</GradientButton>
					</div>
				</div>
			</div>
		</div>

		<div class="md:py-28" />

		<div class="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid md:mx-8 gap-8 my-8">
			{#each data as blog}
				<!-- <div
					class="hover:border-purple transition-all flex flex-col mx-auto container mt-8 border-2 p-4 justify-between border-gray/20 shadow-xl rounded-md"
				>
					<div class="flex flex-row space-4 items-start justify-around">
						<div class="pr-4">
							<div class="text-xl font-georgia font-semibold">{blog.title}</div>
							<div class="flex flex-row space-x-2 items-center justify-start pt-2">
								<div class="text-xs font-georgia text-lightblack font-semibold">
									{blog.author} -
								</div>
								<div class="text-xs font-georgia text-lightblack font-semibold">
									{format(blog.date, 'LLLL Q, yyyy')}
								</div>
							</div>
						</div>
						<button
							class={`${
								selectedBookmark.includes(blog.id) ? 'text-purple' : 'text-lightblack'
							} hover:text-purple/80 transition-colors`}
							on:click={() => {
								const temp = [...selectedBookmark, blog.id];
								selectedBookmark = temp;
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill={selectedBookmark.includes(blog.id) ? 'currentColor' : 'none'}
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
								/>
							</svg>
						</button>
					</div>
					<div class="flex flex-col w-full items-center justify-between pt-6">
						<div class="flex flex-col w-full shadow-md rounded-full">
							<img
								src={blog.image}
								alt="preview"
								class="shadow-md rounded-md border-2 border-purple/20"
							/>
						</div>
						<div class="pt-4">
							<div class="text-md font-georgia text-lightblack">{blog.preview}</div>
						</div>
					</div>
					<button
						class="p-2 mt-4 font-georgia border border-gray/10 w-full text-center text-gray rounded-sm text-sm font-bold hover:bg-purple hover:text-white transition-colors"
					>
						Read more...
					</button>
				</div> -->
				<div>
					<Card img={blog.image}>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{blog.title}
						</h5>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
							{blog.preview}
						</p>
						<!-- <Button>
						Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
					  </Button> -->
						<GradientButton shadow color="purple">
							Read more <svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5 ml-2"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/></svg
							>
						</GradientButton>
					</Card>
				</div>
			{/each}
		</div>
	</div>
	<div class="hidden md:block">
		<Sidebar />
	</div>
</div>
<Footer />
