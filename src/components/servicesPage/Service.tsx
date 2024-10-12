import React from 'react'
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'

interface PropTypes {
  title: string,
  description: string,
  img: string,
  href:string
}
const Service = ({ title, description, img ,href}: PropTypes) => {
  const immg = require(`../../media/services/${img}`) 
  return (
    <div className="flex justify-around items-center gap-4 max-w-[1500px] m-auto  ">
      <div className='flex flex-grow flex-col gap-6 justify-between items-center' style={{ height: '100%' }}>
        <h1 className='text-xl  text-gray-700 font-medium'>{title}</h1>
        <img className='w-[7.5vw] h-full' src={immg} alt="" />
      </div>
      <div className='w-[65%]'>
        <p className=' text-2xl font-normal' style={{ height: '100%' }}>
          {description}
        </p>
        <Link to={href}><Button className='mt-3 text-orange-600'>View More</Button></Link>
      </div>
    </div>


  )
}

export default Service
