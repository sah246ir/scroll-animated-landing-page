import React  from 'react'

interface PropTypes{
    children:React.ReactNode,
    closeInUnderline?:boolean
    className?:string
}
const Button = ({children,className,closeInUnderline=true}:PropTypes) => {
  return (
    <button className={`${closeInUnderline && "close-in-underline"} ${className}`}>
      {children}
    </button>
  )
}

export default Button
