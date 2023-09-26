<script lang="ts">
	import rock from '$lib/assets/icons/rock.png'
	import paper from '$lib/assets/icons/paper.png'
	import scissors from '$lib/assets/icons/scissors.png'
	import { onMount } from 'svelte'

	let phase: number = 0

	onMount(() => {
		const intervalId = setInterval(() => {
			if (++phase == 3) phase = 0
		}, 1500)

		return () => {
			clearInterval(intervalId)
		}
	})
</script>

{#if phase == 0}
	<img src={rock} alt="Rock" srcset="" />
{/if}
{#if phase == 1}
	<img src={paper} alt="Rock" srcset="" />
{/if}
{#if phase == 2}
	<img src={scissors} alt="Rock" srcset="" />
{/if}
