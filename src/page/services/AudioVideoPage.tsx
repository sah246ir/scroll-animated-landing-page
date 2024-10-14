import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';
import ProcessCard from '../../components/processPage/Process';

const AudioVideoPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      {/* First div: Title and Immediate Paragraph */}
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-bold'>Audio & Video Services</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>
          Clekkflix offers professional audio and video services to enhance your content with precision and creativity. We bring your vision to life and leave a lasting impression on your audience.
        </p>
      </div>

      <hr className='mb-12 border-gray-300' />

      {/* Second div: Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto">
        {/* ProcessCard: Service Overview */}
        <ProcessCard
          img="delivery.jpg" // Using delivery.jpg for all images
          index="01"
          title="Service Overview"
          description="Clekkflix offers comprehensive audio and video services to elevate your content and engage your audience effectively. Whether you need professional video editing or full-scale production, we have the expertise to bring your vision to life."
        />
        
        {/* ProcessCard: Team Expertise */}
        <ProcessCard
          img="delivery.jpg" // Using delivery.jpg for all images
          index="02"
          title="Team Expertise"
          description="Our team of experienced professionals ensures that every aspect of your audio and video projects is handled with precision and creativity. From scriptwriting to final editing, we pay attention to every detail to ensure the highest quality results."
        />

        {/* ProcessCard: Equipment & Techniques */}
        <ProcessCard
          img="delivery.jpg" // Using delivery.jpg for all images
          index="03"
          title="Equipment & Techniques"
          description="With Clekkflix, you can trust that your audio and video content will stand out in today's competitive landscape. We utilize state-of-the-art equipment and industry-leading techniques to deliver stunning visuals and crystal-clear audio that leaves a lasting impression."
        />

        {/* ProcessCard: Conclusion */}
        <ProcessCard
          img="delivery.jpg" // Using delivery.jpg for all images
          index="04"
          title="Conclusion"
          description="Experience the difference with Clekkflix's audio and video services. Let us help you tell your story in a compelling and memorable way, allowing you to connect with your audience on a deeper level and achieve your objectives. With Clekkflix, your audio and video projects are in good hands."
        />
      </div>
    </ComeUpPageWrapper>
  );
};

export default AudioVideoPage;
