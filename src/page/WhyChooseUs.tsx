
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
        title='Our Skills Sets Us Apart'
        description='With our E-learning services, we break down traditional walls of education. Learning is not confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.'
      />

      <hr className='my-12 border-gray-300' />

      <Feature
        img='CreativityToNextLevel.gif'
        title='We Take Creativity to Next Level'
        description="From print to digital, Clekk's team of talented illustrators creates stunning visuals that elevate your content and engage your audience. Whether it's for marketing materials, educational resources, or digital platforms, we bring visual brilliance to life. "
      />

      <hr className='my-12 border-gray-300' />

      <Feature
      img='strategy01.gif'
        title='Strategy is King for us'
        description="'With our E-learning services, we break down traditional walls of education. Learning is not confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.'"
      />

      <hr className='my-12 border-gray-300' />

      <Feature
      img='technical skill.gif'
        title='Technical Experts'
        description="Our expertise extends to meticulously crafting and laying out book pages for a seamless reading experience. We understand the importance of a well-designed layout in enhancing the reader's experience and conveying your message effectively. "
      />
      <hr className='my-12 border-gray-300' />

      <Feature
        img='teamwork.gif'
        title='Teamwork Spirit'
        description="At Clekkflix, we offer top-notch translation services to help you communicate effectively across languages. Whether you're a business expanding globally or an individual needing documents translated, we've got you covered."
      />
      <hr className='my-12 border-gray-300' />

      <Feature
        img='commitment02.gif'
        title='Our Commitment To You'
        description="Clekkflix offers professional audio and video services to enhance your content. We bring your vision to life with precision and creativity. With state-of-the-art equipment and industry expertise, we ensure your content stands out and leaves a lasting impression."
      />
       
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

export default WhyChooseUs
