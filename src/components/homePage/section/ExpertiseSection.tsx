import React from 'react'
import SectionHeading from '../../headings/SectionHeading'
import Button from '../../buttons/Button'
import Expertise from '../../Expertise'
import { Link } from 'react-router-dom'
 
const ExpertiseSection = () => {
    return (
        <div className='py-20  bg-slate-100 px-10 flex flex-col md:flex-row items-center md:items-start gap-28 justify-around'>
            <div className='md:sticky top-20'>
                <div className="sticky top-10 max-w-[180px] flex flex-col gap-3">
                    <SectionHeading className=''>
                         Our Expertise 
                    </SectionHeading>
                    <p className=''>Des compétences au service de votre performance</p>
                    <Link to={"/services"} className='mt-4 font-light text-sm '>
                        <Button>View all services</Button>
                    </Link>
                </div>
            </div>
            <div className="text-3xl sm:text-6xl tracking-wider group flex items-center md:items-start flex-col ">
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
