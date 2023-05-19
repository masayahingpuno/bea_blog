<!-- <script lang="ts">
	import { currentNavigation } from '$lib/utility/store';
	import { navigation } from '../utility/general';

	let open = true;
</script>

<div class="hidden md:block space-y-2 flex-col">
	<div>
		<img src="header_bg.png" alt="logo" class="absolute top-28 left-0" width="50" height="100" />
		<img src="header_bg.png" alt="logo" class="absolute top-28 right-0" width="50" height="100" />
	</div>
	<div class="bg-gradient-to-r from-cyan to-purple p-16">
		<img src="Group 13.png" alt="logo" class="w-1/2 mx-auto" />
	</div>
	<div class="flex flex-row bg-purple justify-center space-x-12 p-2">
		{#each navigation as nav}
			<a on:click={() => currentNavigation.set(nav.href)} href={nav.href}>
				<div
					class={`text-white hover:text-white/90 hover:bg-black/20 rounded-md p-2 transition-all text-xl font-bold
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
	</div>
</div>


<div
	class="md:hidden bg-purple/80 w-full px-5  pt-4 pb-2 flex flex-row justify-between border-b border-black/30 shadow-md"
>
	<div class="">
		<img src="logo_name.png" alt="logo" width="200" height="80" />
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
	<div class="md:hidden w-full bg-white/90 p-2 transition-all">
		<div class="flex flex-col justify-between items-start">
			{#each navigation as nav}
				<a on:click={() => currentNavigation.set(nav.href)} href={nav.href}>
					<div
						class={`text-black font-georgia hover:text-black/90 hover:bg-black/20 rounded-md p-2 transition-all text-sm font-bold
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
	</div>
{/if} -->

<script>
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Skeleton,
		Banner,
		ImagePlaceholder
	} from 'flowbite-svelte';
</script>

<!-- <Skeleton class="py-4" />
<ImagePlaceholder class="py-4" /> -->

<Banner id="default-banner" position="relative">
	<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
		<span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-purple-600">
			<svg
				class="w-4 h-4 text-gray-500 dark:text-gray-400"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
				/>
			</svg>
			<span class="sr-only">Light bulb</span>
		</span>
		<span
			>Welcome to <a
				href="/"
				class="inline font-medium text-purple-600 underline dark:text-purple-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
				>The Priestess Heart</a
			></span
		>
	</p>
</Banner>
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
	</NavUl>
</Navbar>
