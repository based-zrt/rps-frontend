<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog'
	import { robotScore, playerScore } from './stores'
	import { Result } from './game'

	export let robotResult: Result
	export let playerResult: Result
	export let open: boolean
</script>

<AlertDialog.Root {open}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>
				{#if robotResult == playerResult}
					It's a tie!
				{:else if robotResult == Result.Won}
					You lost!
				{:else}
					You won!
				{/if}
			</AlertDialog.Title>
			<AlertDialog.Description class="text-md">
				<p>Robot: {$robotScore}</p>
				<p>Player: {$playerScore}</p>
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Action>OK</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
