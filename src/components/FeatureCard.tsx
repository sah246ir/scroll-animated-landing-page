import React from 'react'
 
interface PropTypes {
    title: string,
    description: string,
    img: string,
}
const Feature = ({ title, description, img }: PropTypes) => {
    const immg = require(`../media/why-choose-us/${img}`)
    return (
        <div className="flex justify-around gap-4 w-full items-center  ">
            <div className="w-[25%]">
                <img className='w-[55%]' src={immg} alt="" />
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
