<script lang="ts">
	import { Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter, Line } from 'svelte-share-buttons-component';

	const title = "share"
	const url = "https://thepriestessheart.com/dummy"
</script>

<Facebook class="share-button" quote="{title}" {url} />
