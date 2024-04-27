<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Homepage</a></li>
		<li><a href="/about on:click={drawerClose}">About</a></li>
		<li><a href="/tsc on:click={drawerClose}">Blog</a></li>
		<li><a href="/support on:click={drawerClose}">Contact</a></li>
		<hr />
	</ul>
	<ul class="cover sm:hidden">
		<li><a href="/on:click={drawerClose}">Login</a></li>
		<li><a href="/ on:click={drawerClose}">Register</a></li>
	</ul>

	<p class="absolute bottom-0 left-1 px-5 text-xs hidden lg:block">v0.0.1</p>
</nav>
