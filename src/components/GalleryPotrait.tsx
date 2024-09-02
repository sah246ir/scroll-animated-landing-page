import React from 'react'

interface PropTypes{
    potrait:{
        img:any,
        name:string,
        tags:string[],
        size:"sm"|"md"|"lg"
    },
    onHover?:()=>any
    onLeave?:()=>any
    overlay?:boolean | null
}
const GalleryPotrait = ({potrait:{size,img,name,tags},onHover,onLeave,overlay}:PropTypes) => {
    return (
        <div className={`transition duration-300 space-y-2 ${overlay && "grayscale opacity-25"}`}>
            <img alt='' onMouseEnter={onHover} onMouseLeave={onLeave} className={`transition duration-500 ${size==="sm"&&"sm:h-[175px]"} ${size==="md"&&"sm:h-[280px]"} ${size==="lg"&&"sm:h-[400px]"} object-cover object-center rounded-lg hover:scale-[0.98]`} src={img} />
            <h3 className='font-medium'>{name}</h3>
            <p className='!mt-0 text-gray-500'>{tags[0]}</p>
        </div>
    )
}

export default GalleryPotrait
