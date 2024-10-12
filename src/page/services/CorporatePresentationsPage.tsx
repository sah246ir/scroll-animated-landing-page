import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const CorporatePresentationsPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      {/* First div: Title and Immediate Paragraph */}
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-bold'>Corporate Presentations</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>
          At Clekkflix, we transform your ideas into visually compelling narratives that engage and inspire your audience.
        </p>
      </div>

      <hr className='mb-12 border-gray-300' />

      {/* Second div: Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        {/* Service Overview Section */}
        <p className="text-lg leading-7 mb-4">
          Our expert team creates presentations that leave a lasting impression, showcasing your brand’s identity and values. We believe that a powerful presentation does more than just convey information—it inspires, engages, and leaves a lasting impression.
        </p>

        {/* Importance of Communication Section */}
        <p className="text-lg leading-7 mb-4">
          In the world of business, effective communication is key, and a powerful corporate presentation can make all the difference. Our services are designed to help your company shine in every meeting, pitch, and conference.
        </p>

        {/* Specialization Section */}
        <p className="text-lg leading-7 mb-4">
          We specialize in creating corporate presentations that are not only visually engaging but also strategically structured to convey your message clearly and impactfully. Whether you're presenting to stakeholders, clients, or your own team, we ensure your presentation captures the essence of your corporate identity and objectives.
        </p>

        {/* Branding Consistency Section */}
        <p className="text-lg leading-7 mb-4">
          Moreover, we ensure that your corporate presentation aligns with your brand's ethos and aesthetic. Consistency in branding is vital, and our presentations reinforce your brand identity in every slide, chart, and graphic.
        </p>

        {/* Conclusion Section */}
        <p className="text-lg leading-7 mb-4">
          In today's fast-paced business environment, staying ahead means being able to communicate complex ideas in simple, engaging ways. Let us help you create a corporate presentation that not only informs and persuades but also leaves a lasting impression on your audience.
        </p>

        {/* Call to Action Section */}
        <p className="text-lg leading-7">
          Contact us to begin crafting your standout corporate presentation that reflects the professionalism, values, and vision of your business.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default CorporatePresentationsPage;
