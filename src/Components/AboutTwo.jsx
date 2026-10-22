import React from 'react';

const AboutTwo = () => {
  return (
    <div className="about-two pb-20  flex flex-col items-center">
      
      <div className="video-container">
        <iframe
          width="600"
          height="300"
          src="https://www.youtube.com/embed/KgB8FFUXh0U"
          title="JAFUTA FOUNDATION - We Had A Dream"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutTwo;
