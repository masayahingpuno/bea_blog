<script lang="ts">
	import Blog from "$lib/components/Blog.svelte";
import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";
	import Sidebar from "$lib/components/Sidebar.svelte";


</script>


<Header />
<div class="flex flex-row py-8 px-4">
    <Sidebar />
    <div class="">
        <Blog />
    </div>
</div>

<Footer />