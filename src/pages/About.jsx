import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import background from '../assets/6.jpg'
import AboutImage from '../components/AboutImage';

const About = () => {
  return (
    <div className="w-full">
      <Welcome text="About the organization" image={background}  />
      <AboutImage />
      <Footer />
    </div>
  );
};

export default About;
