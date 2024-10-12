
import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import Feature from '../components/FeatureCard'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'

const WhyChooseUs = () => {
  return (
    <ComeUpPageWrapper>
      <div className="flex flex-col sm:flex-row justify-around mb-14 max-w-[1500px] m-auto">
        <h1 className='text-4xl font-medium'>Our Expertise</h1>
        <p className='sm:w-[65%] text-3xl font-normal'>Our team of around 20 passionate experts designs personalised digital solutions. From advice to design to technical implementation, we make your entire digital journey.
        </p>
      </div>

      <hr className='my-12 border-gray-300' />

      <Feature
        img='creativity.gif'
        title='Our Skills Set Us Apart'
        description="Our passion for innovation goes beyond traditional boundaries. With our E-learning solutions, we redefine education, breaking free from the four walls of a classroom. We bring learning to life in a visually engaging way, reaching students and professionals wherever they are, making knowledge more accessible and impactful."
      />

      <hr className='my-12 border-gray-300' />

      <Feature
        img='CreativityToNextLevel.gif'
        title='We Take Creativity to the Next Level'
        description="Our talented illustrators take creativity to the next level, transforming your ideas into captivating visuals. Whether for marketing, education, or digital platforms, our designs aren’t just stunning—they’re designed to engage and resonate with your audience, bringing your content to life in unforgettable ways."
      />

      <hr className='my-12 border-gray-300' />

      <Feature
        img='strategy01.gif'
        title='Strategy is King for Us'
        description="At Clekk, strategy is at the heart of everything we do. We don’t just create; we plan with precision. Every project is mapped out to ensure the best possible outcomes, blending creativity with strategic thinking to achieve your vision."
      />

      <hr className='my-12 border-gray-300' />

      <Feature
        img='technical skill.gif'
        title='Technical Experts'
        description="Our expertise in design and layout ensures that every page we craft is a seamless experience for the reader. Whether in print or digital format, we understand the power of design in conveying messages clearly and effectively, enhancing every aspect of the user’s journey."
      />

      <hr className='my-12 border-gray-300' />

      <Feature
        img='teamwork.gif'
        title='Teamwork Spirit'
        description="Collaboration is key at ClekkFlix. With our top-tier translation services, we break down language barriers and ensure your message reaches a global audience. Whether you’re expanding your business or need vital documents translated, we work as a team to ensure flawless communication across cultures."
      />

      <hr className='my-12 border-gray-300' />

      <Feature
        img='commitment02.gif'
        title='Our Commitment To You'
        description="We are dedicated to bringing your vision to life through professional audio and video services. With the latest technology and industry expertise, we deliver content that not only stands out but also leaves a lasting impact. From concept to completion, your success is our priority."
      />

<hr className='mt-12 border-gray-300' />

      <div className='w-[65%] float-right px-5 max-w-[1500px]'>
        <p className='mt-24 text-orange-300 text-2xl'>
        We believe that digital transformation requires more than just expertise, it requires
collaboration and innovation. That’s why we partner with forward-thinking agencies and
companies to make sure your project is a success.
        </p>

        <div className="mt-10">
          <p>Have a digital project in mind?</p>
          <Link to={"/contact-us"}><Button className='mt-2 text-3xl'>Contact us</Button></Link>
        </div>
      </div>
    </ComeUpPageWrapper>
  )
}

export default WhyChooseUs
