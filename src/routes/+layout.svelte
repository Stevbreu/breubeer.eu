<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Footer from '../lib/Footer/footer.svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	function drawerOpen() {
		drawerStore.open({});
	}

	initializeStores();

	const drawerStore = getDrawerStore();
</script>

<!-- (Drawer for Burger Button) --->
<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-100-800-token w-0 lg:w-64">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div>
					<div class="flex items-center">
						<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
							<span>
								<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
									<rect width="100" height="20" />
									<rect y="30" width="100" height="20" />
									<rect y="60" width="100" height="20" />
								</svg>
							</span>
						</button>
					</div>
					<a href="/">
						<strong class="text-xl uppercase">Breubeer</strong>
					</a>
				</div></svelte:fragment
			>

			<svelte:fragment slot="trail">
				<div class="hidden sm:block">
					<a class="btn btn-sm variant-ghost-surface" href="/tsc" rel="noreferrer">
						TeamSOP Connect
					</a>
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://facebook.com/"
						target="_blank"
						rel="noreferrer"
					>
						Facebook
					</a>
					<a class="btn btn-sm variant-ghost-surface" href="/support" rel="noreferrer"> Support </a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Left Sidebar Slot -->
	<!-- <svelte:fragment slot="sidebarLeft">
		<div>
			<Navigation />
		</div> -->
	<!-- </svelte:fragment> -->
	<!-- Main Content Slot -->
	<slot />
	<!-- Footer Slot -->
	<svelte:fragment slot="pageFooter">
		<div class="bg-surface-100-800-token">
			<Footer />
		</div>
	</svelte:fragment>
</AppShell>
