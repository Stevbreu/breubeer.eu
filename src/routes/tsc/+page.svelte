<script>
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	let tabSet_1 = 0;
	let tabSet_2 = 0;
	let tabSet_3 = 0;
	let tabSet_4 = 0;
	let tabSet_5 = 0;
	let tabSet_6 = 0;

	let overlayVisible = writable(false);
	let selectedImage = writable('');

	function openOverlay(imageSrc) {
		console.log('openOverlay', imageSrc);
		selectedImage.set(imageSrc);
		overlayVisible.set(true);
	}

	function closeOverlay() {
		overlayVisible.set(false);
	}
</script>

<!-- Overlay Element -->
{#if $overlayVisible}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
		<div class="relative max-h-full max-w-full">
			<img class="object-contain max-h-screen w-auto" src={$selectedImage} alt="Bild im Overlay" />
			<button
				class="absolute top-2 right-2 text-white text-3xl p-1 rounded-full bg-black bg-opacity-50"
				style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;"
				on:click={closeOverlay}>&times;</button
			>
		</div>
	</div>
{/if}
<div class="container mx-auto flex flex-col justify-center items-center min-h-screen">
	<div class="space-y-10 text-center flex flex-col items-center">
		<figure>
			<h1 class="animated">Support</h1>
			<h2 class="h2 overlay text-nowrap">teamSop Connect</h2>
		</figure>
	</div>
</div>

<div
	class="pb-20 flex flex-col lg:flex-row justify-around items-center bg-surface-600--token shrink-0"
>
	<!-- App Store und Google Play Links angepasst -->
	<div class="flex-none">
		<a
			href="https://testflight.apple.com/join/qtIuJFF5"
			target="_blank"
			style="overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"
			><img
				src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1635206400"
				alt="Download on the App Store"
				style="border-radius: 13px; width: 250px; height: 83px;"
			/></a
		>
	</div>

	<div class="flex-none">
		<a
			class="flex justify-center items-center schrink-0"
			href="https://play.google.com/store/apps/details?id=de.breubeer.tsc"
			target="_blank"
			><img
				alt="Jetzt bei Google Play"
				src="https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png"
				style="border-radius: 13px; height: 105px;"
			/></a
		>
	</div>
</div>
<div>
	<h1 class="text-2xl md:text-4xl ml-4 md:ml-24 py-3">Account & Mitglieder</h1>
	<div class="flex flex-col md:flex-row mx-4 md:mx-20 bg-surface-200-700-token rounded-2xl">
		<!-- Anpassungen für mobile Ansicht -->

		<div class="flex-1 p-4 m-10">
			<p>
				Erstelle einen Account für deine Organisation und verwalte deine Mitarbeiter oder
				Teammitglieder und deren Berechtigungen. Jedes Teammitglieder benötigt diese APP, aber nur
				der Admin muss sich registrieren<br />
				<br />
				<b>1. Account erstelle</b><br />
				Erstelle einen Account für deine Organisation und verwalte deine Mitarbeiter oder Teammitglieder
				<br /> <br />
				<b>2. Mitglieder einladen</b><br />
				Lade deine Teammitglieder ein, indem du auf dem Button Team tippst und dann auf den + Button
				in der rechten oberen Ecke tippst. Du kannst auch die E-Mail Adresse eingeben und auf den Button
				"Einladen" tippen. Der Benutzer erhält eine E-Mail mit einem Link, um sich zu registrieren.
			</p>
		</div>

		<!-- Rechte Spalte für die Tabs -->
		<div class="flex-1 p-4 bg-surface-300-600-token m-10 rounded-2xl">
			<!-- Hier kommt deine Tab-Komponente -->
			<TabGroup>
				<Tab bind:group={tabSet_1} name="tab1" value={0}>Start</Tab>
				<Tab bind:group={tabSet_1} name="tab2" value={1}>Registration</Tab>
				<Tab bind:group={tabSet_1} name="tab3" value={2}>Login</Tab>
				<Tab bind:group={tabSet_1} name="tab4" value={3}>Einladen</Tab>

				<!-- Tab Panels -->
				<svelte:fragment slot="panel">
					{#if tabSet_1 === 0}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_start1.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_start1.png"
									alt="registration 1"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_start2.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_start2.png"
									alt="registration 2"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_start3.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_start3.png"
									alt="registration 3"
								/>
							</button>
						</div>
					{:else if tabSet_1 === 1}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_registration.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_registration.png"
									alt="registration 4"
								/>
							</button>
						</div>
					{:else if tabSet_1 === 2}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_login.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_login.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{:else if tabSet_1 === 3}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_userlist.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_userlist.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_invite.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_invite.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>
<div>
	<h1 class="text-2xl md:text-4xl ml-4 md:ml-24 py-3">News & Infos verwalten</h1>
	<div class="flex flex-col md:flex-row mx-4 md:mx-20 bg-surface-200-700-token rounded-2xl">
		<!-- Linke Spalte für die Erklärung -->

		<div class="flex-1 p-4 m-10">
			<p>
				Unter dem Menüpunkt "News" kannst du News erstellen und verwalten. Du kannst News erstellen,
				bearbeiten und löschen. Die News werden in der APP angezeigt und können von den Benutzern
				gelesen werden und geliked werden können.
				<br /> <br />
				<b>1. News erstelle</b><br />
				Wenn du auf den Button "News" tippst, kannst du eine neue News erstellen, indem du auf den +
				Button in der rechten oberen Ecke tippst. Beachte, dass du nur News erstellen kannst, wenn du
				<strong>Admin</strong>
				bist. Du kannst auch die News bearbeiten und löschen.
				<br /> <br />
				<b>2. Suchen</b><br />
				In der Suchzeile kannst du nach News suchen. Es wird der Inhalt, sowie der Titel durchsucht.
			</p>
		</div>

		<!-- Rechte Spalte für die Tabs -->
		<div class="flex-1 p-4 bg-surface-300-600-token m-10 rounded-2xl">
			<!-- Hier kommt deine Tab-Komponente -->
			<TabGroup>
				<Tab bind:group={tabSet_2} name="tab1" value={0}>Übersicht</Tab>
				<Tab bind:group={tabSet_2} name="tab2" value={1}>News erstellen</Tab>
				<Tab bind:group={tabSet_2} name="tab3" value={2}>Suchen</Tab>

				<!-- Tab Panels -->
				<svelte:fragment slot="panel">
					{#if tabSet_2 === 0}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_news.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_news.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{:else if tabSet_2 === 1}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_news2.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_news2.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_news3.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_news3.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_news4.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_news4.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{:else if tabSet_2 === 2}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_news_search.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_news_search.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>

<div>
	<h1 class="text-2xl md:text-4xl ml-4 md:ml-24 py-3">SOP verwalten</h1>
	<div class="flex flex-col md:flex-row mx-4 md:mx-20 bg-surface-200-700-token rounded-2xl">
		<!-- Linke Spalte für die Erklärung -->

		<div class="flex-1 p-4 m-10">
			<p>
				Unter dem Reiter SOP kannst du deine SOPs verwalten. Du kannst SOPs erstellen, bearbeiten
				und löschen. Die SOPs werden in der APP angezeigt und können von den Benutzern gelesen
				werden.
				<br /> <br />
				<b>1. SOP erstellen</b><br />
				Wenn du auf den Button "SOP" tippst, kannst du eine neue SOP erstellen, indem du auf den + Button
				in der rechten oberen Ecke tippst. Beachte, dass du nur SOPs erstellen kannst, wenn du
				<strong>Admin</strong> bist. Du kannst auch die SOP bearbeiten und löschen. Aktuell können
				nur <strong>PDF</strong>
				als Dateiformat hochgeladen werden!

				<br /> <br />
				<b>2. Suchen</b><br />
				In der Suchzeile kannst du nach SOPs suchen. Es wird der Inhalt, sowie der Titel durchsucht.
				Zudsätzlich kannst du rechts neben der Suchzeile dir dir
				<strong class="text-red-400">Notfall-SOP</strong> anzeigen lassen.
			</p>
		</div>

		<!-- Rechte Spalte für die Tabs -->
		<div class="flex-1 p-4 bg-surface-300-600-token m-10 rounded-2xl">
			<!-- Hier kommt deine Tab-Komponente -->
			<TabGroup>
				<Tab bind:group={tabSet_3} name="tab1" value={0}>Übersicht</Tab>
				<Tab bind:group={tabSet_3} name="tab2" value={1}>SOP erstellen</Tab>
				<Tab bind:group={tabSet_3} name="tab3" value={2}>Suchen</Tab>

				<!-- Tab Panels -->
				<svelte:fragment slot="panel">
					{#if tabSet_3 === 0}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_sop.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_sop.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{:else if tabSet_3 === 1}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_sop2.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_sop2.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_sop3.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_sop3.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_sop4.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_sop4.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{:else if tabSet_3 === 2}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_sop.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_sop.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>

<div>
	<h1 class="text-2xl md:text-4xl ml-4 md:ml-24 py-3">Dein Team</h1>
	<div class="flex flex-col md:flex-row mx-4 md:mx-20 bg-surface-200-700-token rounded-2xl">
		<!-- Linke Spalte für die Erklärung -->

		<div class="flex-1 p-4 m-10">
			<p>
				Unter dem Menüpunkt "Team" kannst du deine Teammitglieder verwalten. Du kannst
				Teammitglieder einladen, bearbeiten und löschen. Die Teammitglieder Können ihr eigenes
				Profil bearbeiten und Informationen über sich innerhalb der Organisation teilen.

				<br /> <br />
				<b>1. Teammitglied als Admin markieren</b><br />
				Du kannst in der linken oberen Ecke auf jeder Karte eines Teammitglieds auf den Button
				<img
					class="inline h-5 align-middle"
					src="images/tsc/Screenshot_admin-outline.png"
					alt="admin_panel"
				/>
				tippen und ihn so zum Admin machen. Admins haben ein ausgefülltes Icon
				<img
					class="inline h-5 align-middle"
					src="images/tsc/Screenshot_admin_full.png"
					alt="admin_panel"
				/>
				.

				<br /> <br />
				<b>2. Teammitglieder verwalten</b><br />
				tipp auf den + Button in der rechten oberen Ecke, um die verwaltung zu kommen. An dieser Stelle
				kannst Mitglieder einladen und löschen.

				<br /> <br />
				<b>3. Profil bearbeiten</b><br />
				tippe auf das Profilbild, um dir Teammitglieder anzusehen. tippe auf das Stiftsymbol, um dein
				Profil zu bearbeiten. Tippe auf dein Avatar, um dein Profilbild zu ändern. Mit speicher durch
				tippen auf das Diskettensymbol.
			</p>
		</div>

		<!-- Rechte Spalte für die Tabs -->
		<div class="flex-1 p-4 bg-surface-300-600-token m-10 rounded-2xl">
			<!-- Hier kommt deine Tab-Komponente -->
			<TabGroup>
				<Tab bind:group={tabSet_4} name="tab1" value={0}>Übersicht</Tab>
				<Tab bind:group={tabSet_4} name="tab2" value={1}>Team verwaltung</Tab>
				<Tab bind:group={tabSet_4} name="tab3" value={2}>Avatar gestallten</Tab>

				<!-- Tab Panels -->
				<svelte:fragment slot="panel">
					{#if tabSet_4 === 0}
						<div class="flex justify-around items-center overflow-auto">
							<img
								class="flex max-h-80 p-1"
								src="/images/tsc/Screenshot_userlist.png"
								alt="registartion"
							/>

							<img
								class="flex max-h-80 p-1"
								src="/images/tsc/Screenshot_userlist4.png"
								alt="registartion"
							/>
							<img
								class="flex max-h-80 p-1"
								src="/images/tsc/Screenshot_userlist2.png"
								alt="registartion"
							/>
						</div>
					{:else if tabSet_4 === 1}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_userlist4.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_userlist4.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_userlist5.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_userlist5.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{:else if tabSet_4 === 2}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_userlist.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_userlist.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_userlist3.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_userlist3.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_avatar.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_avatar.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>

<div>
	<h1 class="text-2xl md:text-4xl ml-4 md:ml-24 py-3">Der Spannungsspeicher</h1>
	<div class="flex flex-col md:flex-row mx-4 md:mx-20 bg-surface-200-700-token rounded-2xl">
		<!-- Linke Spalte für die Erklärung -->

		<div class="flex-1 p-4 m-10">
			<p>
				Den Spannungsspeicher findest du unter dem Menüpunkt "Spannungsspeicher". Hier kannst jeder
				aus deinem Team Spannungen hinterlegen. Diese Spannungen können von jedem Teammitglied
				eingesehen werden. Du kannst diese anonym oder mit Name veröffentlichen. Jeder kann seine
				eigene Spannung ändern oder auch löschen. Admins können Spannung ebenfalls löschen.

				<br /> <br />
				<b>1. Spannung hinzufügen</b><br />
				Wenn du auf den + Button tippst, kannst du eine neue Spannung hinzufügen. Wähle eine Kategorie
				aus und schreibe eine Überschrift für deine Spannung in das entsprechende Feld und ergänze mit
				einer Beschreibung.

				<br /> <br />
				<b>2. Spannung suchen</b><br />
				In der Suchzeile kannst du nach Spannungen suchen. Es wird der Inhalt, sowie der Titel durchsucht.
			</p>
		</div>

		<!-- Rechte Spalte für die Tabs -->
		<div class="flex-1 p-4 bg-surface-300-600-token m-10 rounded-2xl">
			<!-- Hier kommt deine Tab-Komponente -->
			<TabGroup>
				<Tab bind:group={tabSet_5} name="tab1" value={0}>Übersicht</Tab>
				<Tab bind:group={tabSet_5} name="tab2" value={1}>Spannung erstellen</Tab>
				<Tab bind:group={tabSet_5} name="tab3" value={2}>Suchen</Tab>

				<!-- Tab Panels -->
				<svelte:fragment slot="panel">
					{#if tabSet_5 === 0}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_spannungsspeicher.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_spannungsspeicher.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{:else if tabSet_5 === 1}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_spannungsspeicher.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_spannungsspeicher.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_spannungsspeicher2.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_spannungsspeicher2.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{:else if tabSet_5 === 2}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_spannungsspeicher.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_spannungsspeicher.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>

<div class="mb-20">
	<h1 class="text-2xl md:text-4xl ml-4 md:ml-24 py-3">Einstellungen & Account löschen</h1>
	<div class="flex flex-col md:flex-row mx-4 md:mx-20 bg-surface-200-700-token rounded-2xl">
		<!-- Linke Spalte für die Erklärung -->

		<div class="flex-1 p-4 m-10">
			<p>
				Unter dem Menüpunkt "Einstellungen" kannst du dein Profil bearbeiten, deine Organisationname
				verwalten (nur Admins) und dein Account löschen.

				<br /> <br />
				<b> Organisation löschen</b><br />
				Tippe auf den Button "Account löschen" und bestätige den Vorgang. Beachte, dass dieser Schritt
				nicht rückgängig gemacht werden kann. Wenn der
				<strong class="text-red-500">Ersteller</strong>
				der Organisation seinen Account löscht werden alle Daten gelöscht und können nicht wiederhergestellt
				werden. Alle anderen Mitglieder werden aus der Organisation entfernt. Nutzer können auch unter
				Verwendung unserer <a href="/support" class="underline">Supportseite</a> eine Anfrage stellen,
				um ihren Account zu löschen. Für solche Anfragen muss die Mailadresse explizit genannt werden!
			</p>
		</div>

		<!-- Rechte Spalte für die Tabs -->
		<div class="flex-1 p-4 bg-surface-300-600-token m-10 rounded-2xl">
			<!-- Hier kommt deine Tab-Komponente -->
			<TabGroup>
				<Tab bind:group={tabSet_6} name="tab1" value={0}>Profil bearbeiten</Tab>

				<!-- Tab Panels -->
				<svelte:fragment slot="panel">
					{#if tabSet_6 === 0}
						<div class="flex justify-around items-center overflow-auto">
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_account2.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_account2.png"
									alt="registration 5"
								/>
							</button>

							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_delete.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_delete.png"
									alt="registration 5"
								/>
							</button>
							<button
								class="focus:outline-none shrink-0"
								on:click={() => openOverlay('/images/tsc/Screenshot_settings.png')}
							>
								<img
									class="max-w-full max-h-80 p-1 cursor-pointer"
									src="/images/tsc/Screenshot_se
									ttings.png"
									alt="registration 5"
								/>
							</button>
						</div>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
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
		@apply text-xl sm:text-5xl; /* Textgröße anpassen */
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
