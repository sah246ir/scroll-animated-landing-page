import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll,  useTransform } from 'framer-motion';
import SmartParagraph from '../components/smartParagraph';

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
    [window.screen.height-225, window.screen.height/2, minHeight],
  );

  useMotionValueEvent(width, "change", (latest) => {
    setCurrentwidth(latest)
  })
  

 
  return (
    <>
      <section className=" bg-white p-5 pb-24">
        <div ref={containerref} className="relative min-h-[2000px] h-[2000px] flex items-end">
          <div className=" absolute bottom-0 right-0 min-h-[2000px] h-[2000px] flex items-end" >
            <motion.div style={{ width, height:height, transition: "400ms" }} className="sticky bottom-10 right-0 z-40  ">
              <video loop className={` w-full h-full ${currentwidth === 255 ? "hover:scale-105" : ""} rounded-2xl  object-cover`} autoPlay src={vid}></video>
            </motion.div>
          </div>
          <div className="max-w-[54vw]">

              <SmartParagraph text={`In a world where the ordinary is often accepted as the norm, we dare to look beyond—to envision what lies outside the conventional boundaries of creativity and technology.`} />

          </div>
        </div>
      </section>

    </>
  )
}

export default VideoScrollSection
