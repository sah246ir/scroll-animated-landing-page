import React from 'react';
import ComeUpPageWrapper from '../../components/ComeUpPageWrapper';

const AudioVideoPage: React.FC = () => {
  return (
    <ComeUpPageWrapper>
      <div className="px-4 py-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Audio & Video Services</h1>
        <p className="text-lg leading-7 mb-4">
          Clekkflix offers professional audio and video services to enhance your content with precision and creativity.
        </p>
        <p className="text-lg leading-7 mb-4">
          Whether it's professional video editing or full-scale production, we ensure your content stands out with stunning visuals and crystal-clear audio.
        </p>
        <p className="text-lg leading-7 mb-4">
          Let us bring your vision to life and leave a lasting impression on your audience.
        </p>
      </div>
    </ComeUpPageWrapper>
  );
};

export default AudioVideoPage;
