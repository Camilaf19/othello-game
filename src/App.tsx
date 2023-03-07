import { useState } from 'react'
import { PlayerStats } from './components/PlayerStats'
import { Token } from './components/TokenDisplay'
import { Board } from './classes/board'
import { Cell } from './classes/cells'

function App() {
  const initializeBoard = new Board(8, 8)
  const [board, setBoard] = useState(initializeBoard)
  const newBoard = board.initBoard()
  const [turn, setTurn] = useState(1)
  const [whiteTokens, setWhiteTokens] = useState(32)
  const [blackTokens, setBlackTokens] = useState(32)

  function handleClickBoard(irow: number, icol: number) {
    const cellClass = new Cell(irow, icol, turn)
    const cellValue = cellClass.validateMove(board)
    const tokensChanged = cellClass.flippedTokens
    let changeTurn = false

    if ((turn === 1 || turn === 2) && cellValue === 0) {
      setWhiteTokens(whiteTokens)
      setBlackTokens(blackTokens)
    } else if (turn === 1) {
      setBlackTokens((prevBlackTokens) => prevBlackTokens - tokensChanged)
      setWhiteTokens((prevWhiteTokens) => prevWhiteTokens + tokensChanged - 1)
      changeTurn = true
    } else if (turn === 2) {
      setWhiteTokens((prevWhiteTokens) => prevWhiteTokens - tokensChanged)
      setBlackTokens((prevBlackTokens) => prevBlackTokens - tokensChanged - 1)
      changeTurn = true
    }
    if (changeTurn) {
    const newTurn = turn === 1 ? 2 : 1
    setTurn(newTurn)
    }
  }

  if (blackTokens === 0 || whiteTokens === 0) {
    //decir quien gano
    alert('game over')
    // setBoard(board)
  }

  function handleRestartGame() {
    setBoard(newBoard)
    setWhiteTokens(30)
    setBlackTokens(30)
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
        <aside className='aside-container'>
          <section className='turns-container'>
            <Token
              className='token-black'
              isSelected={turn === 1}
            />
            <Token
              className='token-white'
              isSelected={turn === 2}
            />
          </section>
          <PlayerStats
            whiteTokens={whiteTokens}
            blackTokens={blackTokens}
            handleRestartGame={handleRestartGame}
          />
        </aside>
      </main>
    </>
  )
}

export default App
