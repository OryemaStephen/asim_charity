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
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-start h-full px-3 md:px-20 py-10 bg-[#F7CA44] bg-opacity-40">
        <div className="relative w-full h-full overflow-hidden">
          <img
            className="object-cover object-center w-full h-full rounded-lg"
            src={image}
            alt="Charity tree"
          />
        </div>
        <div className="w-full h-full rounded-lg bg-[#F7CA44] bg-opacity-40 pt-4 p-4 text-start">
          <h3 className="w-full pb-5 text-2xl font-bold text-white capitalize text-start">
            Volunteer with us
          </h3>
          <form className="w-full h-full">
            <input
              type="text"
              placeholder="Enter your name ..."
              className="w-full px-3 py-1 italic text-white placeholder-white bg-transparent border-2 border-white outline-none"
            />
            <input
              type="email"
              placeholder="Enter your email ..."
              className="w-full px-3 py-1 my-5 italic text-white placeholder-white bg-transparent border-2 border-white outline-none"
            />
            <textarea
              name="message"
              placeholder="Write your message ..."
              className="w-full px-3 py-1 italic placeholder-white bg-transparent border-2 border-white "
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="px-5 py-1 text-lg bg-white border-2 border-white outline-none"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeVolunteerForm;
