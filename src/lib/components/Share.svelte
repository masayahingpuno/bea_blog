<script lang="ts">
	import { Facebook} from 'svelte-share-buttons-component';

	const title = "share"
	const url = "https://thepriestessheart.vercel.app/dummy"
</script>




<Facebook class="share-button" quote="{title}" {url} />
