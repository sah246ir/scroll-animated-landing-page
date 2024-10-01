import { motion, useScroll, useTransform } from 'framer-motion'
import { Star } from 'lucide-react'
import React, { useRef } from 'react'

const banner1 = require("../../../media/vertical-banner.jpg")
const banner2 = require("../../../media/vertical-banner-1.jpg")
const InsideSection = () => {
    const element = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target:element,
        offset:["start end","start 0" ]
    })
    const rotateleft = useTransform(
        scrollYProgress,
        [0,.5,1],
        [-5,-2.5,0], 
    )
    const rotateright = useTransform(
        scrollYProgress,
        [0,.5,1],
        [5,2.5,0], 
    )
    const scaleleft = useTransform(
        scrollYProgress,
        [0,.5,1],
        [.85,.95,1], 
    )
    const scaleright = useTransform(
        scrollYProgress,
        [0,.5,1],
        [.75,.85,1], 
    )
    const y = useTransform(
        scrollYProgress,
        [0,1],
        [500,0 ], 
    )
    const x = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const revx = useTransform(scrollYProgress, [0, 1], [0, -200]);
    return (
        <section className='overflow-hidden min-h-[150vh] sticky top-0 z-0    '>

            <motion.div style={{x:x,rotate:"-4deg"}} className="absolute  text-gray-300  flex gap-8 -top-10 transition duration-150 pointer-events-none">
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
            </motion.div>

            <motion.div style={{x:revx,rotate:"-4deg"}} className="absolute  text-gray-300  flex gap-8 top-28 transition duration-150 pointer-events-none">
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
            </motion.div>

            <motion.div style={{x:x,rotate:"-4deg"}} className="absolute  text-gray-300  flex gap-8 top-56 transition duration-150 pointer-events-none">
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
                <h1 className='text-[10ch] whitespace-nowrap'><Star size={35} className='inline fill-gray-300'/> Inside Clekk </h1>
            </motion.div>

            <motion.div  
            style={{y}}
            ref={element} 
            className='flex gap-14 h-screen p-5 py-12 flex-col md:flex-row transition-all duration-75   ' 
            >
                <motion.article
                className="h-full flex-grow bg-gray-400 transition-all duration-75  sticky"
                style={{rotate:rotateleft,scale:scaleleft}}
                >
                    <img src={banner1} className='absolute w-full h-full object-cover' alt="" />
                </motion.article>  
                <motion.article
                className="h-full flex-grow bg-gray-400 transition-all duration-75   sticky"
                style={{rotate:rotateright,scale:scaleright}}
                >
                    <img src={banner2} className='absolute w-full h-full object-cover' alt="" />

                </motion.article>
            </motion.div>
        </section>
    )
} 

export default InsideSection
