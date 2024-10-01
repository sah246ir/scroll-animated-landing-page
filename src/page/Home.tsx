import React from 'react'
import LandingSection from '../components/homePage/section/LandingSection'
import VideoScrollSection from '../components/homePage/section/VideoScrollSection'
import ExpertiseSection from '../components/homePage/section/ExpertiseSection'
import GallerySection from '../components/homePage/section/GallerySection'
import ApprochSection from '../components/homePage/section/ApprochSection'
import InsideSection from '../components/homePage/section/InsideSection'
import FooterSection from '../components/homePage/section/FooterSection'
import { HoverProvider } from '../ContextProviders/HoverWrapperProvider'

const Home = () => {
    return (
        <HoverProvider>
            <LandingSection />
            <VideoScrollSection />
            <ExpertiseSection />
            <ApprochSection />
            <GallerySection />
            <InsideSection />
            <FooterSection />
        </HoverProvider>
    )
}

export default Home
