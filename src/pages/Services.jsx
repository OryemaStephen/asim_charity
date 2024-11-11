import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import HomeVolunteerForm from '../components/HomeVolunteerForm';
import Service from '../components/Service';
import background from '../assets/4.jpg';
import Donate from '../components/Donate';
import ServicesList from '../components/ServicesList';

const Services = () => {
  return (
    <div className="w-full">
      <Welcome text="Our services" image={background} />
      <Service />
      <ServicesList />
      <HomeVolunteerForm />
      <Donate />
      <Footer />
    </div>
  );
};

export default Services;
