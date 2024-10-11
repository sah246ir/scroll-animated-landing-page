import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import Service from '../components/servicesPage/Service'
import Button from '../components/buttons/Button'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <ComeUpPageWrapper >
      <div className="flex flex-col sm:flex-row justify-around max-w-[1500px] m-auto">
        <h1 className='text-4xl font-medium'>Our Services</h1>
        <p className='sm:w-[65%] text-3xl font-normal'>Our team of around 20 passionate experts designs personalised digital solutions. From advice to design to technical implementation, we make your entire digital journey.
        </p>
      </div>

      <hr className='my-12 border-gray-300' />

      <Service
        img='elearning1.gif'
        title='E-Learning'
        description='With our E-learning services, we break down traditional walls of education. Learning is not confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.'
      />

      <hr className='my-12 border-gray-300' />

      <Service
        img='illustration1.gif'
        title='Illustration'
        description="From print to digital, Clekk's team of talented illustrators creates stunning visuals that elevate your content and engage your audience. Whether it's for marketing materials, educational resources, or digital platforms, we bring visual brilliance to life. "
      />

      <hr className='my-12 border-gray-300' />

      <Service
        img='animation.gif'
        title='Animations'
        description="'With our E-learning services, we break down traditional walls of education. Learning is not confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.'"
      />

      <hr className='my-12 border-gray-300' />

      <Service
        img='creativedesign1.gif'
        title='Creative Design'
        description="Our expertise extends to meticulously crafting and laying out book pages for a seamless reading experience. We understand the importance of a well-designed layout in enhancing the reader's experience and conveying your message effectively. "
      />
      <hr className='my-12 border-gray-300' />

      <Service
        img='translation03.gif'
        title='Translation'
        description="At Clekkflix, we offer top-notch translation services to help you communicate effectively across languages. Whether you're a business expanding globally or an individual needing documents translated, we've got you covered."
      />
      <hr className='my-12 border-gray-300' />

      <Service
        img='audiovideo1.gif'
        title='Audio & Video'
        description="Clekkflix offers professional audio and video services to enhance your content. We bring your vision to life with precision and creativity. With state-of-the-art equipment and industry expertise, we ensure your content stands out and leaves a lasting impression."
      />
      <hr className='my-12 border-gray-300' />

      <Service
        img='corporatepresentation1.gif'
        title='Corporate Presentations'
        description="At ClekkFlix, our approach to corporate presentations transcends the traditional. We believe that a powerful presentation does more than just convey information—it inspires, engages, and leaves a lasting impression. Ensuring that your brand is showcased in a light that's not only seen but felt."
      />
      <hr className='my-12 border-gray-300' />

      <Service
        img='epublishing1.gif'
        title='E-Publishing'
        description="In E-Publishing, we transform the narrative. Books are no longer bound by covers but are liberated to exist in a digital realm. We take readers outside of traditional reading, into a world where stories are limitless and accessible everywhere. "
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

export default Services
