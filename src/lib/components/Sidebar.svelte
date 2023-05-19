<script lang="ts">
	import { GradientButton, Input } from 'flowbite-svelte';
</script>

<div
	id="containerSidebar"
	class="relative border-2 dark:border-purple-400/40 border-purple-500/80 rounded-lg shadow-md mb-8 pb-4 h-fit"
>
	<div class="hidden dark:block">
		<div id="topSidebar" class="hidden dark:block dark:blur-md items-center justify-center" />
		<div
			class="dark:text-gray-100 dark:absolute dark:top-10 dark:left-2 w-52 font-nunito text-md
	text-center pt-10 dark:pt-0 px-4"
		>
			When you have the heart of a priestess, you recognize your power and are dedicated to
			deciphering the secrets of our world - while remaining temperate, kind, and compassionate.
		</div>
	</div>

	<!-- light mode -->
	<div class="block dark:hidden">
		<div id="topSidebar" class="bg-[#3A3553] dark:block dark:blur-md items-center justify-center">
			<div
				class="text-[#DDDAFF] dark:absolute dark:top-10 dark:left-2 w-52 font-nunito text-md
			text-center pt-10 dark:pt-0 px-4"
			>
				When you have the heart of a priestess, you recognize your power and are dedicated to
				deciphering the secrets of our world - while remaining temperate, kind, and compassionate.
			</div>
		</div>
	</div>
	<div class="flex items-center justify-center flex-col py-4">
		<div class="dark:text-white text-center tracking-wider font-georgia leading-6 p-4 text-sm">
			The original purpose of this blog was to publicize the findings of my research on the life of
			a clairvoyant healer in Cebu. But I've decided that I should publish more than one content and
			make this site functional. Here, you wild find articles, short essays, and poems about the
			lives and works of women. I believe there is a chock-full of hidden tales out there waiting to
			be told and published for the world to know.
		</div>

		<div class="py-2 m-2">
			<GradientButton size="md" shadow color="purple">
				<a href="/support">Support this blog</a>
			</GradientButton>
		</div>
	</div>

	<div class="pt-8 flex items-center justify-center flex-col">
		<div class="dark:text-white font-georgia text-black text-4xl font-bold p-4">Connect</div>

		<div class="dark:text-white font-nunito text-black p-4 text-center">
			Keep updated with The Priestess Heart’s latest musings and posts. Follow The Priestess Heart:
		</div>
		<div class="flex flex-row justify-center items-center space-x-4 pt-4">
			<a
				href="https://www.facebook.com/thepriestessheart"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/fb.png" alt="facebook" width="64" height="64" />
			</a>
			<a
				href="https://www.instagram.com/thepriestessheart"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/insta.png" alt="instagram" width="64" height="64" />
			</a>
		</div>
	</div>
	<!-- newsletter -->
	<div class="pt-8 flex items-center justify-center flex-col">
		<!-- NEWSLETTER TITLE -->
		<div class="dark:text-white font-georgia text-black text-4xl font-bold p-4">Newsletter</div>
		<div class="dark:text-white font-nunito text-black p-4 text-center">
			Don't miss out on the latest articles and updates from this blog. Subscribe to The Priestess
			Heart newsletter.
		</div>
		<div class="space-y-2 pt-4 px-4">
			<Input label="Email" id="email" name="email" required placeholder="user@email.com" />

			<Input label="Name" id="name" name="name" required placeholder="John Doe" />
		</div>
		<div class="py-2 m-2">
			<GradientButton size="md" shadow color="purple">Subscribe</GradientButton>
		</div>
	</div>
</div>

<style>
	#containerSidebar {
		width: 220px;
	}
	#topSidebar {
		background-image: url('/sidebar_heart.png');
		background-repeat: no-repeat;
		background-position: center;
		height: 350px;
	}
</style>
