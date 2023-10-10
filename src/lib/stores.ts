import { writable } from 'svelte/store'

export const resultDisplay = writable(false)
export const robotScore = writable(0)
export const playerScore = writable(0)