import { Board } from './board'

export class Cell extends Board {
  neighbors: number[][]

  constructor(rows: number, cols: number, public currentPlayer: number) {
    super(rows, cols)
    this.neighbors = [
      [-1, 0], // arriba
      [0, 1], // derecha
      [1, 0], // abajo
      [0, -1], // izquierda
    ]
    this.currentPlayer = currentPlayer // turns: 1= black token 2= white token
  }

  validateMove(Board: Board): number {
    if (Board.cells[this.rows][this.cols] !== 0) {
      return 0
    }

    this.neighbors.map((direction) => {
      let row = this.rows + direction[0]
      let col = this.cols + direction[1]

      if (row >= 0 && row < 8 && col >= 0 && col < 8) {  //no salir del tablero
          let valueAdjacent = Board.cells[row][col]
           console.log(Board.cells[row][col])
        if (valueAdjacent === 3 - this.currentPlayer) {  // pintar y capturar ficha adyacente del oponente
            Board.cells[this.rows][this.cols] = this.currentPlayer
            Board.cells[row][col] = this.currentPlayer 
          /*   row += direction[0]
            col += direction[1]  //solo hace cadena de 3, arreglar a toda la fila mirar el while
             Board.cells[row][col] = this.currentPlayer  */
        }
      }

    })
    return Board.cells[this.rows][this.cols]
  }
}
