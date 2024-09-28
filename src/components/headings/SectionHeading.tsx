import React from 'react'

interface PropTypes{
    children:React.ReactNode
    className?:string
    bulletClassName?:string
    bullet?:boolean
}
const SectionHeading = ({children,className,bulletClassName,bullet=true}:PropTypes) => {
    return (
        <div className={'flex items-center gap-3 ' + className}>
            {bullet && <div className={'bg-black size-2 rounded-full  ' + bulletClassName} />}
            <p className={'text-sm '}>{children}</p>
        </div>
    )
}

export default SectionHeading
