<script lang="ts">
	import Footer from '../../lib/components/Footer.svelte';
	import Header from '../../lib/components/Header.svelte';
	import { Label, Input, Helper, Textarea, Button, GradientButton } from 'flowbite-svelte';

	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Leave a comment...'
	};
</script>

<svelte:head>
	<title>Contact | The Priestess Heart</title>

	<meta name="description" content="The Priestess Heart" />

	<link rel="icon" href="favicon_io/favicon-32x32.png" />
</svelte:head>

<Header />
<div class=" dark:bg-gray-900 flex items-center justify-center md:flex-row flex-col py-16">
	<div class="flex items-center justify-start space-x-4 flex-col pb-8 md:pb-28 px-8 w-1/2">
		<img src="heart.png" alt="logo" height="124" width="144" />
		<div
			class="text-xl md:text-2xl font-georgia dark:text-white pt-8 tracking-wider leading-10 text-center"
		>
			Whether you wish to share a story, say hello, ask me a question, or pinpoint a (human) mistake
			I made in one of my articles, you can reach out to me through
			<a href="thepriestessheart@gmail.com" class="text-purple underline font-medium font-georgia">
				thepriestessheart@gmail.com
			</a>
		</div>
	</div>

	<div class="py-4 md:w-2/3 md:p-16">
		<div class="font-georgia text-3xl text-black font-bold dark:text-white">Send me a message!</div>
		<div class="flex space-y-2 flex-col pt-8">
			<!-- <input
				class="h-12 border-2 rounded-lg p-2 border-purple outline-purple"
				placeholder="Your name here"
			/>
			<input
				class="h-12 border-2 rounded-lg p-2 border-purple outline-purple"
				placeholder="Your email here"
			/>
			<textarea
				class="h-96 border-2 rounded-lg p-2 border-purple outline-purple"
				placeholder="Your message here"
			/>
			<button class="h-12 bg-purple text-white rounded-lg">Send</button> -->
			<Label class="block mb-2">Your name</Label>
			<Input label="Name" id="name" name="name" required placeholder="John Doe" />

			<Label class="block mb-2">Your email</Label>
			<Input label="Email" id="email" name="email" required placeholder="user@email.com" />

			<Label class="block mb-2">Your message</Label>
			<Textarea {...textareaprops} />
			<!-- <Helper class="text-sm mt-2"
				>We’ll never share your details. Read our <a
					href="/"
					class="font-medium text-purple-600 hover:underline dark:text-purple-500">Privacy Policy</a
				>.</Helper
			> -->

			<div class="py-4" />

			<GradientButton shadow color="purple">Send</GradientButton>
		</div>
	</div>
</div>
<Footer />
