import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';


const ELearningPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">E-Learning</h1>
        <p className="text-lg leading-7 mb-4">
          We break down traditional walls of education and bring knowledge to life, empowering minds wherever they are.
        </p>
        <p className="text-lg leading-7 mb-4">
          Access a wealth of knowledge through our intuitive web portal, designed for ease of use and maximum engagement.
        </p>
        <p className="text-lg leading-7 mb-4">
          Our state-of-the-art Learning Management System offers a seamless and interactive educational journey, available 24/7 globally.
        </p>
        <p className="text-lg leading-7 mb-4">
          Unleash the power of learning with our tailored E-learning solutions, accessible anytime, anywhere.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default ELearningPage;
