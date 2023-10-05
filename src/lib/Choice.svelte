<script lang="ts">
	export let src
	export let extraStyles = ''

	$: style = 'h-40 m-5 transition hover:scale-110 cursor-pointer ' + extraStyles
</script>

<img on:click {src} class={style} />
