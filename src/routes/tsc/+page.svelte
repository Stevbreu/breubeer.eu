<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<figure>
			<h1 class="animated">Support</h1>
			<h2 class="h2 overlay">teamSop Connect</h2>
		</figure>
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
