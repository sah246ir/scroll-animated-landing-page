import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import LeaderCard from '../components/LeaderCard'

const Team = () => {
    return (
        <ComeUpPageWrapper>
            <div className="flex justify-between gap-8 mb-14">
                <h1 className='text-4xl font-medium'>Meet Our Experts</h1>
                <p className='w-[65%] text-3xl font-normal'>Our team comprises industry veterans, creative designers, tech gurus and educational experts dedicated to delivering tailor-made solutions. Together, we bring your ideas to life.
                </p>
            </div>

            <div className='m-auto'>
                <div className="flex flex-wrap  gap-5 m-auto">
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
        </ComeUpPageWrapper>
    )
}

export default Team
