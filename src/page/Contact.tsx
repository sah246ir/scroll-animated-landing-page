import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import { Link } from 'react-router-dom'

const map = require("../media/gmap.png")
const Contact = () => {
  return (
    <ComeUpPageWrapper >
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3">
        <h1 className='text-4xl font-medium'>Lets Work Together</h1>
        <p className='sm:w-[65%] text-3xl font-normal'>Our team of around 20 passionate experts designs personalised digital solutions. From advice to design to technical implementation, we make your entire digital journey.
        </p>
      </div>
      <div className='flex flex-col items-'>
        <h2 className='text-4xl'>Contact us</h2>

        <div className="flex flex-col sm:flex-row gap-14 mt-6 justify-between">
          <form action="#" className="space-y-4 max-w-[800px] flex-grow">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input className='border w-full border-gray-500 px-3 py-2' type="email" id="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input className='border w-full border-gray-500 px-3 py-2' type="text" id="subject" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea className='border w-full border-gray-500 px-3 py-2' id="message" rows={6} placeholder="Leave a comment..."></textarea>
            </div>
            <button className='px-2 py-1 border rounded-full border-black  '>
              Send Message
            </button>
          </form>

          <div className="sm:w-[40%] space-y-2">
            <div className="">
              <h2 className='font-medium text-gray-800'>Address:</h2>
              <p className='mb-2'>Eureka Towers C-802, Chincholi Bunder Rd, Mindspace, Malad West, Mumbai - 400064, Maharashtra, India.</p>
              <Link
                className='text-blue-800 hover:text-blue-950 transition duration-500 underline'
                target='_blank'
                to="https://maps.app.goo.gl/kND2y4Hm3SYvJHMZA">
                <img width={20} className='inline' src={map} alt="google map" />
                View in map
              </Link>
            </div>

            <div className="">
              <h2 className='font-medium text-gray-800'>Phone:</h2>
              <Link
                className='text-blue-800 hover:text-blue-950 transition duration-500 underline'
                to={"tel:+919920010885"}>
                  +91 99200 10885
               </Link>
              <p></p>
            </div>

            <div className="">
              <h2 className='font-medium text-gray-800'>E-mail:</h2>
              <Link
                className='text-blue-800 hover:text-blue-950 transition duration-500 underline'
                to={"mailto:info@clekk.co.in"}>
                  info@clekk.co.in
               </Link>
            </div>
          </div>

        </div>

      </div>
    </ComeUpPageWrapper>
  )
}

export default Contact
