import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ text, image }) => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-[70vh] px-3 bg-fixed bg-center bg-cover md:px-20"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <h1 className="relative text-3xl text-center text-white capitalize md:text-5xl">
        {text}
      </h1>
    </div>
  );
};

// PropTypes validation
Welcome.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Welcome;
