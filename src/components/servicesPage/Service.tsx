import React from 'react'

const gif = require("../../media/giffy.gif")
interface PropTypes{
    title:string,
    description:string
}
const Service = ({title,description}:PropTypes) => {
    return (
        <div className="flex justify-around gap-4  ">
        <div className='flex flex-grow flex-col gap-6 justify-between items-center' style={{ height: '100%' }}>
          <h1 className='text-[2vw]  text-gray-700 font-medium'>{title}</h1>
          <img className='w-[7vw]' src={gif} alt="" />
        </div>
        <p className='w-[65%] text-[2vw] font-normal' style={{ height: '100%' }}>
          {description}
        </p>
      </div>
      

    )
}

export default Service
