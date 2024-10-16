import React, { useRef, useState } from 'react'
import { m, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import GalleryFilter from '../../GalleryFilter';
import GalleryPotrait from '../../GalleryPotrait';

interface Potrait{
    img:any,
    name:string,
    tags:string[],
    size:"sm"|"md"|"lg"
}
const gallery:Potrait[][] = [
    [
        { img: require("../../../media/img-1.jpg"),name:"Kook",tags:["tag","tag"],size:"md" },
        { img: require("../../../media/img-2.jpg"),name:"Kook",tags:["tag","tag"],size:"md" },
        { img: require("../../../media/img-3.jpg"),name:"Kook",tags:["tag","tag"],size:"sm" },
        { img: require("../../../media/img-4.jpg"),name:"Kook",tags:["tag","tag"],size:"md" }
    ],
    [
        { img: require("../../../media/img-5.jpg"),name:"Kook",tags:["tag","tag"],size:"md" },
        { img: require("../../../media/img-6.jpg"),name:"Kook",tags:["tag","tag"],size:"sm" },
        { img: require("../../../media/img-7.jpg"),name:"Kook",tags:["tag","tag"],size:"md" }
    ],
    [
        { img: require("../../../media/img-8.jpg"),name:"Kook",tags:["tag","tag"],size:"sm" },
        { img: require("../../../media/img-9.jpg"),name:"Kook",tags:["tag","tag"],size:"lg" },
        { img: require("../../../media/img-10.jpg"),name:"Kook",tags:["tag","tag"],size:"sm" }
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
            <h1 className='text-[5vw] whitespace-nowrap text-center mb-7 text-orange-600'>
                <Star size={35} className='inline fill-orange-600 text-orange-500'/> 
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
            <div ref={element} className="gallery hidden sm:flex  flex-col sm:flex-row sm:gap-5 min-h-[962px]">
                {gallery.map((grp,i)=>{
                    return(
                        <m.div style={{...(i!==1 && {y})}} className="flex flex-col gap-8 transition-all duration-500 lg:transition-none">
                            {grp.map((potrait,j)=>{
                                return(
                                    <GalleryPotrait overlay={hovered && hovered.toString()!==[i,j].toString()} onHover={()=>setHover([i,j])} onLeave={()=>setHover(null)} potrait={potrait} />
                                )
                            })}
                        </m.div> 
                    )
                })} 
            </div>

            <div className="gallery flex sm:hidden flex-col sm:flex-row sm:gap-5 min-h-[962px]">
                {gallery.map((grp,i)=>{
                    return(
                        <div className="flex flex-col gap-8 transition-all duration-500 lg:transition-none">
                            {grp.map((potrait,j)=>{
                                return(
                                    <GalleryPotrait overlay={hovered && hovered.toString()!==[i,j].toString()} onHover={()=>setHover([i,j])} onLeave={()=>setHover(null)} potrait={potrait} />
                                )
                            })}
                        </div> 
                    )
                })} 
            </div>
        </section>
    )
}

export default GallerySection
