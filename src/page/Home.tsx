import React from 'react'
import LandingSection from '../components/homePage/section/LandingSection'
import VideoScrollSection from '../components/homePage/section/VideoScrollSection'
import ExpertiseSection from '../components/homePage/section/ExpertiseSection'
import GallerySection from '../components/homePage/section/GallerySection'
import ApprochSection from '../components/homePage/section/ApprochSection'
import InsideSection from '../components/homePage/section/InsideSection'
import FooterSection from '../components/homePage/section/FooterSection'
import { HoverProvider } from '../ContextProviders/HoverWrapperProvider'
import { motion } from 'framer-motion'

const Home = () => {
    return ( 
            <motion.main 
                variants={{
                    initial:{opacity:1},
                    exit:{opacity:0}
                }}
                className='bg-white'
                initial="initial"
                exit={"exit"}
                transition={{
                    duration:"1"
                }}
            >

            <HoverProvider>
                <LandingSection />
                <VideoScrollSection />
                <ExpertiseSection />
                <ApprochSection />
                <GallerySection />
                <InsideSection />
                <FooterSection />
            </HoverProvider>
            </motion.main>
    )
}

export default Home
