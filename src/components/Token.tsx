interface myProps {
  isSelected: boolean
}

export const Token = ({ isSelected }: myProps) => {
 const className = isSelected ? 'token-selected' : 'token-none'
  return (
    <>
      <div className={className}></div>
    </>
  )
}
