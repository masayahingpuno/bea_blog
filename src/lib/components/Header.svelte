<script lang="ts">
	import { currentNavigation } from '$lib/utility/store';
	import { DarkMode } from 'flowbite-svelte';
	import { navigation } from '../utility/general';

	let open = false;
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>

<div class="dark:bg-gray-900 hidden md:block  flex-col">
	<div>
		<img src="/header_bg.png" alt="logo" class="absolute top-28 left-0" width="50" height="100" />
		<img src="/header_bg.png" alt="logo" class="absolute top-28 right-0" width="50" height="100" />
	</div>
	<div class="bg-gradient-to-r from-cyan-200 to-purple-500  p-16">
		<img src="/Group 13.png" alt="logo" class="w-1/2 mx-auto" />
	</div>
	<div class="flex flex-row bg-purple justify-center space-x-12 p-2 bg-purple-400 dark:bg-purple-900 mt-4">
		{#each navigation as nav}
			<a on:click={() => currentNavigation.set(nav.href)} href={nav.href}>
				<div
					class={`dark:text-white text-gray-200 hover:text-white/90 hover:bg-black/20 rounded-md p-2 
					transition-all text-xl font-bold
					${
						$currentNavigation === nav.href
							? 'underline decoration-cyan decoration-4 underline-offset-8'
							: ''
					}
					`}
				>
					{nav.name.toUpperCase()}
				</div>
			</a>
		{/each}
		<DarkMode {btnClass} />

	</div>
</div>


<div
	class="md:hidden bg-purple-400 dark:bg-purple-900 w-full px-5  pt-4 pb-2 flex flex-row 
	justify-between border-b border-black/30 shadow-md"
>
	<div class="">
		<a href="/">
			<img src="/logo_name.png" alt="logo" width="200" height="80" />
		</a>
	</div>
	<button
		on:click={() => {
			open = !open;
		}}
		class=" "
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
			<path
				fill-rule="evenodd"
				d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
</div>
{#if open}
	<div class="dark:bg-gray-900 md:hidden w-full bg-white/90 p-2 transition-all">
		<div class="flex flex-col justify-between items-start">
			{#each navigation as nav}
				<a on:click={() => currentNavigation.set(nav.href)} href={nav.href}>
					<div
						class={`text-black dark:text-gray-100 font-georgia hover:text-black/90 
						hover:bg-black/20 rounded-md p-2 transition-all text-sm font-bold
						${
							$currentNavigation === nav.href
								? 'underline decoration-cyan decoration-2 underline-offset-8'
								: ''
						}
						`}
					>
						{nav.name.toUpperCase()}
					</div>
				</a>
			{/each}
		</div>
		<DarkMode {btnClass} />
	</div>
{/if}

<!-- <script>
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Skeleton,
		Banner,
		ImagePlaceholder,
		DarkMode
	} from 'flowbite-svelte';

	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>

<!-- <Skeleton class="py-4" />
<ImagePlaceholder class="py-4" /> -->


<!-- <div class="bg-gradient-to-r from-cyan-200 to-purple-600 dark:from-black dark:to-purple-600  p-6">
	<img src="/Group 13.png" alt="logo" class="w-1/2 mx-auto" />
</div>
<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/heart.png" class="mr-3 h-6 sm:h-9" alt="The Priestess Heart Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			The Priestess Heart
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/contact">Contact</NavLi>
		<NavLi href="/blog">Blog</NavLi>
		<NavLi href="/support">Support</NavLi>
		<NavLi>
			<DarkMode {btnClass} />
		</NavLi>
	</NavUl>
</Navbar> --> 
