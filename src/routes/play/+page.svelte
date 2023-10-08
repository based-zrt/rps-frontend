<script lang="ts">
	import Centered from '$lib/Centered.svelte'
	import Choice from '$lib/Choice.svelte'

	import rock from '$lib/assets/icons/rock_centered.png'
	import paper from '$lib/assets/icons/paper_centered.png'
	import scissors from '$lib/assets/icons/scissors_centered.png'

	import { Game, Take, type ChoiceProps } from '$lib/game'

	let robotProps: ChoiceProps[] = [
		{ src: rock, robot: true, enabled: false, selected: false },
		{ src: paper, robot: true, enabled: false, selected: false },
		{ src: scissors, robot: true, enabled: false, selected: false }
	]
	let playerProps: ChoiceProps[] = [
		{ src: rock, robot: false, enabled: true, selected: false },
		{ src: paper, robot: false, enabled: true, selected: false },
		{ src: scissors, robot: false, enabled: true, selected: false }
	]

	const game = new Game(
		robotProps,
		(l) => (robotProps = l),
		playerProps,
		(l) => (playerProps = l)
	)
</script>

<Centered>
	<div>
		<h1 class="text-2xl uppercase tracking-widest">robot</h1>
		<div class="container flex flex-row justify-center text-center pb-10">
			<Choice {...robotProps[0]} />
			<Choice {...robotProps[1]} />
			<Choice {...robotProps[2]} />
		</div>
		<div class="container flex flex-row justify-center text-center mt-10">
			<Choice {...playerProps[0]} on:click={() => game.playerTake(Take.Rock)} />
			<Choice {...playerProps[1]} on:click={() => game.playerTake(Take.Paper)} />
			<Choice {...playerProps[2]} on:click={() => game.playerTake(Take.Scissors)} />
		</div>
		<h1 class="text-2xl uppercase tracking-widest">player</h1>
	</div>
</Centered>
