<script>
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		const form = document.getElementById('supportForm');
		form.addEventListener('submit', function (event) {
			event.preventDefault();
			const userEmail = document.getElementById('userEmail').value;
			const userMessage = document.getElementById('userMessage').value;

			console.log('E-Mail:', userEmail, 'Nachricht:', userMessage);
			// Hier würde dein Code zur Datenübermittlung an dein Backend oder einen E-Mail-Service stehen.
		});
	});
</script>

<div class="container mx-auto flex flex-col justify-center items-center min-h-screen">
	<div class="text-center">
		<figure>
			<h1 class="animated">Support</h1>
			<h2 class="h2 overlay">Support</h2>
		</figure>
	</div>
	<div>
		<p class="text-center max-w-xl">
			Sie haben Fragen oder benötigen Hilfe? Schreiben Sie uns einfach eine Nachricht und wir melden
			uns bei Ihnen.
		</p>
	</div>
	<div class="w-full max-w-xl p-6">
		<form id="supportForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="userEmail">
					Ihre E-Mail-Adresse
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="userEmail"
					type="email"
					placeholder="Ihre E-Mail-Adresse"
					required
				/>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="userMessage">
					Ihre Nachricht
				</label>
				<textarea
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="userMessage"
					rows="4"
					placeholder="Schreiben Sie hier Ihre Nachricht..."
					required
				></textarea>
			</div>
			<div class="flex items-center justify-between">
				<!-- Formularfelder -->
				<p class="text-slate-500 text-xs p-3">
					Mit dem Absenden dieses Formulars erklären Sie sich mit unserer <a
						class="underline"
						href="/datenschutz"
						target="_blank">Datenschutzerklärung</a
					> einverstanden.
				</p>
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Senden
				</button>
			</div>
		</form>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col items-center justify-center;
	}
	.animated {
		@apply w-64 h-64 md:w-80 md:h-80 rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	.overlay {
		@apply absolute text-lg leading-normal z-10; /* z-10 stellt sicher, dass h2 über h1 liegt */
	}

	.h2 {
		@apply text-5xl;
	}

	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
