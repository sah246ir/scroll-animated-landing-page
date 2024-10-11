import React from 'react'
import SpecialHoverButton from './buttons/SpecialHoverButton'
interface PropTypes{
  children:React.ReactNode
}
const Expertise = ({children}:PropTypes) => {
  return (
    <SpecialHoverButton className=" !bg-transparent px-7 py-2 group-hover:opacity-25 hover:!opacity-100 text-center md:text-left gap-3 group/btn">
       {children}
      {/* <img src={gif} className='group-hover/btn:opacity-100 opacity-0 transition duration-500 hidden sm:block' width={65} alt=""  /> */}
   </SpecialHoverButton>

  )
}

export default Expertise
