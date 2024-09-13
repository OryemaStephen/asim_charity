import React, { useState, useEffect } from 'react';
import qorant from '../assets/qorant.jpg';
import watersupply from '../assets/6.jpg';
import image1 from '../assets/2.jpg';
import image2 from '../assets/16.jpg';

const LatestProjects = () => {
  const projects = [
    {
      id: 1,
      src: image2,
      title: 'Meals for the Needy',
      description:
        'Preparing and distributing hot meals to the homeless and those in need of a warm meal.',
      link: '/projects/food-distribution',
    },
    {
      id: 2,
      src: qorant,
      title: 'Quran Studies Program',
      description:
        'Offering Quran studies and Islamic education to children and adults in the community.',
      link: '/projects/quran-studies',
    },
    {
      id: 3,
      src: image1,
      title: 'Food Distribution Program',
      description:
        'Providing food to needy families and individuals in Uganda to ensure no one goes hungry.',
      link: '/projects/meals-for-needy',
    },
    {
      id: 4,
      src: watersupply,
      title: 'Water supply program',
      description:
        'Supplied water to the rural community of Mbale through digging a well.',
      link: '/projects/water-supply',
    },
  ];

  // Duplicating projects to create infinite scrolling
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Move every 5 seconds

    return () => clearInterval(intervalId);
  }, [projects.length]);

  const projectSlideStyle = {
    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
  };

  return (
    <div className="relative overflow-hidden px-5 py-10 bg-gray-100">
      <h2 className="pb-3 text-3xl font-bold text-center">Latest Projects</h2>
      <p className="pb-10 text-lg text-center">
        Some of our latest projects for the community
      </p>
      <div className="relative flex overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={projectSlideStyle}
        >
          {/* Display 3 projects at a time */}
          {projects.concat(projects).map((project, index) => (
            <div
              key={index}
              className="min-w-[33%] sm:w-[50%] lg:min-w-[33.33%] mx-auto px-2 md:px-4"
            >
              <div className="bg-white rounded-lg shadow-lg">
                <div className="w-full relative overflow-hidden h-[300px]">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="object-cover object-center w-full h-full rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <h3 className="px-3 pt-3 mb-3 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="px-3 mb-5 text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
