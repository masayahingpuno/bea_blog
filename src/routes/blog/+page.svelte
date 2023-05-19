<script lang="ts">
	import Blog from '$lib/components/Blog.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { format } from 'date-fns';
	import Footer from '../../lib/components/Footer.svelte';
	import Header from '../../lib/components/Header.svelte';
	import type { PageServerData } from './$types';
	import { faker } from '@faker-js/faker/locale/af_ZA';
	import { Button, Card, GradientButton, Toggle } from 'flowbite-svelte';

	export let data: PageServerData;

	const posts = data.posts;
	let selectedBookmark = ['blog01'] as string[];

	let showFilter = false;
</script>

<svelte:head>
	<title>Blog | The Priestess Heart</title>

	<meta name="description" content="The Priestess Heart" />
</svelte:head>

<Header />
<div class=" dark:bg-gray-900 flex flex-row pt-8 px-4">
	<div class="hidden md:block">
		<Sidebar />
	</div>
	<div>
		<div class="dark:text-white text-4xl font-primary text-lightblack text-center font-bold">
			List of articles
		</div>
		<div class="flex flex-row items-end justify-end relative">
			<button
				on:click={() => {
					showFilter = !showFilter;
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="md:w-12 md:h-12 w-6 h-6 text-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
					/>
				</svg>
			</button>

			<div
				class={`bg-white  w-fit h-fit absolute right-16 top-0 border-gray/10 border shadow-md rounded-xl
			${showFilter ? 'visible' : 'invisible'} transition-all"`}
			>
				<div class="flex flex-col items-center justify-center">
					<div
						class="hover:bg-purple hover:text-white transition-all text-xl p-4 font-georgia font-medium"
					>
						Filter by date
					</div>
					<div
						class="hover:bg-purple hover:text-white transition-all text-xl p-4 font-georgia font-medium"
					>
						Filter by title
					</div>
				</div>
			</div>
		</div>
		<div
			class="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid mx-auto h-fit container gap-4 my-8 md:pl-6"
		>
			{#each posts as blog}
				<!-- <div
					class="flex flex-col mx-auto container mt-8 border p-4 justify-between border-gray/10 shadow-lg rounded-md"
				>
					<div class="flex flex-row space-4 items-start justify-around">
						<div class="pr-4">
							<div class="text-xl font-georgia font-bold">{blog.title}</div>
							<div class="flex flex-row space-x-2 items-center justify-start pt-2">
								<div class="text-xs font-georgia text-lightblack font-semibold">
									{blog.author} -
								</div>
								<div class="text-xs font-georgia text-lightblack font-semibold">
									{blog.date}
								</div>
							</div>
						</div>
						<button
							class={`${
								selectedBookmark.includes(blog.slug) ? 'text-purple' : 'text-lightblack'
							} hover:text-purple/80 transition-colors`}
							on:click={() => {
								const temp = [...selectedBookmark, blog.slug];
								selectedBookmark = temp;
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill={selectedBookmark.includes(blog.slug) ? 'currentColor' : 'none'}
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
								class="shadow-md rounded-md border-2 border-purple/50"
							/>
						</div>
						<div class="pt-4">
							<div class="text-md font-georgia text-lightblack">{blog.description}</div>
						</div>
					</div>
					<button
						class="p-2 mt-4 font-georgia border border-gray/10 w-full text-center text-gray rounded-sm text-sm font-bold hover:bg-purple hover:text-white transition-colors"
					>
						<a href={`dummy`}>Read more</a>
					</button>
				</div> -->

				<div>
					<Card img={blog.image}>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{blog.title}
						</h5>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
							{blog.description}
						</p>
						<!-- <Button>
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
</div>
<Footer />
