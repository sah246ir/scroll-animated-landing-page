import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import SpecialHoverButton from '../components/SpecialHoverButton';

const vid = require("../../src/media/vid.mp4");


const VideoScrollSection = () => {
  const containerref = useRef<HTMLDivElement>(null);
  const [Dimensions, setDimensions] = useState<{ height: number, width: number }>({
    height: 0,
    width: 0
  });
  const [currentwidth, setCurrentwidth] = useState<number>(0)
  const minWidth = 255
  const minHeight = 150

  const { scrollYProgress } = useScroll({
    target: containerref,
  });

  useEffect(() => {
    const current = containerref.current
    if (current) {
      setDimensions({
        width: current.clientWidth,
        height: current.clientHeight,
      });
    }
    window.addEventListener("resize", () => {
      if (current) {
        setDimensions({
          width: current.clientWidth,
          height: current.clientHeight,
        });
      }
    })
  }, []);

  const width = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [Dimensions.width, Dimensions.width / 2, minWidth],
  );

  const height = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [Dimensions.height - 1200, 500, minHeight],
  );

  useMotionValueEvent(width, "change", (latest) => {
    setCurrentwidth(latest)
  })
  return (
    <>
      <section className=" bg-white p-8 pb-16">
        <div ref={containerref} className="relative min-h-[2000px] h-[2000px] flex items-end">
          <div className=" absolute bottom-0 right-0 min-h-[2000px] h-[2000px] flex items-end" >
            <motion.div style={{ width, height, transition: "200ms" }} className="sticky bottom-10 right-0">
              <video loop className={`transition duration-200 w-full h-full ${currentwidth === 255 ? "hover:scale-105" : ""} rounded-2xl  object-cover`} autoPlay src={vid}></video>
            </motion.div>
          </div>
          <div className="max-w-[54vw]">
            <h1 style={{wordSpacing:"8px"}} className='text-5xl text-black'>
            Wokine conçoit des solutions et expériences digitales qui allient <SpecialHoverButton>créativité</SpecialHoverButton> , <SpecialHoverButton>technologie</SpecialHoverButton>  et engagement <SpecialHoverButton>éthique</SpecialHoverButton>  . 
              </h1>
          </div>
        </div>
      </section>

      <div className="min-h-[1200px]"></div>
    </>
  )
}

export default VideoScrollSection
