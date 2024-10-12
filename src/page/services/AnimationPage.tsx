import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const AnimationPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Animations</h1>
        <p className="text-lg leading-7 mb-4">
          Discover the magic of animation with Clekkflix's expert 2D & 3D services. We bring your ideas to life with vibrant visuals.
        </p>
        <p className="text-lg leading-7 mb-4">
          Our process ensures every detail shines, delivering crisp, clear animations that leave a lasting impression.
        </p>
        <p className="text-lg leading-7 mb-4">
          Elevate your storytelling with our high-quality animations and stand out in the digital landscape.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default AnimationPage;
