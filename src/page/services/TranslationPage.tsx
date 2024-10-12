import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const TranslationPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      {/* First div: Title and Introductory Paragraph */}
      <div className="flex flex-col sm:flex-row justify-between mb-14 gap-3 max-w-[1500px] m-auto">
        <h1 className='text-4xl text-orange-600 font-bold'>Translation Services</h1>
        <p className='sm:w-[65%] text-2xl font-normal'>
          At Clekkflix, we offer top-notch translation services to help you communicate effectively across languages.
        </p>
      </div>

      <hr className='mb-12 border-gray-300' />

      {/* Second div: Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        {/* Accurate and Culturally Appropriate Translations */}
        <p className="text-lg leading-7 mb-4">
          Our team of professional translators is fluent in multiple languages and specializes in various fields, ensuring accurate and culturally appropriate translations. From legal documents to marketing materials, we handle a wide range of content with precision and care.
        </p>

        {/* Maintaining Message Integrity */}
        <p className="text-lg leading-7 mb-4">
          We understand the importance of maintaining the integrity and tone of your message, which is why we focus on producing translations that are not only grammatically correct but also convey the intended meaning accurately.
        </p>

        {/* Technology and Efficiency */}
        <p className="text-lg leading-7 mb-4">
          At Clekkflix, we leverage the latest technology and industry best practices to streamline the translation process, delivering fast and efficient results without compromising quality. Our dedicated project managers oversee each project from start to finish, ensuring deadlines are met and expectations are exceeded.
        </p>

        {/* Flexible Solutions */}
        <p className="text-lg leading-7 mb-4">
          Whether you need one-time translations or ongoing support, we are here to meet your language needs. Our flexible and customizable solutions cater to businesses of all sizes and industries, providing personalized service tailored to your specific requirements.
        </p>

        {/* Call to Action */}
        <p className="text-lg leading-7">
          With Clekkflix's translation services, you can trust that your content will be translated with precision and care, allowing you to connect with your target audience on a global scale. Let us help you break down language barriers and unlock new opportunities for growth and success.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default TranslationPage;
