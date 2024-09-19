import React from 'react'
import Button from '../components/buttons/Button'
import SectionHeading from '../components/headings/SectionHeading'
import Expertise from '../components/Expertise'

const ExpertiseSection = () => {
    return (
        <div style={{ backgroundColor: "#181717" }} className='py-20 px-5 flex flex-col sm:flex-row items-center sm:items-start gap-5 justify-around'>
            <div className='sm:sticky top-20'>
                <div className="sticky top-10 max-w-[180px] flex flex-col gap-3">
                    <SectionHeading bulletClassName='bg-orange-400' className='text-orange-400'>
                         Our Expertise 
                    </SectionHeading>
                    <p className='text-orange-400'>Des compétences au service de votre performance</p>
                    <div className='mt-4 font-light text-sm text-orange-400'>
                        <Button>Toutes nos expertises</Button>
                    </div>
                </div>
            </div>
            <div className="text-6xl tracking-wider group flex flex-col gap-7 sm:gap-0 ">
                <Expertise>E-learning</Expertise>
                <Expertise>Illustration</Expertise>
                <Expertise>Animations</Expertise>
                <Expertise>Translation</Expertise>
                <Expertise>Audio & Video</Expertise>
                <Expertise>Corporate Presentations</Expertise>
                <Expertise>E-Publishing</Expertise>
            </div>

        </div>
    )
}

export default ExpertiseSection
