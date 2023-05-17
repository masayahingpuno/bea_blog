<script lang="ts">
	import Footer from '../../lib/components/Footer.svelte';
	import Header from '../../lib/components/Header.svelte';
	import 'iconify-icon';
</script>

<svelte:head>
	<title>
		Support | The Priestess Heart
	</title>

	<meta name="description" content="The Priestess Heart" />

	<link rel="icon" href="favicon_io/favicon-32x32.png" />


</svelte:head>

<Header />
<div class="mx-auto container px-56 py-28">
	<div class="text-3xl text-center text-black font-georgia">
		Do you want to support my blog and help me find more stories so I can keep publishing more
		content? Perhaps you just wish to show your appreciation or buy me a coffee? Whatever the reason
		is, any amount of donation will be deeply appreciated. You can send me a message along with it
		too if you like!
	</div>
	<div class=" flex flex-row justify-center items-center py-8 space-x-8">
		<a
			href="https://www.paypal.com/paypalme/beajav"
			target="_blank"
			rel="noopener noreferrer"
			class="text-3xl text-center text-black">
			<iconify-icon class="" icon="logos:paypal" width="128" height="128" />
		</a>
        <img src="gcash.jpg" alt="gcash" width="256" height="256" />
	</div>
</div>
<Footer />
