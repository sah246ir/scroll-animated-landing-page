import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import Service from '../components/servicesPage/Service'

const Services = () => {
  return (
    <ComeUpPageWrapper >
      <div className="flex justify-around">
        <h1 className='text-4xl font-medium'>Our Services</h1>
        <p className='w-[65%] text-3xl font-normal'>Our team of around 20 passionate experts designs personalised digital solutions. From advice to design to technical implementation, we make your entire digital journey.
        </p>
      </div>

      <hr className='my-12 border-gray-300' />

      <Service
        title='E-Learning'
        description='With our E-learning services, we break down traditional walls of education. Learning is not confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.'
      />

      <hr className='my-12 border-gray-300' />

      <Service
        title='E-Learning'
        description='With our E-learning services, we break down traditional walls of education. Learning is not confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.'
      />

      <hr className='my-12 border-gray-300' />

      <Service
        title='E-Learning'
        description='With our E-learning services, we break down traditional walls of education. Learning is not confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.'
      />

      <hr className='my-12 border-gray-300' />

      <Service
        title='E-Learning'
        description='With our E-learning services, we break down traditional walls of education. Learning is not confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.'
      />



    </ComeUpPageWrapper>
  )
}

export default Services
