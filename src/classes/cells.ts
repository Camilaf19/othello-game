import { Board } from './board'

export class Cell extends Board {
  neighbors: number[][]
  flippedTokens: number = 0

  constructor(rows: number, cols: number, public currentPlayer: number) {
    super(rows, cols)
    this.neighbors = [
      [-1, 0], // arriba
      [0, 1], // derecha
      [1, 0], // abajo
      [0, -1], // izquierda
    ]
    this.currentPlayer = currentPlayer
  }

  validateMove(Board: Board) {
    if (Board.cells[this.rows][this.cols] !== 0) {
      return 0
    }
    this.neighbors.forEach((direction) => {
      let row = this.rows + direction[0] // posicion adayacentes
      let col = this.cols + direction[1]

      if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        if (Board.cells[row][col] === 3 - this.currentPlayer) {
          // la celda adyacente sea el oponente
          if (Board.cells[this.rows][this.cols] !== this.currentPlayer) {
            this.flippedTokens++
            Board.cells[this.rows][this.cols] = this.currentPlayer //pintar el turno actual
          }
          this.createChain(this.rows, this.cols, direction, this.currentPlayer, Board
          )
        }
      }
    })
    return Board.cells[this.rows][this.cols]
  }

  createChain(
    row: number, // posicion donde jugador quiere poner su ficha
    col: number,
    direction: number[],
    currentPlayer: number,
    Board: Board
  ) {
    let r = row + direction[0] // adyacentes del actual
    let c = col + direction[1]
    while (r >= 0 && r < 8 && c >= 0 && c < 8 && Board.cells[r][c] === 3 - currentPlayer) {
      Board.cells[r][c] = currentPlayer // pinta la celda adaycente del jugador actual
      this.flippedTokens++
      r += direction[0] //cambia a los valores adayacentes de la adyacente
      c += direction[1]
    }
  }
}
