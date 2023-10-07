<script lang="ts">
	export let src: string
	export let extraStyles = ''

	$: style = 'h-32 lg:h-40 m-2 lg:m-5 transition hover:scale-110 cursor-pointer ' + extraStyles
</script>

<img on:click {src} class={style} />
