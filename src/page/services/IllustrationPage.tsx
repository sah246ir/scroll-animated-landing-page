import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const IllustrationPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      {/* First div: Title and Introductory Paragraph */}
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-bold'>Illustrations</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>
          Clekk’s team of talented illustrators creates stunning visuals that elevate your content and engage your audience.
        </p>
      </div>

      <hr className='mb-12 border-gray-300' />

      {/* Second div: Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        {/* Captivating Visuals */}
        <p className="text-lg leading-7 mb-4">
          From print to digital, Clekk's team creates stunning visuals that elevate your content and engage your audience. Whether it's for marketing materials, educational resources, or digital platforms, we bring visual brilliance to life.
        </p>

        {/* Transforming Ideas into Images */}
        <p className="text-lg leading-7 mb-4">
          Clekkflix is your go-to for top-notch illustrations that bring your content to life! Our talented artists specialize in creating stunning visuals that grab attention and keep your audience engaged.
        </p>

        {/* Enhancing Various Platforms */}
        <p className="text-lg leading-7 mb-4">
          Whether you're looking to spruce up your marketing materials, enhance educational resources, or elevate your digital platforms, we've got you covered. From traditional print to the digital realm, we excel at transforming your ideas into captivating images that leave a lasting impression.
        </p>

        {/* Detail and Creativity */}
        <p className="text-lg leading-7 mb-4">
          With a keen eye for detail and a passion for creativity, we ensure that every illustration we produce is not only visually striking but also perfectly aligned with your brand identity.
        </p>

        {/* Partnering for Success */}
        <p className="text-lg leading-7 mb-4">
          By partnering with Clekk, you can trust that your content will stand out from the crowd and make a memorable impact on your target audience. Let us work our magic and take your content to new heights with our exceptional illustration services.
        </p>

        {/* Call to Action */}
        <p className="text-lg leading-7">
          Whether you need a single illustration or a complete visual overhaul, we are here to bring your vision to life and help you achieve your goals in the digital marketing world.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default IllustrationPage;
