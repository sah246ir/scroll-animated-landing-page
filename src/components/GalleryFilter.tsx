import React from 'react'
import Button from './buttons/Button'

interface PropTypes{
    children:React.ReactNode,
}
const GalleryFilter = ({children }:PropTypes) => {
  return (
    <Button closeInUnderline={false} className='transition duration-300 text-gray-500 hover:text-white'>
      {children}
    </Button>
  )
}

export default GalleryFilter
