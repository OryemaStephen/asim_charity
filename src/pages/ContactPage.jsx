import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Donate from '../components/Donate';

const ContactPage = () => {
  return (
    <div className="w-full">
      <Welcome text="Get In Touch" />
      <Contact />
      <Donate />
      <Footer />
    </div>
  );
};

export default ContactPage;
