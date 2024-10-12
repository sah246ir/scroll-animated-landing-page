import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const AnimationPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      {/* First div: Title and Immediate Paragraph */}
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-bold'>Animations</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>
          Discover the magic of animation with Clekkflix's expert 2D & 3D services. We bring your ideas to life with vibrant visuals that captivate and engage your audience. Our process ensures every detail shines, delivering crisp, clear animations that leave a lasting impression. Elevate your storytelling and stand out in the digital landscape with Clekkflix.
        </p>
      </div>

      <hr className='mb-12 border-gray-300' />

      {/* Second div: Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        {/* Animation Experience Section */}
        <p className="text-lg leading-7 mb-4">
          Dive into the world of animation with Clekkflix's top-notch 2D & 3D animation services. We're experts at making your content come alive, making it more engaging and impactful for your audience.
        </p>

        {/* Team & Process Section */}
        <p className="text-lg leading-7 mb-4">
          Our team of animators is here to turn your ideas into reality. We're dedicated to bringing your vision to life, using our skills to create dynamic animations that will blow your mind. With Clekkflix, the possibilities are endless! We take pride in our meticulous process, where every detail of your concept is carefully considered and brought to life in vibrant animation.
        </p>

        {/* Technology & Quality Section */}
        <p className="text-lg leading-7 mb-4">
          Experience the difference with our high-quality animation production. We use the latest technology and techniques to create animations that are clear, smooth, and captivating. Our animations are more than just moving pictures – they're designed to grab your audience's attention and keep them hooked until the very end.
        </p>

        {/* Conclusion Section */}
        <p className="text-lg leading-7 mb-4">
          Elevate your storytelling with animations that leave a lasting impression. Let us help you make a statement in the digital world and stand out from the crowd. With our expertise, your content will shine like never before, leaving your audience wanting more.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default AnimationPage;
