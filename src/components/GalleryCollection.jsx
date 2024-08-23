import React from 'react';
import ModalImage from 'react-modal-image';
import { FaSearch } from 'react-icons/fa';

import meal1 from '../assets/meals.jpg';
import meal2 from '../assets/meals2.jpg';
import meal3 from '../assets/food_supply.jpg';
import qorant from '../assets/qorant.jpg';
import food from '../assets/food_supply.jpg';
import drink from '../assets/drinks.jpg';

const GalleryCollection = () => {
  const images = [
    { id: 1, src: meal1, alt: 'Meals for the needy' },
    { id: 2, src: meal2, alt: 'Meals for the needy' },
    { id: 3, src: food, alt: 'Meals for the needy' },
    { id: 4, src: meal3, alt: 'Meals for the needy' },
    { id: 5, src: qorant, alt: 'Quran studies program' },
    { id: 6, src: drink, alt: 'Meals for the needy' },
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
