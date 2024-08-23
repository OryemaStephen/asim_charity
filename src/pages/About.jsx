import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="w-full">
      <Welcome text="About the organization" />
      <Footer />
    </div>
  );
};

export default About;
