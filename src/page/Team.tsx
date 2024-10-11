import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import LeaderCard from '../components/LeaderCard'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'

const Team = () => {
    return (
        <ComeUpPageWrapper>
            <div className="flex flex-col sm:flex-row justify-between gap-8 mb-14 max-w-[1500px] m-auto">
                <h1 className='text-4xl font-medium'>Meet Our Experts</h1>
                <p className='sm:w-[65%] text-3xl font-normal'>Our team comprises industry veterans, creative designers, tech gurus and educational experts dedicated to delivering tailor-made solutions. Together, we bring your ideas to life.
                </p>
            </div>

            <div className='m-auto'>
                <div className="flex flex-wrap  gap-5 m-auto max-w-[1500px]">
                    <LeaderCard className='lg:w-[23%] sm:w-[48%]'  name='John doe' designation='CTO' />
                    <LeaderCard className='lg:w-[23%] sm:w-[48%]'  name='John doe' designation='CTO' />
                    <LeaderCard className='lg:w-[23%] sm:w-[48%]'  name='John doe' designation='CTO' />
                    <LeaderCard className='lg:w-[23%] sm:w-[48%]'  name='John doe' designation='CTO' />
                    <LeaderCard className='lg:w-[23%] sm:w-[48%]'  name='John doe' designation='CTO' />
                    <LeaderCard className='lg:w-[23%] sm:w-[48%]'  name='John doe' designation='CTO' />
                    <LeaderCard className='lg:w-[23%] sm:w-[48%]'  name='John doe' designation='CTO' />
                    <LeaderCard className='lg:w-[23%] sm:w-[48%]'  name='John doe' designation='CTO' />
                </div>
            </div>

            <div className='w-[65%] float-right px-5 max-w-[1500px]'>
        <p className='mt-24 text-gray-400 text-2xl'>
          To address every challenge and impulse digital transformation, we also partner with talented agencies and companies, always with client performance and significant impact in purpose. Have you ever a digital project in mind, do not hesitate to contact us and make it real
        </p>

        <div className="mt-10">
          <p>Would you like to collaborate with us ?</p>
          <Link to={"/contact-us"}><Button className='mt-2 text-3xl'>Contact us</Button></Link>
        </div>
      </div>
        </ComeUpPageWrapper>
    )
}

export default Team
