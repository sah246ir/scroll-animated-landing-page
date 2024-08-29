import React  from 'react'

interface PropTypes{
    children:React.ReactNode,
    closeInUnderline?:boolean
}
const Button = ({children,closeInUnderline=true}:PropTypes) => {
  return (
    <button className={`${closeInUnderline && "close-in-underline"}`}>
      {children}
    </button>
  )
}

export default Button
