import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';


const TranslationPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Translation Services</h1>
        <p className="text-lg leading-7 mb-4">
          At Clekkflix, we offer top-notch translation services to help you communicate effectively across languages.
        </p>
        <p className="text-lg leading-7 mb-4">
          Our team of professional translators delivers accurate and culturally appropriate translations for various content types.
        </p>
        <p className="text-lg leading-7 mb-4">
          Break language barriers and unlock new growth opportunities with our reliable translation services.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default TranslationPage;
