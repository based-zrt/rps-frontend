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
    private rollElements: Array<string>
    private rolledIndex: number = 0
    private listCallback: (l: Array<string>) => void
    private enabledElement: string
    private disabledElement: string

    constructor(rollElements: Array<string>, listCallback: (l: Array<string>) => void, enabledElement: string, disabledElement: string) {
        this.rollElements = rollElements
        this.listCallback = listCallback
        this.enabledElement = enabledElement
        this.disabledElement = disabledElement
    }

    public roll(time: number) {
        console.log('roll invoked')
        const intervalID = setInterval(() => {
            let tmp = []
            this.rolledIndex = ++this.rolledIndex % this.rollElements.length
            for (let i = 0; i < this.rollElements.length; i++) {
                if (this.rolledIndex == i) tmp.push(this.enabledElement)
                else tmp.push(this.disabledElement)
            }
            this.listCallback(tmp)
        }, 100)
        setTimeout(() => clearInterval(intervalID), time)
    }
}