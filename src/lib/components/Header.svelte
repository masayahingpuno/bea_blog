<script lang="ts">
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

<!-- create a mobile version -->

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
{/if}
