import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';
import ProcessCard from '../../components/processPage/Process'; // Import ProcessCard

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

      {/* Second div: ProcessCards for Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto">

        {/* ProcessCard: E-Publishing Transformation */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="01"
          title="E-Publishing Transformation"
          description="Books are no longer bound by covers but are liberated to exist in a digital realm. We take readers outside of traditional reading into a world where stories are limitless and accessible everywhere."
        />

        {/* ProcessCard: Revolutionising Written Work */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="02"
          title="Revolutionising Written Work"
          description="Revolutionise your written work with our E-Publishing services, designed to take your publishing presence to the next level. Step into the future where your books are not just bound by covers but are accessible at the click of a button."
        />

        {/* ProcessCard: Seamless Transformation */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="03"
          title="Seamless Transformation"
          description="Experience the seamless transformation of print books into eBooks. Our expert services ensure your content is not just digitised but optimised for the best e-reading experience. Tap into the global market and connect with readers across continents."
        />

        {/* ProcessCard: Breaking Down Barriers */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="04"
          title="Breaking Down Barriers"
          description="Our E-Publishing solutions make your work available and accessible to a worldwide audience, breaking down geographical barriers."
        />

        {/* ProcessCard: Expanding Reach */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="05"
          title="Expanding Reach"
          description="Leverage the potential of digital platforms to expand your reach. With E-Publishing, your work gains unlimited exposure, providing more opportunities for discovery, sharing, and discussion among readers."
        />

        {/* ProcessCard: Call to Action */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="06"
          title="Call to Action"
          description="Embrace the power and possibilities of E-Publishing with us. Whether you’re a seasoned author or a new voice, we’re here to support you."
        />
      </div>
    </ComeUpPageWrapper>
  );
};

export default EPublishingPage;
