import React from 'react'
import SectionHeading from '../../headings/SectionHeading'
import Button from '../../buttons/Button'
import Expertise from '../../Expertise'
import { Link } from 'react-router-dom'
 
const ExpertiseSection = () => {
    return (
        <div className='py-20  bg-slate-100 px-10 flex flex-col text-center md:text-left md:flex-row items-center md:items-start md:gap-28 gap-20 justify-around'>
            <div className='md:sticky top-20'>
                <div className="sticky top-10 w-full md:max-w-[180px] flex flex-col gap-3">
                    <SectionHeading className='justify-center md:justify-start [&>p]:text-4xl md:[&>p]:text-sm  '>
                         Our Expertise 
                    </SectionHeading>
                    <p className='text-2xl md:text-sm'>Des compétences au service de votre performance</p>
                    <Link to={"/services"} className='mt-4 font-light text-2xl md:text-sm '>
                        <Button>View all services</Button>
                    </Link>
                </div>
            </div>
            <div className="text-5xl md:text-3xl gap-4 md:gap-0 sm:text-6xl tracking-wider group flex items-center md:items-start flex-col ">
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
