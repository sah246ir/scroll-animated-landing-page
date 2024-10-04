import React from 'react'
import { Linkedin } from 'lucide-react'
const img = require("../media/ceo.jpg")

interface PropTypes{
  name:string,
  designation:string,
  linkedin?:string
  className?:string
}
const LeaderCard = ({name,designation,className}:PropTypes) => {
  return (
    <div className={'flex flex-col relative rounded border border-gray-300 ' + className}>
      <img src={img} alt="" className='rounded' />
      <div className="flex justify-between p-2 items-center bg-white w-[98%]">
        <div className=" rounded">
            <h1 className='text-base'>
                {name}
            </h1>
            <p className='text-gray-600'>{designation}</p>
        </div>
        <div className="size-9 border border-black rounded-full grid place-items-center hover:bg-black group transition duration-300">
            <Linkedin size={20} strokeWidth={0.01} className='fill-black group-hover:fill-white transition duration-300'/>
        </div>
      </div>
    </div>
  )
}

export default LeaderCard
