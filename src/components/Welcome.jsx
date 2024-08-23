import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ text }) => {
  return (
    <div
      className="flex items-center justify-center w-full h-screen px-3 bg-fixed bg-center bg-cover md:px-20"
      style={{
        backgroundImage: "url('https://www.shutterstock.com/image-photo/international-day-charity-concept-human-600nw-1033233823.jpg')",
      }}
    >
      <h1 className="text-3xl text-center text-black capitalize md:text-5xl">{text}</h1>
    </div>
  );
};

// PropTypes validation
Welcome.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Welcome;
