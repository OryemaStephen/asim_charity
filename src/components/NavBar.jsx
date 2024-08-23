import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the previous timeout to prevent multiple triggers
    }

    if (currentScrollY > 30 && currentScrollY < 70) {
      // Hide navbar after scrolling a little down
      setIsVisible(false);
    }

    // Set a delay before making the navbar reappear
    const newTimeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    setTimeoutId(newTimeoutId);
    setIsScrolled(currentScrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    // Ensure the active class is updated on location change
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path
      ? 'text-[#F7CA44]'
      : 'md:text-black text-white';
  };

  return (
    <nav
      className={`fixed top-0 z-10 w-full bg-black text-white px-3 md:px-20 py-6 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'md:bg-white bg-black md:text-black text-white shadow-md'
          : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-white md:text-black w-[10%] cursor-pointer">
          <Link to="/" className="text-3xl font-thin">
            ACO
          </Link>
        </div>
        <div className="md:hidden w-[10%]">
          <button
            onClick={toggleMenu}
            className="text-xl text-white md:text-black focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:w-[50%] mx-5 md:flex md:items-center">
          <ul className="items-center justify-between md:flex md:w-full md:space-x-6">
            <li
              className={`transition-all duration-300 ease-in-out cursor-pointer hover:text-[#F7CA44] ${isActive(
                '/',
              )}`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`transition-all duration-300 ease-in-out cursor-pointer hover:text-[#F7CA44] ${isActive(
                '/services',
              )}`}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className={`transition-all duration-300 ease-in-out cursor-pointer hover:text-[#F7CA44] ${isActive(
                '/gallery',
              )}`}
            >
              <Link to="/gallery">Gallery</Link>
            </li>
            <li
              className={`transition-all duration-300 ease-in-out cursor-pointer hover:text-[#F7CA44] ${isActive(
                '/about',
              )}`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`transition-all duration-300 ease-in-out cursor-pointer hover:text-[#F7CA44] ${isActive(
                '/contact',
              )}`}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block bg-black text-white' : 'hidden'
        } md:hidden bg-black text-white w-full absolute top-full left-0 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col p-4 space-y-4 text-white">
          <li
            onClick={toggleMenu}
            className={`cursor-pointer ${isActive('/')}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={toggleMenu}
            className={`cursor-pointer ${isActive('/services')}`}
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            onClick={toggleMenu}
            className={`cursor-pointer ${isActive('/gallery')}`}
          >
            <Link to="/gallery">Gallery</Link>
          </li>
          <li
            onClick={toggleMenu}
            className={`cursor-pointer ${isActive('/about')}`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={toggleMenu}
            className={`cursor-pointer ${isActive('/contact')}`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
