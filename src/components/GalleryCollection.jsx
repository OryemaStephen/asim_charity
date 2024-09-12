import React from 'react';
import ModalImage from 'react-modal-image';
import { FaSearch } from 'react-icons/fa';

import meal1 from '../assets/meals.jpg';
import meal2 from '../assets/meals2.jpg';
import meal3 from '../assets/food_supply.jpg';
import qorant from '../assets/qorant.jpg';
import drink from '../assets/drinks.jpg';
import image from '../assets/1.jpg';
import image1 from '../assets/2.jpg';
import image2 from '../assets/3.jpg';
import image3 from '../assets/4.jpg';
import image4 from '../assets/5.jpg';
import image5 from '../assets/6.jpg';
import image6 from '../assets/7.jpg';
import image7 from '../assets/8.jpg';
import image8 from '../assets/9.jpg';
import image9 from '../assets/10.jpg';
import image10 from '../assets/11.jpg';
import image11 from '../assets/12.jpg';
import image12 from '../assets/13.jpg';
import image13 from '../assets/14.jpg';
import image14 from '../assets/15.jpg';
import image15 from '../assets/16.jpg';
import image16 from '../assets/17.jpg';
import image17 from '../assets/18.jpg';
import image18 from '../assets/19.jpg';
import image19 from '../assets/20.jpg';

const GalleryCollection = () => {
  const images = [
    { id: 1, src: meal1, alt: 'Meals for the needy' },
    { id: 2, src: meal2, alt: 'Meals for the needy' },
    { id: 4, src: meal3, alt: 'Meals for the needy' },
    { id: 5, src: qorant, alt: 'Quran studies program'},
    { id: 6, src: drink, alt: 'Meals for the needy' },
    { id: 7, src: image, alt: 'Meals for the needy' },
    { id: 8, src: image1, alt: 'Meals for the needy' },
    { id: 9, src: image2, alt: 'Meals for the needy' },
    { id: 10, src: image3, alt: 'Meals for the needy' },
    { id: 11, src: image4, alt: 'Meals for the needy' },
    { id: 12, src: image5, alt: 'Meals for the needy' },
    { id: 13, src: image6, alt: 'Meals for the needy' },
    { id: 14, src: image, alt: 'Meals for the needy' },
    { id: 15, src: image7, alt: 'Meals for the needy' },
    { id: 16, src: image8, alt: 'Meals for the needy' },
    { id: 17, src: image9, alt: 'Meals for the needy' },
    { id: 18, src: image10, alt: 'Meals for the needy' },
    { id: 19, src: image11, alt: 'Meals for the needy' },
    { id: 20, src: image12, alt: 'Meals for the needy' },
    { id: 21, src: image13, alt: 'Meals for the needy' },
    { id: 22, src: image14, alt: 'Meals for the needy' },
    { id: 23, src: image15, alt: 'Meals for the needy' },
    { id: 24, src: image16, alt: 'Meals for the needy' },
    { id: 25, src: image17, alt: 'Meals for the needy' },
    { id: 26, src: image18, alt: 'Meals for the needy' },
    { id: 27, src: image19, alt: 'Meals for the needy' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 px-3 py-10 md:px-20 md:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative h-[300px] overflow-hidden group"
        >
          <ModalImage
            small={image.src}
            large={image.src}
            alt={image.alt}
            className="object-cover object-center w-full h-full transition-transform duration-300 cursor-pointer group-hover:scale-110 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <FaSearch className="text-3xl text-white" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryCollection;
