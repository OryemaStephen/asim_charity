import React from 'react';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import HomeVolunteerForm from '../components/HomeVolunteerForm';
import GalleryCollection from '../components/GalleryCollection';

const Gallery = () => {
  return (
    <div className="w-full">
      <Welcome text="Our gallery" />
      <GalleryCollection />
      <HomeVolunteerForm />
      <Footer />
    </div>
  );
};

export default Gallery;
