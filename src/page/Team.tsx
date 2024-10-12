import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import LeaderCard from '../components/LeaderCard'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'

const Team = () => {
  return (
    <ComeUpPageWrapper>
      <div className="flex flex-col sm:flex-row justify-between gap-8 mb-14 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-medium'>Meet Our Experts</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>Our team is a powerhouse of industry veterans, creative designers, tech innovators and
education specialists, all working in harmony to craft customised solutions that bring your
vision to life. Every project we tackle is a blend of expertise, creativity and a passion for
excellence
        </p>
      </div>

      <div className='m-auto'>
        <div className="flex flex-wrap  gap-5 m-auto max-w-[1500px]">
          <LeaderCard className='lg:w-[23%] sm:w-[48%]' name='John doe' designation='CTO' />
          <LeaderCard className='lg:w-[23%] sm:w-[48%]' name='John doe' designation='CTO' />
          <LeaderCard className='lg:w-[23%] sm:w-[48%]' name='John doe' designation='CTO' />
          <LeaderCard className='lg:w-[23%] sm:w-[48%]' name='John doe' designation='CTO' />
          <LeaderCard className='lg:w-[23%] sm:w-[48%]' name='John doe' designation='CTO' />
          <LeaderCard className='lg:w-[23%] sm:w-[48%]' name='John doe' designation='CTO' />
          <LeaderCard className='lg:w-[23%] sm:w-[48%]' name='John doe' designation='CTO' />
          <LeaderCard className='lg:w-[23%] sm:w-[48%]' name='John doe' designation='CTO' />
        </div>
      </div>
      <hr className='mt-12 border-gray-300' />
      <div className='w-[65%] float-right px-5 max-w-[1500px]'>
        <p className='mt-24 text-orange-300 text-2xl'>
          To ensure that every challenge is met with precision, we collaborate with leading agencies
          and companies, always with a focus on maximising client success and making a meaningful
          impact.
        </p>

        <div className="mt-10">
          <p>Have a digital project in mind?</p>
          <Link to={"/contact-us"}><Button className='mt-2 text-3xl'>Contact us</Button></Link>
        </div>
      </div>
    </ComeUpPageWrapper>
  )
}

export default Team
