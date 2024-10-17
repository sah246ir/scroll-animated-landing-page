import { m, MotionValue, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface PropTypes{
    children:React.ReactNode
    range: number[],
    scrollYProgress: MotionValue<number>,
    arrow?: boolean
}
const ApproachHeading = ({children,range,scrollYProgress,arrow=true}:PropTypes) => {
    const opacity = useTransform(scrollYProgress, range, [0, 1])
    const x = useTransform(scrollYProgress,range,[-30,0], )
    return (
        <div className='relative text-orange-600'>
            {arrow && <m.div style={{x,fontSize:"3.787037037vw"}} className="-z-10 transition-all duration-500  absolute text-5xl text-gray-100">{children}
                <ArrowRight className='inline  sm:size-12' />
            </m.div>}
            <m.h1 style={{opacity,x,fontSize:"3.787037037vw"}} className='transition-all duration-500  text-5xl text-black-200 text-justify '>
                 {children}
                {arrow && <ArrowRight strokeWidth={1.5} className='inline sm:size-12 stroke-gray-800 ' />}
            </m.h1>
        </div>
    )
}

export default ApproachHeading
