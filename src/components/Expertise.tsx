import React from 'react'
import SpecialHoverButton from './buttons/SpecialHoverButton'
const gif = require("../media/giffy.gif")
interface PropTypes{
  children:React.ReactNode
}
const Expertise = ({children}:PropTypes) => {
  return (
    <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:opacity-35 hover:!opacity-100 text-orange-500 text-center sm:text-left flex justify-between items-center gap-3 group/btn">
       {children}
      <img src={gif} className='group-hover/btn:opacity-100 opacity-0 transition duration-500' width={65} alt=""  />
   </SpecialHoverButton>

  )
}

export default Expertise
