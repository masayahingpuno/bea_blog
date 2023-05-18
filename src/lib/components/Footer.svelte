<script lang="ts">
	import { navigation } from '../utility/general';

	function lineBreak(index: number) {
		if (index === 5) {
			return '';
		} else {
			return ' | ';
		}
	}
</script>

<div
	class="hidden md:block py-28 flex-col justify-center items-center space-y-12 bg-gradient-to-r from-cyan to-purple"
>
	<div class="flex flex-row space-x-4 items-center">
		<div class="">
			<img src="Group 13.png" alt="logo" class=" w-1/2 mx-auto" />
		</div>
		<div class="flex space-x-4">
			{#each navigation as nav}
				<a href={nav.href}>
					<div class="text-white text-xl font-bold flex flex-row space-x-4">
						<div class="">{nav.name.toUpperCase()}</div>
						<div class="">{lineBreak(nav.id)}</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="flex items-center justify-center w-full flex-col ">
		<div class="text-white text-xl">
			COPYRIGHT 2023 - The Priestess Heart - thepriestessheart@gmail.com | All Rights Reserved
		</div>
		<div class="text-white text-lg">WEBSITE DESIGN MADE WITH LOVE BY CHEMKIMISTRY 💖</div>
	</div>
</div>

<div
	class="p-2 md:hidden flex-col justify-center items-center space-y-4 bg-gradient-to-r from-cyan to-purple"
>
	<div class="flex flex-col space-y-4 items-center justify-between">
		<div class="">
			<img src="Group 13.png" alt="logo" class="" />
		</div>
		<div class="flex flex-row justify-around w-full items-center space-x-2">
			{#each navigation as nav}
				<a href={nav.href}>
					<div class="text-white text-xs font-bold flex flex-row space-x-2">
						<div class="">{nav.name.toUpperCase()}</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<div class="flex items-center justify-center w-full flex-col space-y-4">
		<div class="text-white text-sm text-center">
			COPYRIGHT 2023 - The Priestess Heart - thepriestessheart@gmail.com | All Rights Reserved
		</div>
		<div class="text-white text-xs text-center">
			WEBSITE DESIGN MADE WITH LOVE BY CHEMKIMISTRY 💖
		</div>
	</div>
</div>
