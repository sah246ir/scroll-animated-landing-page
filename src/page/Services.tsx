import React from 'react';
import ComeUpPageWrapper from '../components/ComeUpPageWrapper';
import Service from '../components/servicesPage/Service';
import Button from '../components/buttons/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <ComeUpPageWrapper>
      <div className="flex flex-col sm:flex-row justify-around max-w-[1500px] m-auto">
        <h1 className='text-4xl font-medium'>Our Services</h1>
        <p className='sm:w-[65%] text-3xl font-normal'>
        We specialize in turning your digital vision into reality. Our team of experts works closely with you to develop tailored solutions that perfectly suit your unique needs. From initial brainstorming to final implementation, we're here to support you every step of the way.
        </p>
      </div>

      <hr className='my-12 border-gray-300' />

      <Service
        href="/services/e-learning"
        img='elearning1.gif'
        title='E-Learning'
        description="We’re redefining the way people learn with our E-learning services. Forget about the limits of traditional classrooms and textbooks—learning should be dynamic, engaging, and accessible from anywhere. Our immersive content brings subjects to life, empowering learners wherever they are and making education a powerful, interactive experience."
      />

      <hr className='my-12 border-gray-300' />

      <Service
        href="/services/illustration"
        img='illustration1.gif'
        title='Illustration'
        description="Visual storytelling is our forte. At Clekk, our illustrators create stunning visuals that don’t just look good, but also connect with your audience. Whether it’s for marketing, educational content, or digital media, our illustrations go beyond aesthetics to bring your ideas to life in a way that captivates and communicates."
      />

      <hr className='my-12 border-gray-300' />

      <Service
        href="/services/animation"
        img='animation.gif'
        title='Animations'
        description="Why settle for static when you can make it move? Our animations take your ideas and transform them into dynamic, engaging visuals. From explaining complex concepts to telling compelling stories, our animations turn heads, grab attention, and make sure your message sticks."
      />

      <hr className='my-12 border-gray-300' />

      <Service
        href="/services/creative-design"
        img='creativedesign1.gif'
        title='Creative Design'
        description="Design is more than just making things look good—it’s about crafting a seamless experience. We design with precision, ensuring your content flows effortlessly and captures your audience’s attention. Whether it’s a book layout or a digital platform, we focus on delivering beauty and functionality in perfect balance."
      />

      <hr className='my-12 border-gray-300' />

      <Service
        href="/services/translation"
        img='translation03.gif'
        title='Translation'
        description="Language shouldn’t be a barrier to success, and with ClekkFlix’s expert translation services, it won’t be. Whether you’re a business looking to go global or need important documents translated, we ensure your message is perfectly understood across any language and culture."
      />

      <hr className='my-12 border-gray-300' />

      <Service
        href="/services/audio-video"
        img='audiovideo1.gif'
        title='Audio & Video'
        description="We bring your ideas to life through top-tier audio and video production. Our team knows how to take your vision and turn it into a polished product that resonates. Using cutting-edge equipment and creative flair, we produce content that not only stands out but also leaves a lasting impact on your audience."
      />

      <hr className='my-12 border-gray-300' />

      <Service
        href="/services/corporate-presentations"
        img='corporatepresentation1.gif'
        title='Corporate Presentations'
        description="Presentations shouldn’t just convey information—they should inspire. At ClekkFlix, we design corporate presentations that do just that. We take your key messages and package them into compelling, visually engaging presentations that leave a strong, lasting impression on your audience."
      />

      <hr className='my-12 border-gray-300' />

      <Service
        href="/services/e-publishing"
        img='epublishing1.gif'
        title='E-Publishing'
        description="Step into the future of storytelling with our E-publishing services. Books no longer need to be limited by physical pages. We bring stories to the digital realm, creating interactive, accessible experiences that readers can engage with anytime, anywhere. Your stories become limitless."
      />
      <hr className='mt-12 border-gray-300' />

      <div className='w-[65%] float-right px-5 max-w-[1500px]'>
        <p className='mt-24 text-orange-300 text-2xl'>
          At ClekkFlix, we don’t just deliver services; we partner with you to drive real digital transformation. Working with talented agencies and companies, we’re focused on making an impact where it matters most, your success.
        </p>

        <div className="mt-10">
          <p>Have a digital project in mind?</p>
          <Link to="/contact-us"><Button className='mt-2 text-3xl'>Contact us</Button></Link>
        </div>
      </div>
    </ComeUpPageWrapper>
  );
};

export default Services;
