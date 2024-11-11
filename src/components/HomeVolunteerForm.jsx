import React from 'react';
import image from '../assets/6.jpg';

const HomeVolunteerForm = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/international-day-charity-concept-human-600nw-1033233823.jpg')",
      }}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-start h-full px-3 md:px-20 py-10 bg-white bg-opacity-40">
        <div className="relative w-full h-full rounded-t-lg rounded-l-none lg:rounded-t-none lg:rounded-l-lg overflow-hidden">
          <img
            className="object-cover object-center w-full h-full"
            src={image}
            alt="Charity tree"
          />
        </div>
        <div className="w-full h-full rounded-b-lg lg:rounded-b-none rounded-r-none lg:rounded-r-lg bg-white pt-4 p-6 text-start shadow-lg">
          <h3 className="w-full pb-5 text-2xl font-bold capitalize text-start">
            Leave a message
          </h3>
          <form className="w-full h-full space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name..."
                className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message..."
                className="w-full px-4 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <div className="text-right">
              <input
                type="submit"
                value="Send"
                className="px-6 py-2 text-lg font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeVolunteerForm;
