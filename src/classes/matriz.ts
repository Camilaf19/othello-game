/* import { PlayerToken } from './Player' */
// import { Player } from './Player'
export class Board {
  rows: number
  cols: number
  cells: number[][]

  constructor(rows: number, cols: number) {
    this.rows = rows
    this.cols = cols
    this.cells = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(0))
  }

  initBoard(): Board {
    const newBoard = new Board(this.rows, this.cols)
    newBoard.cells[3][3] = 2
    newBoard.cells[3][4] = 1
    newBoard.cells[4][3] = 1
    newBoard.cells[4][4] = 2
    return newBoard
  }
}

type Position = [number, number]

export class Cell extends Board {
  position: Position
  neighbors: number[][]

  constructor(rows: number, cols: number, public currentPlayer: number) {
    super(rows, cols)
    this.position = [rows, cols]
    this.neighbors = [
      [-1, 0], // arriba
      [0, 1], // derecha
      [1, 0], // abajo
      [0, -1], // izquierda
    ]
    this.currentPlayer = currentPlayer
  }

  verificarvecinos(Board: Board) {
    if (Board.cells[this.rows][this.cols] !== 0) {
      return console.log('ya esta ocupada')
    }

    this.neighbors.map((direction) => {
      const row = this.rows + direction[0]
      const col = this.cols + direction[1]
     if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        let adjacentCell = Board.cells[row][col] 
       if (adjacentCell === 3 - this.currentPlayer) {
         Board.cells[this.rows][this.cols] = this.currentPlayer 
         console.log('sirve', this.currentPlayer)
       } 
       
      }  

      
    
    })
  }
}
