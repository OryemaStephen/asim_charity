import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSelectedSection(id);
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    const sections = ['home', 'services', 'gallery', 'about', 'contact'];
    let currentSection = '';

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
    });

    setSelectedSection(currentSection);
  };

  useEffect(() => {
    // Set initial selected section based on scroll position
    handleScroll();
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white font-poppins p-4 fixed w-full z-10 top-0 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-black w-[10%] text-xl font-bold cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          ACO
        </div>
        <div className="md:hidden w-[10%]">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:w-[50%] mx-5 md:flex md:items-center">
          <ul className="md:flex md:w-full font-bold justify-between items-center md:space-x-6">
            {['home', 'services', 'gallery', 'about', 'contact'].map((section) => (
              <li
                key={section}
                className={`cursor-pointer transition-all duration-300 ease-in-out ${
                  selectedSection === section
                    ? 'text-gray-400'
                    : 'text-black hover:text-gray-400'
                }`}
              >
                <div onClick={() => scrollToSection(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white w-full absolute top-full left-0 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {['home', 'services', 'gallery', 'about', 'contact'].map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                selectedSection === section
                  ? 'text-gray-400'
                  : 'text-black hover:text-gray-400'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;