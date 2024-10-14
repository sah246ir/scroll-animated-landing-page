import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';
import ProcessCard from '../../components/processPage/Process'; // Import ProcessCard

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

      {/* Second div: ProcessCards for Detailed Content */}
      <div className="px-4 py-8 max-w-4xl mx-auto">

        {/* ProcessCard: Accurate and Culturally Appropriate Translations */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image for Translation
          index="01"
          title="Accurate and Culturally Appropriate Translations"
          description="Our team of professional translators is fluent in multiple languages and specializes in various fields, ensuring accurate and culturally appropriate translations. From legal documents to marketing materials, we handle a wide range of content with precision and care."
        />

        {/* ProcessCard: Maintaining Message Integrity */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image for Maintaining Message Integrity
          index="02"
          title="Maintaining Message Integrity"
          description="We understand the importance of maintaining the integrity and tone of your message, which is why we focus on producing translations that are not only grammatically correct but also convey the intended meaning accurately."
        />

        {/* ProcessCard: Technology and Efficiency */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image for Technology and Efficiency
          index="03"
          title="Technology and Efficiency"
          description="At Clekkflix, we leverage the latest technology and industry best practices to streamline the translation process, delivering fast and efficient results without compromising quality. Our dedicated project managers oversee each project from start to finish, ensuring deadlines are met and expectations are exceeded."
        />

        {/* ProcessCard: Flexible Solutions */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image for Flexible Solutions
          index="04"
          title="Flexible Solutions"
          description="Whether you need one-time translations or ongoing support, we are here to meet your language needs. Our flexible and customizable solutions cater to businesses of all sizes and industries, providing personalized service tailored to your specific requirements."
        />

        {/* ProcessCard: Call to Action */}
        <ProcessCard
          img="delivery.jpg" // Replace with actual image for Call to Action
          index="05"
          title="Call to Action"
          description="With Clekkflix's translation services, you can trust that your content will be translated with precision and care, allowing you to connect with your target audience on a global scale. Let us help you break down language barriers and unlock new opportunities for growth and success."
        />
      </div>
    </ComeUpPageWrapper>
  );
};

export default TranslationPage;
