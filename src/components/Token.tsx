 //import { Player } from "../classes/matriz" 

interface myProps {
  isSelected: boolean

 /*  turn: Player */
}

export const Token = ({ isSelected}: myProps) => {
 const className = isSelected ? 'token-selected' : 'token-none'
  return (
    <>
      <div className={className}></div>
    </>
  )
}
