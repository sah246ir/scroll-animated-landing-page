import React from 'react'
import SmartParagraph from '../../smartParagraph'
import SectionHeading from '../../headings/SectionHeading'
import Button from '../../buttons/Button'

const RecognitionSection = () => {
  return (
    <section className='p-5 py-12 flex justify-around min-h-[500px]'>
      <div className=""></div>

      <div className="flex flex-col gap-3.5 items-start">
        <SectionHeading>Our Recognitions</SectionHeading>
        <SmartParagraph /> 

        <div className="flex gap-12 mt-10">
            <h1 className='text-xl font-medium'>Awwwards <span className='text-gray-600'>x1</span></h1>
            <h1 className='text-xl font-medium'>CSSDAx <span className='text-gray-600'>x1</span></h1>
            <h1 className='text-xl font-medium'>FWAx <span className='text-gray-600'>x1</span></h1>
        </div>

        <Button className='mt-10'>All our distinctions</Button>
      </div>
    </section>
  )
}

export default RecognitionSection
