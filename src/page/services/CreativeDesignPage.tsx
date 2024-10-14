import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';
import ProcessCard from '../../components/processPage/Process'; // Import ProcessCard

const CreativeDesignPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      {/* First div: Title and Immediate Paragraph */}
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-bold'>Creative Design</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>
          We craft and lay out book pages for a seamless reading experience, transforming challenges into opportunities with creativity at the helm.
        </p>
      </div>

      <hr className='mb-12 border-gray-300' />

      {/* Second div: ProcessCards for Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto">

        {/* ProcessCard: Service Overview */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="01"
          title="Service Overview"
          description="Our expertise extends to meticulously crafting and laying out book pages for a seamless reading experience. We understand the importance of a well-designed layout in enhancing the reader's experience and conveying your message effectively."
        />

        {/* ProcessCard: Transforming Challenges */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="02"
          title="Transforming Challenges"
          description="We believe in transforming challenges into opportunities with creativity at the helm. Our Creative Design services are dedicated to catapulting your brand to the forefront of innovation and visual appeal."
        />

        {/* ProcessCard: Custom Graphic Design */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="03"
          title="Custom Graphic Design"
          description="No more blending into the background with generic designs. We deliver unparalleled creativity and exquisite craftsmanship that portrays your brand's essence. Expect nothing less than tailor-made graphics that don't just catch the eye but capture the heart."
        />

        {/* ProcessCard: Brand Strategy and Identity */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="04"
          title="Brand Strategy and Identity"
          description="Consistency is king in branding, and we are the kingmakers. From the drawing board to digital dominance, our strategic branding ensures that your business stands out with a coherent and captivating identity. Let's make your brand not just seen but sought after."
        />

        {/* ProcessCard: Social Media Design */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="05"
          title="Social Media Design"
          description="Make every post count with our cutting-edge social media design. Gone are the days of limited impact—welcome to the era of innovative visual storytelling that grabs attention, garners engagement, and drives action."
        />

        {/* ProcessCard: Competitive Market Positioning */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="06"
          title="Competitive Market Positioning"
          description="In a world where being overlooked is not an option, our designs are your secret weapon. We equip you with standout visuals and strategic branding that carve out a unique space for your brand in the busiest of marketplaces."
        />

        {/* ProcessCard: Call to Action */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image if needed
          index="07"
          title="Call to Action"
          description="Unlock your brand's true potential with Clekk. Contact us today and let's turn your visions into visuals that speak volumes."
        />
      </div>
    </ComeUpPageWrapper>
  );
};

export default CreativeDesignPage;
