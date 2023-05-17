<script lang="ts">
	import Footer from '../../lib/components/Footer.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<svelte:head>
	<title>
		Contact | The Priestess Heart
	</title>

	<meta name="description" content="The Priestess Heart" />

	<link rel="icon" href="favicon_io/favicon-32x32.png" />


</svelte:head>

<Header />
<div class="flex items-center justify-center flex-row mx-auto container py-16">
	<div class="flex items-center justify-start space-x-4 flex-col pb-28 px-8 w-1/2">
		<img src="heart.png" alt="logo" height="124" width="144" />
		<div class="text-2xl font-georgia pt-8 tracking-wider leading-10 text-center">
			Whether you wish to share a story, say hello, ask me a question, or pinpoint a (human) mistake
			I made in one of my articles, you can reach out to me through
			<a href="thepriestessheart@gmail.com" class="text-purple underline font-medium font-georgia ">
				thepriestessheart@gmail.com
			</a>
		</div>
	</div>
	<div class="py-4 w-2/3 p-16">
		<div class="font-georgia  text-3xl text-black font-bold">Send me a message!</div>
		<div class="flex space-y-2 flex-col pt-8">
			<input
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
			<button class="h-12 bg-purple text-white rounded-lg">Send</button>
		</div>
	</div>
</div>
<Footer />
