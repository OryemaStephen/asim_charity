import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationPin, MdMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FooterTitle = () => {
  return (
    <div className="grid items-start justify-between w-full grid-cols-1 gap-5 px-3 py-10 md:grid-cols-3 md:px-20">
      <div className="flex flex-col justify-between w-full h-full grid-cols-1 md:col-start-1 md:col-end-3">
        <h2 className="text-2xl capitalize">About Us?</h2>
        <p className="py-5 text-base text-justify">
          We are Asim Charity Organization. We are a passionate team working to
          improve the lives of needy Ugandans through provision of basic needs
          such as food, shelter, education, and health services.
        </p>
        <Link
          to="/about"
          className="text-lg text-start text-[#F7CA44] hover:no-underline underline capitalize transition-shadow duration-300 w-max"
        >
          Read More
        </Link>
      </div>
      <div className="grid-cols-1 w-ful">
        <h2 className="pb-5 text-2xl capitalize">Get Connected</h2>
        <p className="flex items-center gap-5">
          <span className="text-[#F7CA44]">
            <MdLocationPin />
          </span>
          <span>Mbale City, Uganda, East Africa</span>
        </p>
        <p className="flex items-center gap-5 py-3">
          <span className="text-[#F7CA44]">
            <FaPhoneAlt />
          </span>
          <a
            href="tel:+256740212281"
            className="text-[#F7CA44] hover:underline"
          >
            +256740212281
          </a>
        </p>
        <p className="flex items-center gap-5">
          <span className="text-[#F7CA44]">
            <MdMailOutline />
          </span>
          <a
            href="mailto:asimcharityorg@gmail.com"
            className="text-[#F7CA44] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            asimcharityorg@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterTitle;
