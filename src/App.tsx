import { useEffect, useState } from 'react'
import { Token } from './components/Token'
import { Board } from './classes/board'
import { Cell } from './classes/cells'


function App() {
  const initializeBoard = new Board(8, 8)
  const [board, setBoard] = useState(initializeBoard)
  const newBoard = board.initBoard()
  const [turn, setTurn] = useState(1)
  const [whiteTokens, setWhiteTokens] = useState(30)
  const [blackTokens, setBlackTokens] = useState(30)

  useEffect(() => {
      setWhiteTokens(32)
      setBlackTokens(32)
  }, [])

  function handleClickBoard(irow: number, icol: number): void {
    const cell = new Cell(irow, icol, turn)
    let cellValue = cell.validateMove(board)
    let tokenschanged = cell.flippedTokens
    let changeTurn = false

    if ((turn === 1 || turn === 2) && cellValue === 0) {
      setWhiteTokens(whiteTokens)
      setBlackTokens(blackTokens)
    } else if (turn === 1 && blackTokens > 0) {
      setBlackTokens(blackTokens - tokenschanged)
      setWhiteTokens(whiteTokens + tokenschanged - 1)
      changeTurn = true
    } else if (turn === 2 && whiteTokens > 0) {
      setWhiteTokens(whiteTokens - tokenschanged )
      setBlackTokens(blackTokens + tokenschanged - 1)
      changeTurn = true
    }

    if (changeTurn) {
      const newTurn = turn === 1 ? 2 : 1
      setTurn(newTurn)
    }

    if (blackTokens === 0 || whiteTokens === 0) {
      //decir quien gano
      alert('game over')
      // setBoard(board)
    }
  }
  return (
    <>
      <header className='header-app'>
        <h1>Othello</h1>
      </header>
      <main className='app-main'>
        <section className='board'>
          {board.cells.map((row, irow) => {
            return (
              <section
                key={irow}
                className='rows'
              >
                {row.map((_, icol) => {
                  return (
                    <section
                      key={icol}
                      className='cols'
                      onClick={() => handleClickBoard(irow, icol)}
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
        </section>
        <section className='aside-container'>
          <article className='turns-container'>
            <Token
              classname='token-black'
              isSelected={turn === 1}
            ></Token>
            <Token
              classname='token-white'
              isSelected={turn === 2}
            ></Token>
          </article>
          <article className='tokens-container'>
            <h2>Black:</h2>
            <p>{blackTokens}</p>
            <h2>White:</h2>
            <p>{whiteTokens}</p>
            <button
              className='button-start'
              onClick={() => {
                setBoard(newBoard)
                setWhiteTokens(30)
                setBlackTokens(30)
              }}
            >
              Start and reset game
            </button>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
