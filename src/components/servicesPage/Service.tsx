import React from 'react'

interface PropTypes{
    title:string,
    description:string
}
const Service = ({title,description}:PropTypes) => {
    return (
        <div className="flex justify-around">
        <h1 className='text-xl text-gray-700 font-medium'>{title}</h1>
        <p className='w-[65%] text-xl font-normal'>{description}
        </p>
      </div>
    )
}

export default Service
