<script lang="ts">
	import rock from '$lib/assets/icons/rock_centered.png'
	import paper from '$lib/assets/icons/paper_centered.png'
	import scissors from '$lib/assets/icons/scissors_centered.png'
	import { onMount } from 'svelte'

	let phase: number = 0
	let phases = [rock, paper, scissors]
	let src = rock

	onMount(() => {
		const intervalId = setInterval(() => {
			if (++phase == 3) phase = 0
			src = phases[phase]
		}, 500)

		return () => {
			clearInterval(intervalId)
		}
	})
</script>

<img class="transition ease-in-out hover:scale-110 duration-200 h-40 lg:h-80" {src} alt={src} />
