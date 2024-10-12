import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const imgg = require("../../media/services/elearning1.gif");
const ELearningPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      {/* First div: Title and Immediate Paragraph */}
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-medium'>E-learning</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>
          With our E-learning services, we break down traditional walls of education. Learning is no longer confined to the four corners of a classroom or the pages of a textbook. We bring knowledge to life, reaching out visually to empower minds wherever they are.
        </p>
      </div>
      
      <hr className='mb-12 border-gray-300' />
      
      {/* Second div: Rest of the content */}
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <p className="text-xl mb-4">
          In a world where knowledge is power, our E-learning services are your gateway to empowerment. We offer a learning experience that transcends traditional boundaries, providing you with tailored E-learning solutions that cater to your unique educational needs.
        </p>
        <p className="text-xl mb-4">
          Access a wealth of knowledge through our intuitive web portal, designed for ease of use and maximum engagement. Our platform is the bridge between you and your aspirations, offering an extensive library of courses across various disciplines.
        </p>
        <p className="text-xl mb-4">
          Embrace the flexibility of learning with our offline access feature. Our courses are meticulously crafted for CD compatibility, ensuring that your pursuit of knowledge is uninterrupted, regardless of internet connectivity.
        </p>
        <p className="text-xl mb-4">
          Enter a credible and structured learning environment with our state-of-the-art Learning Management System (LMS). This sophisticated system is the foundation of our E-learning services, offering a seamless and interactive educational journey. It's not just a tool but a companion on your path to knowledge.
        </p>
        <p className="text-xl mb-4">
          Our E-learning platform is designed to engage your mind, educate you with high-quality content, and empower you to reach your full potential. With 24/7 access from any corner of the globe, your education is now as mobile and flexible as your lifestyle.
        </p>
        <p className="text-xl mb-4">
          Unleash the power of learning and unlock your potential with our E-learning services. The future of education is not a distant dream but an immediate reality. Begin your journey of growth and discovery today.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default ELearningPage;
