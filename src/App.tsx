

function App() {
  const board = Array(64).fill(0)

  return (
    <main className='board'>
      <h1>Othello</h1>
      <section className="game">
        {board.map((_, i) => {
        return (
          <section className="cell" key={i}>{i} </section>
        )
        })
        }
      </section>
    </main>
  )
}

export default App
