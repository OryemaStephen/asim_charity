import React from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { IoIosBulb } from 'react-icons/io';
import { IoPeopleSharp } from 'react-icons/io5';

const Service = () => {
  return (
    <div className="items-start justify-between w-full px-5 gap-10 py-10 md:flex">
      <div className="flex flex-col items-center justify-between gap-3">
        <div className="text-[#F7CA44] text-6xl">
          <IoIosBulb />
        </div>
        <div>
          <h2 className="text-xl text-center text-black">Our Mission</h2>
          <p className="py-4 text-base text-center text-gray-500">
            Giveback to the needy community members and empower them to become
            self-reliant.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3">
        <div className="text-[#F7CA44] text-6xl">
          <IoPeopleSharp />
        </div>
        <div>
          <h2 className="text-xl text-center text-black">We need Volunteers</h2>
          <p className="py-4 text-base text-center text-gray-500">
            Join our team, and together, we shall make a difference in the lives
            of others through giving.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3">
        <div className="text-[#F7CA44] text-6xl">
          <BiSolidDonateHeart />
        </div>
        <div>
          <h2 className="text-xl text-center text-black">We need Sponsors</h2>
          <p className="py-4 text-base text-center text-gray-500">
            We need more sponsors to support our activities and we make a great
            empowered community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
