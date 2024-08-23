import React from 'react';
import meal1 from '../assets/meals.jpg'
// import meal2 from '../assets/meals2.jpg'
import meal3 from '../assets/food_supply.jpg'
import qorant from '../assets/qorant.jpg'

const LatestProjects = () => {
    const projects = [
        {
          id: 1,
          src: meal1,
          title: 'Meals for the Needy',
          description: 'Preparing and distributing hot meals to the homeless and those in need of a warm meal.',
          link: '/projects/food-distribution',
        },
        {
          id: 2,
          src: qorant,
          title: 'Quran Studies Program',
          description: 'Offering Quran studies and Islamic education to children and adults in the community.',
          link: '/projects/quran-studies',
        },
        {
          id: 3,
          src: meal3,
          title: 'Food Distribution Program',
          description: 'Providing food to needy families and individuals in Uganda to ensure no one goes hungry.',
          link: '/projects/meals-for-needy',
        },
      ];      

  return (
    <div className="px-5 py-10 bg-gray-100">
      <h2 className="pb-3 text-3xl font-bold text-center">Latest Projects</h2>
      <p className='pb-10 text-lg text-center'>
        Some of our latest projects to the community
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg">
            <div className='w-full relative overflow-hidden h-[300px]'>
                <img src={project.src} alt={project.title} className='object-cover object-center w-full h-full rounded-tl-lg rounded-tr-lg' />
            </div>
            <h3 className="px-3 pt-3 mb-3 text-xl font-semibold">{project.title}</h3>
            <p className="px-3 mb-5 text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;