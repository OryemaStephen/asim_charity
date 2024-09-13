import React from 'react';
import Welcome from '../components/Welcome';
import HomeIntro from '../components/HomeIntro';
import HomeVolunteerForm from '../components/HomeVolunteerForm';
import Footer from '../components/Footer';
import LatestProjects from '../components/LatestProjects';
import background from '../assets/6.jpg'

const Home = () => {
  return (
    <div className="w-full ">
      <Welcome text="Welcome to Asim Charity Organization" image={background} />
      <HomeIntro number={1500} />
      <LatestProjects />
      <HomeVolunteerForm />
      <Footer />
    </div>
  );
};

export default Home;
