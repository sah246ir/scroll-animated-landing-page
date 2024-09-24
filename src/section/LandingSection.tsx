import { motion } from 'framer-motion'
import { ArrowRight  } from 'lucide-react'
import React from 'react'

const logo = require("../media/clekk-logo.png")
const LandingSection = () => {
    return (
        <div className='h-[95vh] bg-slate-100 grid place-items-center'>
            <motion.i
                variants={{
                    visible: { y: -170 },
                    hidden: { y: 0 }
                }}
                initial={"hidden"}
                animate={"visible"}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 1,
                    delay: 1
                }}
                className='absolute'
            >

                <img src={logo} width={345} className='opacity- ' alt='clekk logo' />
            </motion.i>
            <article className=' '>

                <motion.h1
                    variants={{
                        visible: { width: "100%" },
                        hidden: { width: "0em" }
                    }}
                    initial={"hidden"}
                    animate={"visible"}
                    className='overflow-hidden whitespace-nowrap text-left text-6xl py-2 bg-orange-400 text-white font-extralight rounded-lg'
                    transition={{
                        type: "spring",
                        stiffness: 75,
                        duration: 2.5,
                        delay: 2
                    }}
                >
                    &nbsp;Beyond The Frame&nbsp;
                </motion.h1>

                <motion.button
                    className='block overflow-hidden px-2 py-1 border rounded-full border-black m-auto mt-5 w-48  '
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 25 }
                    }}
                    initial={"hidden"}
                    animate={"visible"}
                    transition={{
                        type: "spring",
                        stiffness: 75,
                        duration: 2.5,
                        delay: 4
                    }}
                >
                    <button className='whitespace-nowrap transition-all duration-500 w-[9.65rem] -translate-x-9 hover:-translate-x-2'>
                        <i className='inline'>
                            <ArrowRight className='inline' size={25} />
                        </i>
                        &nbsp;Let's Work Together&nbsp;
                        <i className='inline'>
                            <ArrowRight className='inline' size={25} />
                        </i>
                    </button>
                </motion.button>
            </article>

        </div>
    )
}

export default LandingSection
