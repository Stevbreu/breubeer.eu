<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
		<li><a href="/tsc" on:click={drawerClose}>teamSop Connect</a></li>
		<li><a href="/support" on:click={drawerClose}>Support</a></li>
		<hr />
		<br />
		<p class="text-xs">v1.0.0</p>
	</ul>
</nav>
