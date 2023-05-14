<script lang="ts">
	import { currentNavigation } from '$lib/utility/store';
	import { navigation } from '../utility/general';
</script>

<div  class="container mx-auto flex space-y-2 flex-col ">
	<!-- hides when scroll -->
	<div class="bg-gradient-to-r from-cyan to-purple p-10 ">
		<img src="Group 13.png" alt="logo" class="w-1/2 mx-auto" />
	</div>
	<div  class="flex flex-row bg-purple justify-center space-x-12 p-4  ">
		{#each navigation as nav}
			<a
				on:click={() => currentNavigation.set(nav.href)}
				href={nav.href}
				class={`text-white hover:text-purple-800 text-xl font-bold
			${
				$currentNavigation === nav.href
					? 'underline decoration-cyan decoration-4 underline-offset-8'
					: ''
			}
			`}>{nav.name.toUpperCase()}</a
			>
		{/each}
	</div>
</div>

