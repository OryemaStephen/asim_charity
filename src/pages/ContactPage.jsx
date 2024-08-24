import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="w-full">
      <Welcome text="Get In Touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
