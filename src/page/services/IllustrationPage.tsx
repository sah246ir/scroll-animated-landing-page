import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const IllustrationPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Illustrations</h1>
        <p className="text-lg leading-7 mb-4">
          Clekk’s team of talented illustrators creates stunning visuals that elevate your content and engage your audience.
        </p>
        <p className="text-lg leading-7 mb-4">
          From traditional print to digital platforms, we transform your ideas into captivating visuals that leave a lasting impression.
        </p>
        <p className="text-lg leading-7 mb-4">
          Let us bring your vision to life with exceptional illustrations that align with your brand’s identity.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default IllustrationPage;
