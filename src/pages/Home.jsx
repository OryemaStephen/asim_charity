import React from 'react';
import Welcome from '../components/Welcome';
import HomeIntro from '../components/HomeIntro';
import HomeVolunteerForm from '../components/HomeVolunteerForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='w-full '>
        <Welcome text="Welcome to Asim Charity Organization" />
        <HomeIntro number={154} />
        <HomeVolunteerForm />
        <Footer />
    </div>
  );
};

export default Home;
