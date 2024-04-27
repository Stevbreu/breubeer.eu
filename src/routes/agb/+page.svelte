<script>
	function convertToHTML(text) {
		// Ersetze Zeilenumbrüche durch <br> Tags
		text = text.replace(/\n/g, '<br>');

		// Ersetze Überschriften durch <h2> Tags
		text = text.replace(/(^\d+\..+?$)/gm, '<h2>$1</h2>');

		// Ersetze Unterüberschriften durch <h3> Tags
		text = text.replace(/(^a\)\s.+?$)/gm, '<h3>$1</h3>');

		// Ersetze Listenpunkte durch <li> innerhalb von <ul>
		text = text
			.replace(/(^b\)\s.+?$)/gm, '<li>$1</li>')
			.replace(/(<li>.+?<\/li>)/gs, '<ul>$1</ul>');

		// Füge Links ein
		text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');

		return text;
	}

	export let data;
	let formattedText =
		data && data.agb[0]['text_of_terms'] ? convertToHTML(data.agb[0]['text_of_terms']) : null;
	//console.log(formattedText);
</script>

<article class="prose lg:prose-sm p-4 max-w-none text-white">
	{#if formattedText}
		{@html formattedText}
	{:else}
		<p>Keine Datenschutzrichtlinien verfügbar.</p>
	{/if}
</article>
