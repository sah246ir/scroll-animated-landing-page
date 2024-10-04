import React from 'react'

const gif = require("../media/giffy.gif")
interface PropTypes {
    title: string,
    description: string
}
const Feature = ({ title, description }: PropTypes) => {
    return (
        <div className="flex justify-around gap-4 w-full items-center  ">
            <div className="w-[25%]">
                <img className='w-[55%]' src={gif} alt="" />
            </div>
            <div className='w-[75%]' >
                <h1 className='text-[2.3vw]  text-gray-700 font-medium'>{title}</h1>
                <p className='text-[2vw] font-normal' style={{ height: '100%' }}>
                    {description}
                </p>
            </div>
        </div>


    )
}

export default Feature
