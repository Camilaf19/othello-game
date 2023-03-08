import { useState, useEffect } from 'react'

interface myProps {
  blackTokens: number
  whiteTokens: number
  currentPlayer: number
}

export const GameEnd = ({
  blackTokens,
  whiteTokens,
  currentPlayer,
}: myProps) => {
  const [winner, setWinner] = useState('')

  useEffect(() => {
    if (blackTokens < 0) {
      setWinner('white')
    } else if (whiteTokens < 0) {
      setWinner('black')
    } else if (blackTokens === 0) {
      setWinner('black')
    } else if (whiteTokens === 0) {
      setWinner('white')
    }
  }, [blackTokens, whiteTokens, currentPlayer])

  return (
    <>
      <article>The winner is {winner} </article>
    </>
  )
}
