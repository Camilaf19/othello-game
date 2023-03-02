import { useState } from 'react'
/* import { Player } from './classes/Player' */
import { Token } from './components/Token'
import { Board, Cell } from './classes/matriz'

function App() {
  const boardI = new Board(8, 8)
  const [board, setBoard] = useState(boardI)
  const [turn, setTurn] = useState(1)
  const newBoard = board.initBoard()


  function handleClick(irow: number, icol: number): void {
    const cell = new Cell(irow, icol, turn)
    cell.verificarvecinos(newBoard)
   /*  turn === 1 ?  board.cells[irow][icol] = 1 : board.cells[irow][icol] = 2  esto va pal otro lado  */
    const newTurn = turn === 1 ? 2 : 1
    setTurn(newTurn)
    
   
    console.log(
      `Clicked on cell (${irow}, ${icol}: ${board.cells[irow][icol]} ${turn} `
    )
  }

  return (
    <main className='board'>
      <h1>Othello</h1>
      <section className='game'>
        {board.cells.map((row, irow) => {
          return (
            <section
              key={irow}
              className='row'
            >
              {row.map((_, icol) => {
                return (
                  <section
                    key={icol}
                    className='col'
                    onClick={() => handleClick(irow, icol)}
                  >
                    {board.cells[irow][icol] === 0 && (
                      <div className='token-none' />
                    )}
                    {board.cells[irow][icol] === 1 && (
                      <div className='token-black' />
                    )}
                    {board.cells[irow][icol] === 2 && (
                      <div className='token-white' />
                    )}
                  </section>
                )
              })}
            </section>
          )
        })}

        <section className='turn-container'>
          <Token isSelected={turn === 2}></Token>
          <Token isSelected={turn === 1}></Token>
        </section>
        <button onClick={() => setBoard(newBoard)}>Start and reset game</button>
      </section>
    </main>
  )
}

export default App
