import React from 'react'
import ComeUpPageWrapper from '../components/ComeUpPageWrapper'
import ProcessCard from '../components/processPage/Process'
import { Link } from 'react-router-dom'
import Button from '../components/buttons/Button'

const Process = () => {
    return (
        <ComeUpPageWrapper >
            <div className="flex flex-col sm:flex-row justify-around mb-14 max-w-[1500px] m-auto">
                <h1 className='text-4xl font-medium'>Our Process</h1>
                <p className='sm:w-[65%] text-3xl font-normal'>Our team of around 20 passionate experts designs personalised digital solutions. From advice to design to technical implementation, we make your entire digital journey.
                </p>
            </div>

            <ProcessCard
                img='vision.png'
                index='01'
                title='Understanding Your Vision'
                description="We start by getting to know you and your goals. In this first step, we have a friendly chat to learn about what you need, what you dream of and what challenges you're facing. Think of it as us putting ourselves in your shoes, so we can see your world through your eyes. "
            />

            <hr className='my-8 border-gray-300' />

            <ProcessCard
                img='planning.jpg'
                index='02'
                title='Planning the Journey'
                description="Once we understand your vision, we start planning how to make it a reality. This step is all about mapping out a clear plan. We think about the best ways to achieve your goals, considering every little detail. It's like drawing a treasure map that leads us to the success of your project."
            />

            <hr className='my-8 border-gray-300' />

            <ProcessCard
                img='creating.jpg'
                index='03'
                title='Creating and Improving'
                description="Once we understand your vision, we start planning how to make it a reality. This step is all about mapping out a clear plan. We think about the best ways to achieve your goals, considering every little detail. It's like drawing a treasure map that leads us to the success of your project."
            />

            <hr className='my-8 border-gray-300' />

            <ProcessCard
                img='delivery.jpg'
                index='04'
                title='Delivery and Support'
                description="The final step is all about bringing the project to you. We make sure everything is polished, working perfectly and ready to go. But our journey doesn't end here. We stay by your side, offering support and help whenever you need it, ensuring that what we've created together continues to thrive."
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

export default Process
