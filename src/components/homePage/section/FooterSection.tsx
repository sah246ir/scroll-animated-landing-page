import React from 'react'
import SectionHeading from '../../headings/SectionHeading';
import Button from '../../buttons/Button';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const vid = require("../../../media/showreel.mp4");
const logo = require("../../../media/logo.png")
const WA = require("../../../media/wa.png")
const FooterSection = () => {
  return (
    <>
    <div style={{zIndex:1199}} className="sticky w-full bg-white h-10"></div>
    <section style={{ backgroundColor: "#181717", zIndex: 999 }} className='p-9 py-12 flex justify-between min-h-[450px] text-white gap-16 flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left relative'>
      <div className='flex min-h-full gap-6 flex-col justify-between items-center sm:items-start max-w-[410px]'>
        <div className=''>
          <div className='bg-white p-2 py-4 sm:max-w-[200px]'>
            <img width={162} src={logo} className='rounded-md m-auto' alt="" />
          </div>
          <h2 className='text-2xl  mt-4'>
            Creating marvelous user experience
            for your brand, seamlessly.
          </h2>
        </div>
        <video muted loop controls autoPlay playsInline src={vid} width={262} className='transition duration-300 hover:scale-110 object-contain'></video>
      </div>
      <div className='flex flex-col justify-around items-end  gap-7 w-[50%]'>
        <div className='flex flex-wrap flex-col sm:flex-row  text-white gap-12 sm:gap-24 w-full justify-'>
          <div>
            <SectionHeading className='mb-4 font-semibold [&_p]:text-xl  ' bullet={false}>Quick Links</SectionHeading>
            <ul className='transition duration-300 text-lg space-y-2  hover:text-gray-800'>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/process'}>Our approach</Link>
              </li>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/services'}>Our services</Link>
              </li>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/why-choose-us'}>Why choose us</Link>
              </li>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/contact-us'}>Contact us</Link>
              </li>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/team'}>Meet our team</Link>
              </li>
            </ul>
          </div>

          <div>
            <SectionHeading className='mb-4 font-semibold [&_p]:text-xl ' bullet={false}>Services</SectionHeading>
            <ul className='transition duration-300 text-lg space-y-2  hover:text-gray-800'>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/process'}>E-learning</Link>
              </li>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/services'}>Illustration</Link>
              </li>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/why-choose-us'}>Animations</Link>
              </li>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/contact-us'}>Translation</Link>
              </li>
              <li className='transition duration-300 hover:text-white cursor-pointer'>
                <Link to={'/team'}>Audio & Video</Link>
              </li> 
            </ul>
          </div>
        </div>
        <div className=""></div>
        <div className='flex flex-wrap justify-between flex-col sm:flex-row gap-6 w-full'>
          <div className='space-y-5'>
            <SectionHeading bullet={false}>CONTACT</SectionHeading>
            <p className=''>Eureka Towers C-802, Mindspace, Malad West<br /> Mumbai<br /> 400064</p>
            <Link to={"tel:919920010885"}><Button className='mt-6'>+91 99200 10885</Button></Link>
          </div>

          <div>
            <SectionHeading className='mb-5' bullet={false}>Follow us on</SectionHeading>
            <div className="flex gap-4 flex-wrap  hover:text-gray-800">
              <Link target='_blank' to={"https://www.instagram.com/clekkflix"}>
                <i className='transition duration-300 hover:text-pink-600 cursor-pointer'>
                  <Instagram size={34} />
                </i>
              </Link>
              <Link target='_blank' to={"https://www.linkedin.com/in/clekk-flix-17304245/"}>
                <i className='transition duration-300  hover:text-blue-600 cursor-pointer'>
                  <Linkedin strokeWidth={1.12} size={34} />
                </i>
              </Link>
              <Link to={"https://wa.me/919920010885"}>
                <img src={WA} width={35} alt="text on whatsapp" />
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default FooterSection
