<script lang="ts">
	import Footer from '../../lib/components/Footer.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<svelte:head>
	<title>About | The Priestess Heart</title>

	<meta name="description" content="The Priestess Heart" />

	<link rel="icon" href="favicon_io/favicon-32x32.png" />
</svelte:head>

<Header />
<div class="py-8 px-2 container mx-auto flex flex-col justify-center items-center">
	<div class="">
		<img src="bea.png" alt="logo" height="517" width="517" class="rounded-full border-8 border-purple/40 shadow-md" />
	</div>
	<div class="space-y-16 pb-8 pt-16 items-center justify-center px-">
		<div class="text-black text-2xl font-georgia text-center tracking-wider leading-10">
			My individuality is as uncertain as heaven and as unfathomable as the pacific sea. To define
			myself fully, THAT I cannot do for whoever may request. Hold on – I don’t think that’s the
			best way to introduce myself to my first readers. I apologize. Let me begin again.
		</div>
		<div class="text-black text-2xl font-georgia text-center tracking-wider leading-10">
			Hello. I am Bea Javier, a 24-year-old full-time content editor and a graduate student from
			Cebu Normal University. I am deeply in love with philosophy, esoteric knowledge, history,
			theology, the science of the universe, and stories about women. When I am not hustling to pay
			my bills and perform my responsibilities, I read all kinds of books, write, make music, paint,
			and take photos using my mechanical 35mm film camera. I also like to contemplate life (Who
			doesn’t nowadays?).
		</div>
		<div class="flex items-center justify-center flex-col space-y-2">
			<img src="heart.png" alt="logo" height="180" width="180" />
			<div
				class="text-5xl underline font-georgia font-bold py-6 text-black decoration-underline-primary underline-offset-8 decoration-4"
			>
				Why am I making this blog?
			</div>
			<div class="text-black text-2xl font-georgia text-center tracking-wider leading-10">
				The original purpose of this blog was to publicize the findings of my research on the life
				of a clairvoyant healer in Cebu. But I’ve decided that I should publish more than one
				content and make this site functional. Here, you will find articles, short essays, and poems
				about the lives and works of women. I believe there is a chock-full of hidden tales out
				there waiting to be told and published for the world to know.
			</div>
		</div>
		<div class="flex items-center justify-center flex-col space-y-2 relative">
			<img src="heart.png" alt="logo" height="180" width="180" />
			<div
				class="text-5xl underline font-georgia font-bold text-center text-black py-6 decoration-underline-primary underline-offset-8 decoration-4"
			>
				What’s behind “The Priestess Heart" ?
			</div>
			<div class="text-black text-2xl font-georgia text-center tracking-wider leading-10">
				Are you familiar with tarot cards? I created the idea of the priestess’ heart from one of
				the deck’s major arcana, <a
					href="#"
					class="peer underline decoration-cyan decoration-4 underline-offset-4"
				>
					The High Priestess
				</a>
				<div
					class="hidden peer-hover:block top-36 right-44 absolute w-56 h-fit shadow-md rounded-md border-4 border-purple/40"
				>
					<img src="tarot.jpg" alt="tarot" />
				</div>
				It is a card of intuition, feminine power, spiritual insight, hidden talents, compassion, depth,
				mysteries, and knowledge. When you have the heart of a priestess, you recognize your power and
				are dedicated to deciphering the secrets of our world – while remaining temperate, kind, and
				compassionate. I hope to publish more content very soon. If you’re on this page, welcome and
				thank you for being here. I appreciate you being curious and giving me some of your time. Feel
				free to explore this little blog. Until then!
			</div>
		</div>
	</div>
</div>
<Footer />
