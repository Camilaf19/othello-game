export class Board {
  rows: number
  cols: number
  cells: number[][]

  constructor(rows: number, cols: number) {
    this.rows = rows
    this.cols = cols
    this.cells = Array(rows)
      .fill(null)
          .map(() => Array(cols).fill(0))
      
      const centerRow = Math.floor(rows / 2)
      const centerCol = Math.floor(cols / 2)
      this.cells[centerRow][centerCol] = 1
      this.cells[centerRow - 1][centerCol] = 2
      this.cells[centerRow][centerCol - 1] = 2
      this.cells[centerRow - 1][centerCol - 1] = 1
    }
    
}

export type Player = 'black' | 'white'

export class Turns {
  color: string

  constructor(color: Player) {
    this.color = color
  }

}
