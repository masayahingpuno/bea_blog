<script lang="ts">
	import { currentNavigation } from '$lib/utility/store';
	import { navigation } from '../utility/general';
</script>

<div class="container mx-auto flex space-y-2 flex-col">
	<div>
		<img src="header_bg.png" alt="logo" class="absolute top-28 left-0" width="50" height="100" />
		<img src="header_bg.png" alt="logo" class="absolute top-28 right-0" width="50" height="100" />
	</div>
	<div class="bg-gradient-to-r from-cyan to-purple p-10">
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
