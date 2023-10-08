<script lang="ts">
	export let src: string
	export let robot = false
	export let enabled = true
	export let selected = false

	$: style = `
	h-32 lg:h-40 m-2 lg:m-5 transition hover:scale-110 
	${robot && enabled ? 'hue-rotate-90 saturate-200' : ''}
	${!enabled ? 'saturate-0 pointer-events-none' : ''} 
	${selected ? 'scale-110' : ''} 
	`
</script>

<img on:click {src} class={style} />
