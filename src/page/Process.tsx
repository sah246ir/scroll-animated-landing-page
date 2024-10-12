import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import ProcessCard from '../components/processPage/Process'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'

const Process = () => {
    return (
        <ComeUpPageWrapper >
            <div className="flex flex-col sm:flex-row justify-around mb-14 max-w-[1500px] m-auto">
                <h1 className='text-4xl text-orange-600 font-medium'>Our Process</h1>
                <p className='sm:w-[65%] text-2xl font-normal'>Our Approach
                    Our team of dedicated experts specialises in creating tailored digital solutions that perfectly
                    fit your unique vision. From the initial idea to the final execution, we’re with you every step of
                    the way, making sure your digital journey is smooth and successful. Here's a look at how we
                    bring your ideas to life!
                </p>
            </div>

            <ProcessCard
                img='vision.png'
                index='01'
                title='Discovering Your Vision'
                description="We kick things off by diving deep into your goals, dreams, and challenges. It’s more than just a meeting; it’s a conversation where we step into your shoes to understand your vision inside and out."
            />



            <ProcessCard
                img='planning.jpg'
                index='02'
                title='Charting the Path'
                description="Once we get to know your world, we strategize. We map out the most efficient and effective path to bring your vision to life, down to the smallest detail. Think of it as your custom-built treasure map, leading straight to success."
            />



            <ProcessCard
                img='creating.jpg'
                index='03'
                title='Bringing Ideas to Life'
                description="This is where creativity takes center stage. We build, refine, and perfect your project with precision, ensuring each step aligns with your goals. Every idea becomes tangible, turning your vision into a polished reality."
            />



            <ProcessCard
                img='delivery.jpg'
                index='04'
                title='Launching and Beyond'
                description="When your project is ready to launch, we ensure it’s flawless and ready to perform. But we don’t stop there—our support continues long after delivery, making sure your digital presence evolves and thrives."
            />


            <div className='w-[65%] float-right px-5 max-w-[1500px]'>
                <p className='mt-24 text-orange-300 text-2xl'>
                    We don’t just solve challenges; we drive digital transformation. By partnering with top
                    agencies and companies, we stay focused on making a meaningful impact
                </p>

                <div className="mt-10">
                    <p>Have a digital project in mind?</p>
                    <Link to={"/contact-us"}><Button className='mt-2 text-3xl'>Contact us</Button></Link>
                </div>
            </div>
        </ComeUpPageWrapper>
    )
}

export default Process
