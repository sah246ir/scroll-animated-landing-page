import React from 'react'
import SectionHeading from '../../headings/SectionHeading'
import Button from '../../buttons/Button'
import Expertise from '../../Expertise'
import { Link } from 'react-router-dom'
 
const ExpertiseSection = () => {
    return (
        <div className='py-20  bg-slate-10 bg-gray-800  text-white px-10 flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:gap-28 gap-20 justify-around'>
            <div className='md:sticky top-20'>
                <div className="sticky top-10 w-full md:max-w-[180px] flex flex-col gap-3">
                    <SectionHeading className='justify-center md:justify-start [&>p]:text-4xl md:[&>p]:text-sm  '>
                         Our Expertise 
                    </SectionHeading>
                    <p className='text-2xl md:text-sm'>Expertise dedicated to enhancing your success</p>
                    <Link to={"/services"} className='mt-4 font-light text-2xl md:text-sm '>
                        <Button>View all services</Button>
                    </Link>
                </div>
            </div>
            <div className="text-[5xl] md:text-[3.5vw] gap-4 md:gap-3 sm:text-6xl tracking-wider group flex items-center md:items-start flex-col ">
            <div className="text-[5xl] md:text-[3.5vw] gap-4 md:gap-3 sm:text-6xl tracking-wider group flex items-center md:items-start flex-col ">
      <Link to="/services/e-learning"><Expertise>E-learning</Expertise></Link>
      <Link to="/services/illustration"><Expertise>Illustration</Expertise></Link>
      <Link to="/services/animation"><Expertise>Animations</Expertise></Link>
      <Link to="/services/translation"><Expertise>Translation</Expertise></Link>
      <Link to="/services/audio-video"><Expertise>Audio & Video</Expertise></Link>
      <Link to="/services/corporate-presentations"><Expertise>Corporate Presentations</Expertise></Link>
      <Link to="/services/e-publishing"><Expertise>E-Publishing</Expertise></Link>
    </div>
            </div>

        </div>
    )
}

export default ExpertiseSection
