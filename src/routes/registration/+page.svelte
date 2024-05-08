<script>
	import { onMount } from 'svelte';

	let appOpened = false;

	// Funktion, die versucht, die App zu öffnen
	function openApp() {
		window.location = 'io.supabase.tsc://login-callback/';

		// Setze einen Timer, um zu überprüfen, ob die App geöffnet wurde
		setTimeout(() => {
			if (!appOpened) {
				// Wenn die App nicht geöffnet wird, zeige Fallback-Optionen
				appOpened = true;
			}
		}, 2500); // Warte 2,5 Sekunden
	}

	// Funktion, um zu signalisieren, dass die App geöffnet wurde (optional)
	function confirmAppOpen() {
		appOpened = true;
	}
</script>

<div class="min-h-screen relative">
	<div class="container px-4 sm:px-6 lg:px-8 py-12 mx-auto flex flex-col items-center">
		<h1 class="font-bold text-slate-100 text-4xl md:text-4xl text-center">Registrierung</h1>
		<p class="text-slate-100 text-center mt-4 mb-8">
			Deine Registrierung war erfolgreich und du kannst dich nun in der App mit deiner eMail und
			Passwort anmelden.<br />Nutze den Button:
		</p>
		<div class="mt-4">
			<button
				class=" px-4 py-2 bg-blue-500 text-white text-lg font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 justify-center"
				on:click={openApp}>Öffne die App</button
			>
		</div>
	</div>
</div>

{#if appOpened}
	<div id="fallback">
		<p>App nicht gefunden? Lade sie hier herunter:</p>
		<a
			href="https://play.google.com/store/apps/details?id=com.beispiel.app"
			target="_blank"
			rel="noopener">Android App</a
		>
		|
		<a href="https://apps.apple.com/app/id123456789" target="_blank" rel="noopener">iOS App</a>
	</div>
{:else}
	<!-- Optional: Anzeigen von Ladeanimation oder -hinweis, während auf die App-Öffnung gewartet wird -->
	<p>Versuche, die App zu öffnen...</p>
{/if}
