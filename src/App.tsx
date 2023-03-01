import { useState } from 'react'
import { Player } from './classes/matriz'
import { Token } from './components/Token'
import { Board } from './classes/matriz'

function App() {
  const boardI = new Board(8, 8)
  const [board, setBoard] = useState(boardI)
  const [turn, setTurn] = useState<Player>('black')

  function handleClick(rowIndex: number, colIndex: number) {
    console.log(
      `Clicked on cell (${rowIndex}, ${colIndex}: ${board.cells[rowIndex][colIndex]}`
    )
    const newTurn = turn === 'black' ? 'white' : 'black'
    setTurn(newTurn)

/*   const positionBoard = [...board.cells]
     positionBoard(rowIndex, colIndex) = turn
    setBoard(positionBoard)  */
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
                      <div className='token-white' />
                    )}
                    {board.cells[irow][icol] === 2 && (
                      <div className='token-black' />
                    )}
                  </section>
                )
              })}
            </section>
          )
        })}
        <section className='turn-container'>
          <Token isSelected={turn === 'black'}></Token>
          <Token isSelected={turn === 'white'} />
        </section>
      </section>
    </main>
  )
}

export default App
