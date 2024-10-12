import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const CorporatePresentationsPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Corporate Presentations</h1>
        <p className="text-lg leading-7 mb-4">
          At Clekkflix, we transform your ideas into visually compelling narratives that engage and inspire your audience.
        </p>
        <p className="text-lg leading-7 mb-4">
          Our expert team creates presentations that leave a lasting impression, showcasing your brand’s identity and values.
        </p>
        <p className="text-lg leading-7 mb-4">
          Let us help you communicate effectively through powerful presentations.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default CorporatePresentationsPage;
