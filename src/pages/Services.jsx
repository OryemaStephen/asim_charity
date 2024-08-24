import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import HomeVolunteerForm from '../components/HomeVolunteerForm'
import Service from '../components/Service';

const Services = () => {
  return (
    <div className="w-full">
      <Welcome text="Our services" />
      <Service />
      <HomeVolunteerForm />
      <Footer />
    </div>
  );
};

export default Services;
