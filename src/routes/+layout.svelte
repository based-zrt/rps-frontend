<script lang="ts">
	import Background from '$lib/Background.svelte'
	import '$lib/app.css'
</script>

<svelte:head>
	<title>Rock Paper Scissors</title>
</svelte:head>

<Background>
	<slot />
</Background>
