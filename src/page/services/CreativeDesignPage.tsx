import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const CreativeDesignPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Creative Design</h1>
        <p className="text-lg leading-7 mb-4">
          We craft and lay out book pages for a seamless reading experience, transforming challenges into opportunities with creativity at the helm.
        </p>
        <p className="text-lg leading-7 mb-4">
          Custom Graphic Design, Brand Strategy and Identity, and Social Media Design to elevate your brand.
        </p>
        <p className="text-lg leading-7 mb-4">
          Let’s unlock your brand’s true potential with standout visuals and strategic branding.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default CreativeDesignPage;
