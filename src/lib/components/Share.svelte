<script lang="ts">
	import { Facebook} from 'svelte-share-buttons-component';

	const title = "share"
	const url = "https://thepriestessheart.vercel.app/blog/blog01"
</script>




<Facebook class="share-button" quote="{title}" {url} />
