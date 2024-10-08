import React from 'react'

interface PropTypes {
  title: string,
  description: string,
  img: string
}
const Service = ({ title, description, img }: PropTypes) => {
  const immg = require(`../../media/services/${img}`) 
  return (
    <div className="flex justify-around gap-4  ">
      <div className='flex flex-grow flex-col gap-6 justify-between items-center' style={{ height: '100%' }}>
        <h1 className='text-[2vw]  text-gray-700 font-medium'>{title}</h1>
        <img className='w-[7.5vw] h-full' src={immg} alt="" />
      </div>
      <p className='w-[65%] text-[2vw] font-normal' style={{ height: '100%' }}>
        {description}
      </p>
    </div>


  )
}

export default Service
