import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import background from '../assets/6.jpg';
import AboutImage from '../components/AboutImage';
import HomeVolunteerForm from '../components/HomeVolunteerForm';
import Donate from '../components/Donate';

const About = () => {
  return (
    <div className="w-full">
      <Welcome text="About the organization" image={background} />
      <AboutImage />
      <HomeVolunteerForm />
      <Donate />
      <Footer />
    </div>
  );
};

export default About;
