<script lang="ts">
	import Blog from '$lib/components/Blog.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Header from '../../lib/components/Header.svelte';
	import type { PageServerData } from './$types';
	import { faker } from '@faker-js/faker/locale/af_ZA';

	export let data: PageServerData;

	const posts = data.posts;
	let selectedBookmark = ['blog01'] as string[];

	let showFilter = false;
</script>

<Header />
<div class="flex flex-row mx-auto container mt-8">
	<Sidebar />
	<div>
		<div class="text-4xl font-primary text-lightblack text-center font-bold">List of articles</div>
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
					class="w-12 h-12"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
					/>
				</svg>
			</button>

			<div
				class={`"bg-purple  w-fit h-fit absolute right-16 top-0 border-gray/10 border shadow-md rounded-xl
			${showFilter ? 'visible' : 'invisible'} transition-all"`}
			>
			<div class="flex flex-col items-center justify-center ">

				<div class="hover:bg-purple hover:text-white transition-all text-xl p-4 font-georgia font-medium">Filter by date</div>
				<div class="hover:bg-purple hover:text-white transition-all text-xl p-4 font-georgia font-medium">Filter by title</div>
			</div>
			</div>
		</div>
		<div class="grid-cols-3 grid mx-auto h-fit container gap-4 my-8 pl-6">
			{#each posts as post}
				<div
					class="flex flex-col mx-auto container mt-8 border p-4 justify-start border-gray/10 shadow-lg rounded-md h-fit"
				>
					<div class="flex flex-row space-4 items-start justify-between">
						<div class="pr-4">
							<div class="text-2xl font-georgia font-bold">{post.title}</div>
							<div class="flex flex-row space-x-2 items-center justify-start pt-2">
								<div class="text-xs font-georgia text-lightblack font-semibold">
									{post.author} -
								</div>
								<div class="text-xs font-georgia text-lightblack font-semibold">
									<!-- {format(post.date, 'LLLL Q, yyyy')} -->
									{post.date}
								</div>
							</div>
						</div>
						<button
							class={`${
								selectedBookmark.includes(post.slug) ? 'text-purple' : 'text-lightblack'
							} hover:text-purple/80 transition-colors`}
							on:click={() => {
								const temp = [...selectedBookmark, post.slug];
								selectedBookmark = temp;
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill={selectedBookmark.includes(post.slug) ? 'currentColor' : 'none'}
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
					<div class="flex flex-row w-full items-center justify-center pt-4">
						<div class="flex-col">
							<div class="text-xl font-georgia text-lightblack">
								{faker.lorem.paragraph().slice(0, 100) + '...'}
							</div>
						</div>
						<div class="flex flex-col mx-8 w-full shadow-md rounded-full">
							<img src={faker.image.urlLoremFlickr()} alt="preview" width="128" height="128" />
						</div>
					</div>
					<button
						class="p-2 mt-8 font-georgia border border-gray/10 w-full text-center text-gray rounded-sm text-sm font-bold hover:bg-purple hover:text-white transition-colors"
					>
						<a href={'blog/' + post.slug} class="text-black">Read more...</a>
					</button>
				</div>
			{/each}
		</div>
	</div>
</div>
<Footer />
