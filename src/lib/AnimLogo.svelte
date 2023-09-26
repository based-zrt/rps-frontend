<script lang="ts">
	import rock from '$lib/assets/icons/rock.png'
	import paper from '$lib/assets/icons/paper.png'
	import scissors from '$lib/assets/icons/scissors.png'
	import { onMount } from 'svelte'

	let phase: number = 0
	let phases = [rock, paper, scissors]
	let src = rock

	onMount(() => {
		const intervalId = setInterval(() => {
			if (++phase == 3) phase = 0
			src = phases[phase]
		}, 2000)

		return () => {
			clearInterval(intervalId)
		}
	})
</script>

<img {src} alt={src} />
