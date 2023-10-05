<script lang="ts">
	import Centered from '$lib/Centered.svelte'
	import AnimLogo from '$lib/AnimLogo.svelte'
</script>

<Centered>
	<a href="/play">
		<div class="flex flex-col items-center p-4 rounded-[20px] backdrop-blur bg-slate-50/10">
			<AnimLogo />
			<h1 class="uppercase font-bold text-xl lg:text-3xl m-7">rock paper scissors</h1>
		</div>
	</a>
</Centered>
