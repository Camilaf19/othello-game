export type Player = 'black' | 'white'

export class PlayerToken {
  constructor(public currentPlayer: Player, public availablePieces: number) {
    this.availablePieces = 30
  }
}
