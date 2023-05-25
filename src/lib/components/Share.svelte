<script lang="ts">
	import { Facebook, Twitter, Email, Reddit } from 'svelte-share-buttons-component';

	const title = 'Towards Miracles and Mysticism: The Story of ‘Day Fe and the Wonders of Faith';
	const url = 'https://thepriestessheart.com/blog/f0010287-13be-4842-89ee-7c116a4229e5';
	const desc = 'Read the story of Day Fe, a healer who has been practicing her craft for more than 20 years, as she shares her journey towards miracles and mysticism including the testimonies of her patients.';
</script>

<div class="flex flex-row space-x-4">
	<Facebook class="share-button" quote={title} {url} />
	<Twitter
		class="share-button"
		text={title}
		url={url}
		hashtags="#thepriestessheart,#clairvoyance,#healing"
		via="username"
		related="other,users"
	/>
	<Email subject="{title}" body="{desc} {url}" />
	<Reddit class="share-button" {title} {url} />


</div>
