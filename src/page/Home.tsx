import React from 'react'
import LandingSection from '../components/homePage/section/LandingSection'
import VideoScrollSection from '../components/homePage/section/VideoScrollSection'
import ExpertiseSection from '../components/homePage/section/ExpertiseSection'
import GallerySection from '../components/homePage/section/GallerySection'
import ApprochSection from '../components/homePage/section/ApprochSection'
import InsideSection from '../components/homePage/section/InsideSection'
import FooterSection from '../components/homePage/section/FooterSection'
import { HoverProvider } from '../ContextProviders/HoverWrapperProvider'
import { m } from 'framer-motion'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <m.main
            variants={{
                initial: { opacity: 0 },
                visible:{opacity:1},
                exit: { opacity: 0 }
            }}
            className='bg-white'
            initial="initial"
            exit={"exit"}
            animate={"visible"}
            transition={{
                duration: "1"
            }}
        >

            <HoverProvider>
                <Navbar />
                <LandingSection />
                <VideoScrollSection />
                <ExpertiseSection />
                <ApprochSection />
                <GallerySection />
                <InsideSection />
                <FooterSection />
            </HoverProvider>
        </m.main>
    )
}

export default Home
