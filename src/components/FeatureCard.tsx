import React from 'react'
 
interface PropTypes {
    title: string,
    description: string,
    img: string,
}
const Feature = ({ title, description, img }: PropTypes) => {
    const immg = require(`../media/why-choose-us/${img}`)
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-4 w-full items-center max-w-[1500px] m-auto  ">
            <div className="sm:w-[25%]">
                <img className='sm:w-[55%]' src={immg} alt="" />
            </div>
            <div className='sm:w-[75%] text-center sm:text-left' >
                <h1 className='text-2xl mb-4  text-orange-600 font-medium'>{title}</h1>
                <p className='text-2xl font-normal' style={{ height: '100%' }}>
                    {description}
                </p>
            </div>
        </div>


    )
}

export default Feature
