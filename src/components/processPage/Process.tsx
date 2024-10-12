import React from 'react'

interface PropTypes {
    title: string,
    description: string,
    index: string,
    img:string
}
const ProcessCard = ({ title, description, index, img }: PropTypes) => {
    const imgg = require(`../../media/${img}`)
    return (
        <div className='max-w-[1500px] m-auto mt-14'>
            <div className='flex gap-4 items-end '>
                <h1 className='text-6xl font-semibold  text-orange-600'>{index}</h1>
                <h2 className='text-3xl text-gray-800 font-medium'>{title}</h2>
            </div>
            <hr className='border-black mb-4 mt-1' />
            <div className="flex items-center justify-around gap-4  ">
                <img width={170} className=' object-cover' src={imgg} alt="" />
                <p className='w-[65%] text-2xl  font-light' style={{ height: '100%' }}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProcessCard
