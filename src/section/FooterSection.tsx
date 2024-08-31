import React from 'react'
import Button from '../components/buttons/Button';
import SectionHeading from '../components/headings/SectionHeading';

const vid = require("../../src/media/vid.mp4");

const FooterSection = () => {
  return (
    <section style={{backgroundColor:"#181717"}} className='p-9 py-12 flex justify-between min-h-[450px] text-white gap-16'>
      <div className='flex flex-col justify-between max-w-[430px]'>
        <div className=''>
            <h1>LOGO</h1>
            <h2 className='text-3xl'>
                Wokine designs digital solutions and experiences that combine creativity, technology and ethical engagement.
            </h2>
        </div>
        <video loop autoPlay src={vid} width={155}></video>
      </div>
      <div className='flex flex-col justify-around items-end  gap-7 w-[50%]'>
        <div className='flex   text-white gap-6 w-full justify-between'>
            <div>
              <SectionHeading className='mb-7' bullet={false}>READ MORE</SectionHeading>
              <ul className='transition duration-300 [&_li]:text-2xl  hover:text-gray-800'>
                <li className='min-h-12 transition duration-300 hover:text-white cursor-pointer'>Our approach</li>
                <li className='min-h-12 transition duration-300 hover:text-white cursor-pointer'>Our expertise</li>
                <li className='min-h-12 transition duration-300 hover:text-white cursor-pointer'>CSR approach</li>
                <li className='min-h-12 transition duration-300 hover:text-white cursor-pointer'>Apply</li>
              </ul>
            </div>

            <div>
              <SectionHeading className='mb-7' bullet={false}>GO FURTHER</SectionHeading> 
              <Button>blaa</Button>
            </div>
            
            <div>
              <SectionHeading className='mb-7' bullet={false}>MANAGE YOUR PROJECT</SectionHeading> 
              <Button>blaa</Button>
            </div>
        </div>
        <div className=""></div>
        <div className='flex justify-between w-full'>
            <div className='space-y-5'>
              <SectionHeading bullet={false}>CONTACT</SectionHeading> 
              <p>16 place cormontaigne<br/>59000 Lille
              France<br/></p>
              <Button>+91 XXX-XXX-XXXX</Button>
            </div>

            <div>
              <SectionHeading className='mb-7' bullet={false}>MANAGE YOUR PROJECT</SectionHeading> 
              <div className="flex justify-between hover:text-gray-800">
                <i className='transition duration-300 hover:text-white cursor-pointer'>ico</i>
                <i className='transition duration-300  hover:text-white cursor-pointer'>ico</i>
                <i className='transition duration-300 hover:text-white cursor-pointer'>ico</i>
                <i className='transition duration-300 hover:text-white cursor-pointer'>ico</i>
                <i className='transition duration-300 hover:text-white cursor-pointer'>ico</i>
              </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default FooterSection
