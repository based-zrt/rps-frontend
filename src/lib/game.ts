import { resultDisplay } from "./stores";

export enum Result {
    Won = 0,
    Lost,
    Tie
}

export enum Take {
    Rock = 0,
    Paper,
    Scissors
}

export interface GameResponse {
    robotTake: Take,
    robotResult: Result,
    userTake: Take,
    userResult: Result
}

export interface ChoiceProps {
    src: string,
    robot: boolean,
    enabled: boolean,
    selected: boolean
}

enum AnimState {
    PlayerFadeOut = 1,
    PlayerMoveIn,
    EnemyRoll,
    EnemyFadeOut,
    EnemyMoveIn,
    DisplayResult
}

const animDuration: Map<AnimState, number> = new Map([
    [AnimState.PlayerFadeOut, 100],
    [AnimState.PlayerMoveIn, 100],
    [AnimState.EnemyRoll, 100],
    [AnimState.EnemyFadeOut, 100],
    [AnimState.EnemyMoveIn, 100],
    [AnimState.DisplayResult, 100]
])

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export class Game {
    private robotProps: Array<ChoiceProps>
    private robotDefault: Array<ChoiceProps>
    private playerProps: Array<ChoiceProps>
    private playerDefault: Array<ChoiceProps>
    private rolledIndex: number = 0
    private robotCallback: (l: Array<ChoiceProps>) => void
    private playerCallback: (l: Array<ChoiceProps>) => void
    private resultCallback: (r: GameResponse) => void

    constructor(robotProps: Array<ChoiceProps>, robotCallback: (l: Array<ChoiceProps>) => void, playerProps: Array<ChoiceProps>, playerCallback: (l: Array<ChoiceProps>) => void, resultCallback: (r: GameResponse) => void) {
        this.robotProps = robotProps
        this.robotDefault = structuredClone(robotProps)
        this.robotCallback = robotCallback
        this.playerProps = playerProps
        this.playerDefault = structuredClone(playerProps)
        this.playerCallback = playerCallback
        this.resultCallback = resultCallback
    }

    public roll(time: number) {
        const intervalID = setInterval(() => {
            this.selectTake(++this.rolledIndex % this.robotProps.length, false)
            this.robotCallback(this.robotProps)
        }, 100)
        setTimeout(() => clearInterval(intervalID), time)
    }

    public async playerTake(take: Take): Promise<undefined> {
        resultDisplay.set(false)
        this.selectTake(take)
        this.playerCallback(this.playerProps)
        this.roll(1500)
        const start = Date.now()
        const response: GameResponse = await this.fetchResult(take)
        const elapsed = Date.now() - start
        this.resultCallback(response)
        await delay(1501 - elapsed)
        this.selectTake(response.robotTake, false)
        this.robotCallback(this.robotProps)
        await delay(2500)
        resultDisplay.set(true)
        await delay(1000)
        this.robotCallback(this.robotDefault)
        this.playerCallback(this.playerDefault)
    }

    private async fetchResult(t: Take): Promise<GameResponse> {
        const response = await fetch("https://api.sunstorm.rocks/rps/take", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                take: t
            })
        })
        const res = await response.json()
        return res
    }

    private selectTake(t: Take, player: boolean = true): undefined {
        const arr = player ? this.playerProps : this.robotProps

        arr.forEach(c => {
            c.enabled = false
            c.selected = false
        })
        arr[t].enabled = true
        arr[t].selected = true

        if (player)
            this.playerCallback(arr)
        else
            this.robotCallback(arr)
    }
}