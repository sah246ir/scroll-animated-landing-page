import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const EPublishingPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      {/* First div: Title and Introductory Paragraph */}
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-bold'>E-Publishing</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>
          In E-Publishing, we transform the narrative by making stories accessible everywhere in a digital realm.
        </p>
      </div>

      <hr className='mb-12 border-gray-300' />

      {/* Second div: Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        {/* E-Publishing Transformation */}
        <p className="text-lg leading-7 mb-4">
          Books are no longer bound by covers but are liberated to exist in a digital realm. We take readers outside of traditional reading into a world where stories are limitless and accessible everywhere.
        </p>

        {/* Revolutionising Written Work */}
        <p className="text-lg leading-7 mb-4">
          Revolutionise your written work with our E-Publishing services, designed to take your publishing presence to the next level. Step into the future where your books are not just bound by covers but are accessible at the click of a button.
        </p>

        {/* Seamless Transformation */}
        <p className="text-lg leading-7 mb-4">
          Experience the seamless transformation of print books into eBooks. Our expert services ensure your content is not just digitised but optimised for the best e-reading experience. Tap into the global market and connect with readers across continents.
        </p>

        {/* Breaking Down Barriers */}
        <p className="text-lg leading-7 mb-4">
          Our E-Publishing solutions make your work available and accessible to a worldwide audience, breaking down geographical barriers.
        </p>

        {/* Expanding Reach */}
        <p className="text-lg leading-7 mb-4">
          Leverage the potential of digital platforms to expand your reach. With E-Publishing, your work gains unlimited exposure, providing more opportunities for discovery, sharing, and discussion among readers.
        </p>

        {/* Call to Action */}
        <p className="text-lg leading-7">
          Embrace the power and possibilities of E-Publishing with us. Whether you’re a seasoned author or a new voice, we’re here to support you.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default EPublishingPage;
