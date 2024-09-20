import React, { useRef, useState } from 'react'
import SectionHeading from '../components/headings/SectionHeading'
import GalleryPotrait from '../components/GalleryPotrait';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import GalleryFilter from '../components/GalleryFilter';

interface Potrait{
    img:any,
    name:string,
    tags:string[],
    size:"sm"|"md"|"lg"
}
const gallery:Potrait[][] = [
    [
        { img: require("../media/img-1.jpg"),name:"Kook",tags:["tag","tag"],size:"md" },
        { img: require("../media/img-2.jpg"),name:"Kook",tags:["tag","tag"],size:"md" },
        { img: require("../media/img-3.jpg"),name:"Kook",tags:["tag","tag"],size:"sm" },
        { img: require("../media/img-4.jpg"),name:"Kook",tags:["tag","tag"],size:"md" }
    ],
    [
        { img: require("../media/img-5.jpg"),name:"Kook",tags:["tag","tag"],size:"md" },
        { img: require("../media/img-6.jpg"),name:"Kook",tags:["tag","tag"],size:"sm" },
        { img: require("../media/img-7.jpg"),name:"Kook",tags:["tag","tag"],size:"md" }
    ],
    [
        { img: require("../media/img-8.jpg"),name:"Kook",tags:["tag","tag"],size:"sm" },
        { img: require("../media/img-9.jpg"),name:"Kook",tags:["tag","tag"],size:"lg" },
        { img: require("../media/img-10.jpg"),name:"Kook",tags:["tag","tag"],size:"sm" }
    ]
];
const GallerySection = () => {
    const element = useRef<HTMLDivElement>(null)
    const [hovered,setHover] = useState<number[] | null>(null)
    const {scrollYProgress} = useScroll({
        target:element
    })

    const y = useTransform(
        scrollYProgress,
        [0,1],
        [0,-100]
    )
    return (
        <section style={{ backgroundColor: "#181717" }} className='p-9 py-12   text-white gap-16'>
            <SectionHeading>Our portfolio</SectionHeading>
            <h1 className='text-[5vw] whitespace-nowrap text-center mb-7'>
                <Star size={35} className='inline fill-gray-300'/> 
                &nbsp;
                Our portfolio
            </h1> 
            <div className="flex gap-3 flex-wrap justify-between mb-3">
                <GalleryFilter>Category</GalleryFilter>
                <GalleryFilter>Category</GalleryFilter>
                <GalleryFilter>Category</GalleryFilter>
                <GalleryFilter>Category</GalleryFilter>
                <GalleryFilter>Category</GalleryFilter>
                <GalleryFilter>Category</GalleryFilter>
                <GalleryFilter>Category</GalleryFilter>
                <GalleryFilter>Category</GalleryFilter>
                <GalleryFilter>Category</GalleryFilter>
            </div>
            <div   ref={element} className="gallery flex flex-col sm:flex-row sm:gap-5">
                {gallery.map((grp,i)=>{
                    return(
                        <motion.div style={{...(i!==1 && {y})}} className="flex flex-col gap-8 transition-all duration-500 lg:transition-none">
                            {grp.map((potrait,j)=>{
                                return(
                                    <GalleryPotrait overlay={hovered && hovered.toString()!==[i,j].toString()} onHover={()=>setHover([i,j])} onLeave={()=>setHover(null)} potrait={potrait} />
                                )
                            })}
                        </motion.div> 
                    )
                })}
                 
            </div>
        </section>
    )
}

export default GallerySection
