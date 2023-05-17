<script lang="ts">
	import { createBlogData } from '$lib/utility/general';
	import { faker } from '@faker-js/faker/locale/af_ZA';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import { format } from 'date-fns';
	import Sidebar from '$lib/components/Sidebar.svelte';

	const data = createBlogData(10);

	let selectedBookmark = [0, 1, 2] as number[];

	$: console.log(selectedBookmark);
</script>

<svelte:head>
	<title>The Priestess Heart</title>

	<link rel="icon" href="favicon_io/favicon-32x32.png" />

	<meta name="description" content="The Priestess Heart" />
</svelte:head>

<Header />
<!-- main story -->
<div class="mx-auto container flex space-x-4 justify-between my-8 flex-row">
	<div class="">
		<div class=" py-8 border my-4 px-6 border-gray/10 shadow-lg rounded-xl flex items-center">
			<img src={faker.image.urlLoremFlickr()} alt="feature story" height="128" class="w-1/2" />
			<div class="px-4 text-center">
				<div class="font-primary font-bold text-lightblack text-6xl">
					A cat in the hut save a bat in the nut
				</div>
				<div class="px-8 pt-4 text-xl">
					{faker.lorem.paragraphs(5)}
				</div>
			</div>
		</div>

		<div class="grid-cols-3 grid mx-auto container gap-4 my-8">
			{#each data as blog}
				<div
					class="hover:border-purple transition-all flex flex-col mx-auto container mt-8 border-2 p-4 justify-between border-gray/20 shadow-xl rounded-md"
				>
					<div class="flex flex-row space-4 items-start justify-around">
						<div class="pr-4">
							<div class="text-xl font-georgia font-bold">{blog.title}</div>
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
				</div>
			{/each}
		</div>
	</div>
	<Sidebar />
</div>
<Footer />
