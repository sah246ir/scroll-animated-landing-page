import React from 'react'

interface PropTypes{
    children:React.ReactNode
    className?:string
}
const SectionHeading = ({children,className}:PropTypes) => {
    return (
        <div className={'flex items-center gap-3 ' + className}>
            <div className='bg-black size-2 rounded-full  ' />
            <p className={'text-sm '}>{children}</p>
        </div>
    )
}

export default SectionHeading
