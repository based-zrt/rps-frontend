import { robotScore, playerScore } from './stores'
import { get } from 'svelte/store'

interface Score {
    robot: number
    player: number
}

const key: string = 'scoreboard'
let unsubRobot: any = null
let unsubPlayer: any = null

function initStore() {
    if (localStorage.getItem(key) == null) {
        localStorage.setItem(key, JSON.stringify({ robot: 0, player: 0 }))
    }
}

function save(robot: number | null, player: number | null) {
    let data: Score = { robot: 0, player: 0 }
    if (robot == null) data.robot = get(robotScore)
    else data.robot = robot
    if (player == null) data.player = get(playerScore)
    else data.player = player
    localStorage.setItem(key, JSON.stringify(data))
}

export function registerScoreboard() {
    initStore()
    const s: Score = JSON.parse(localStorage.getItem(key) || '')
    robotScore.set(s.robot)
    playerScore.set(s.player)
    unsubRobot = robotScore.subscribe(score => save(score, null))
    unsubPlayer = playerScore.subscribe(score => save(null, score))
}

export function unregisterScoreboard() {
    if (unsubRobot != null) unsubRobot()
    if (unsubPlayer != null) unsubPlayer()
}