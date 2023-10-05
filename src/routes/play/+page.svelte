<script lang="ts">
	import Centered from '$lib/Centered.svelte'
	import Choice from '$lib/Choice.svelte'

	import rock from '$lib/assets/icons/rock_centered.png'
	import paper from '$lib/assets/icons/paper_centered.png'
	import scissors from '$lib/assets/icons/scissors_centered.png'
	import { onMount } from 'svelte'
	import { Game } from '$lib/game'

	const disabled = 'saturate-0 pointer-events-none'
	const enabled = 'hue-rotate-90 saturate-200 scale-110 pointer-events-none'

	let styles = [disabled, disabled, disabled]

	const game = new Game(styles, (l) => (styles = l), enabled, disabled)

	function test() {
		game.roll(2000)
	}
</script>

<Centered>
	<div>
		<h1 class="text-2xl uppercase tracking-widest">robot</h1>
		<div class="container flex flex-row justify-center text-center pb-10">
			<Choice src={rock} extraStyles={styles[0]} />
			<Choice src={paper} extraStyles={styles[1]} />
			<Choice src={scissors} extraStyles={styles[2]} />
		</div>
		<div class="container flex flex-row justify-center text-center mt-10">
			<Choice src={rock} on:click={test} />
			<Choice src={paper} on:click={test} />
			<Choice src={scissors} on:click={test} />
		</div>
		<h1 class="text-2xl uppercase tracking-widest">player</h1>
	</div>
</Centered>
