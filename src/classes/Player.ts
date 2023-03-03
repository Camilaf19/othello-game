
export type Token = 'black' | 'white'

export class Players {
  remainingTurns: number
  currentPlayer: number
  constructor(currentPlayer: number) {
    this.remainingTurns = 30
    this.currentPlayer = currentPlayer
  }
}

