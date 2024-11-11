import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import HomeVolunteerForm from '../components/HomeVolunteerForm';
import GalleryCollection from '../components/GalleryCollection';
import background from '../assets/background.jpg';
import Donate from '../components/Donate';

const Gallery = () => {
  return (
    <div className="w-full">
      <Welcome text="Our gallery" image={background} />
      <GalleryCollection />
      <Donate />
      <HomeVolunteerForm />
      <Footer />
    </div>
  );
};

export default Gallery;
