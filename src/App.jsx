import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='font-poppins'>
      <NavBar />
      <div id="home" className="h-screen flex items-center justify-center bg-blue-500 text-white">
        <h1 className="text-4xl">Welcome to Home</h1>
      </div>
      <div id="services" className="h-screen flex items-center justify-center bg-yellow-500 text-white">
        <h1 className="text-4xl">Our Services</h1>
      </div>
      <div id="gallery" className="h-screen flex items-center justify-center bg-yellow-500 text-white">
        <h1 className="text-4xl">Our Gallery</h1>
      </div>
      <div id="about" className="h-screen flex items-center justify-center bg-green-500 text-white">
        <h1 className="text-4xl">About Us</h1>
      </div>
      <div id="contact" className="h-screen flex items-center justify-center bg-red-500 text-white">
        <h1 className="text-4xl">Contact Us</h1>
      </div>
    </div>
  );
}

export default App;
