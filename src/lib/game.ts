enum Result {
    Won = 0,
    Lost,
    Tie
}

export enum Take {
    Rock = 0,
    Paper,
    Scissors
}

interface GameResponse {
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

function selectTake(arr: Array<ChoiceProps>, t: Take) {
    arr.forEach(c => {
        c.enabled = false
        c.selected = false
    })
    arr[t].enabled = true
    arr[t].selected = true
}

export class Game {
    private robotProps: Array<ChoiceProps>
    private playerProps: Array<ChoiceProps>
    private rolledIndex: number = 0
    private robotCallback: (l: Array<ChoiceProps>) => void
    private playerCallback: (l: Array<ChoiceProps>) => void

    constructor(robotProps: Array<ChoiceProps>, robotCallback: (l: Array<ChoiceProps>) => void, playerProps: Array<ChoiceProps>, playerCallback: (l: Array<ChoiceProps>) => void) {
        this.robotProps = robotProps
        this.robotCallback = robotCallback
        this.playerProps = playerProps
        this.playerCallback = playerCallback
    }

    public roll(time: number) {
        const intervalID = setInterval(() => {
            const tmp = this.robotProps
            selectTake(tmp, ++this.rolledIndex % this.robotProps.length)
            this.robotCallback(tmp)
        }, 100)
        setTimeout(() => clearInterval(intervalID), time)
    }

    public async playerTake(take: Take): Promise<undefined> {
        this.roll(1500)
        const start = Date.now()
        const response: GameResponse = await this.fetchResult(take)
        console.log(response)
        const elapsed = Date.now() - start
        setTimeout(() => {
            let tmp = this.robotProps
            selectTake(tmp, response.robotTake)
            this.robotCallback(tmp)
        }, 1501 - elapsed)
    }

    async fetchResult(t: Take): Promise<GameResponse> {
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
}