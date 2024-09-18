import React from 'react'
import Button from '../components/buttons/Button';
import SectionHeading from '../components/headings/SectionHeading';

const vid = require("../../src/media/vid.mp4");
const logo = require("../media/logo-2.png")
const FooterSection = () => {
  return (
    <section style={{backgroundColor:"#181717"}} className='p-9 py-12 flex justify-between min-h-[450px] text-white gap-16 flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left'>
      <div className='flex min-h-full gap-6 flex-col justify-between items-center sm:items-start max-w-[410px]'>
        <div className=''>
          <img width={162} src={logo} className='rounded-md' alt="" />
            <h2 className='text-2xl  mt-5'>
            Creating marvelous user experience
            for your brand, seamlessly.
            </h2>
        </div>
        <video loop autoPlay src={vid} width={175} className='transition duration-300 hover:scale-110'></video>
      </div>
      <div className='flex flex-col justify-around items-end  gap-7 w-[50%]'>
        <div className='flex flex-wrap flex-col sm:flex-row  text-white gap-12 sm:gap-6 w-full justify-between'>
            <div>
              <SectionHeading className='mb-7' bullet={false}>READ MORE</SectionHeading>
              <ul className='transition duration-300 text-lg space-y-2  hover:text-gray-800'>
                <li className='transition duration-300 hover:text-white cursor-pointer'>Our approach</li>
                <li className='transition duration-300 hover:text-white cursor-pointer'>Our expertise</li>
                <li className='transition duration-300 hover:text-white cursor-pointer'>CSR approach</li>
                <li className='transition duration-300 hover:text-white cursor-pointer'>Apply</li>
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
        <div className='flex flex-wrap justify-between flex-col sm:flex-row gap-6 w-full'>
            <div className='space-y-5'>
              <SectionHeading bullet={false}>CONTACT</SectionHeading> 
              <p>16 place cormontaigne<br/>59000 Lille
              France<br/></p>
              <Button>+91 XXX-XXX-XXXX</Button>
            </div>

            <div>
              <SectionHeading className='mb-7' bullet={false}>MANAGE YOUR PROJECT</SectionHeading> 
              <div className="flex gap-2 flex-wrap justify-between hover:text-gray-800">
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
