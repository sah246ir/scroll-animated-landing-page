import React, { useEffect, useRef, useState } from 'react';
import { m, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import SmartParagraph from '../../smartParagraph';
import Button from '../../buttons/Button';
import { Link } from 'react-router-dom';

const vid = require("../../../media/showreel.mp4");

const VideoScrollSection = () => {
  const containerref = useRef<HTMLDivElement>(null);
  const [Dimensions, setDimensions] = useState<{ height: number, width: number }>({
    height: 0,
    width: 0
  });
  const [currentwidth, setCurrentwidth] = useState<number>(0);
  const minWidth = 255;
  const minHeight = 150;

  const { scrollYProgress } = useScroll({
    target: containerref,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const current = containerref.current;
      if (current) {
        setDimensions({
          width: current.clientWidth,
          height: current.clientHeight,
        });
      }
    };

    updateDimensions(); // Initial dimension set
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const width = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [Dimensions.width, Dimensions.width / 2, minWidth],
  );

  const height = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [window.screen.height - 325, window.screen.height / 2, minHeight],
  );

  useMotionValueEvent(width, "change", (latest) => {
    setCurrentwidth(latest);
  });

  return (
    <>
      <section className="bg-white p-5 pb-24">
        <div ref={containerref} className="relative min-h-[2000px] h-[2000px] hidden sm:flex items-end">
          <div className="absolute bottom-0 right-0 min-h-[2000px] h-[2000px] flex items-end">
            <m.div style={{ width, height, transition: "400ms" }} className="sticky bottom-10 right-0 z-40">
              <video
                loop
                muted // Ensure muted for autoplay
                className={`w-full h-full transition-all duration-500 ${currentwidth === 255 ? "hover:scale-105" : ""} rounded-2xl object-cover`}
                autoPlay
                playsInline // Added for better compatibility
                src={vid}
                controls
              />
            </m.div>
          </div>
          <div className="max-w-[54vw]">
            <SmartParagraph text={`In a world where creativity and technology are confined within ordinary thought, we dare to envision something beyond the boundaries of the mind and into the world of perfection.`} />
            <Link to={'/why-choose-us'}>
              <Button className='mt-7'>Know Why We are The Best</Button>
            </Link>
          </div>
        </div>

        <div className="sm:hidden min-h-[500px]">
          <div>
            <video
              muted // Ensure muted for autoplay
              loop
              className={`w-full h-[54vh] ${currentwidth === 255 ? "hover:scale-105" : ""} rounded-2xl object-cover`}
              autoPlay
              playsInline // Added for better compatibility
              src={vid}
            />
          </div>
          <div className="w-full mt-24 flex flex-col items-center">
            <SmartParagraph text={`In a world that settles for ordinary, we prefer to break the mould. We're the kind that asks, “Why not?” instead of “Why?”, because we believe perfection happens when you step outside the lines. Let’s dream a little bigger, explore a little further and turn every idea into something extraordinary.`} />
            <Link to={'/why-choose-us'}>
              <Button className='mt-7 text-2xl'>Know Why We are The Best</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoScrollSection;
