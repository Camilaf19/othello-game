
interface myProps {
  isSelected: boolean
  classname: string
}

export const Token = ({ isSelected, classname}: myProps) => {
  const className = isSelected ? 'token-selected' : 'token-none'
  return (
    <>
      <section className={className}>
        <div className={classname}></div>
      </section>
    </>
  )
}
