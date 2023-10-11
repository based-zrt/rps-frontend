<script lang="ts">
	import Background from '$lib/Background.svelte'
	import '$lib/app.css'
	import { registerScoreboard } from '$lib/scoreboard'
	import { onMount } from 'svelte'

	onMount(() => registerScoreboard())
</script>

<svelte:head>
	<title>Rock Paper Scissors</title>
</svelte:head>

<Background>
	<slot />
</Background>
