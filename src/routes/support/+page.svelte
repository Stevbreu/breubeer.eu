<script>
	import { onMount } from 'svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

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

	let showContactForm = false;
	let showToast = false; // Zustandsvariable für den Toast
	let toastMessage = ''; // Nachricht, die im Toast angezeigt wird

	let email = '';
	let subject = 'Supportanfrage breubeer.eu';
	let message = '';
	let isEmailSendSuccess = true; // Standardmäßig auf `true` gesetzt

	// function displayToast(message, isSuccess) {
	// 	toastMessage = message;
	// 	isEmailSendSuccess = isSuccess;
	// 	showToast = true;
	// 	setTimeout(() => (showToast = false), 5000);
	// }

	const ToastError = {
		message: 'Es ist ein Fehler aufgetreten',
		background: 'bg-red-500'
	};

	const ToastSuccess = {
		message: 'E-Mail erfolgreich gesendet',
		background: 'bg-green-500'
	};

	async function sendEmail(event) {
		event.preventDefault(); // Verhindert das normale Submit-Verhalten
		try {
			const response = await fetch('https://breubeer.eu/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, subject, message })
			});

			if (response.ok) {
				toastStore.trigger(ToastSuccess);
			} else {
				toastStore.trigger(ToastError);
			}
		} catch {
			toastStore.trigger(ToastError);
		}
	}
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
		<form id="supportForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" on:submit={sendEmail}>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="userEmail">
					Ihre E-Mail-Adresse
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="userEmail"
					bind:value={email}
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
					bind:value={message}
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

<!-- Hier ist der Toast -->
{#if showToast}
	<div
		class="fixed bottom-5 left-1/2 transform -translate-x-1/2 {isEmailSendSuccess
			? 'bg-green-500'
			: 'bg-red-500'} text-white p-5 rounded-3xl"
	>
		{toastMessage}
	</div>
{/if}

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
