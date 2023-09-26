<script lang="ts">
	import Background from '$lib/Background.svelte'
	import AnimLogo from '$lib/AnimLogo.svelte'
</script>

<Background>
	<div class="container flex flex-col h-full justify-center items-center text-center">
		<div class="flex flex-col items-center p-7 rounded-[20px] backdrop-blur bg-slate-50/10">
			<AnimLogo />
			<h1 class="uppercase font-bold text-3xl m-7">rock paper scissors</h1>
		</div>
	</div>
</Background>
