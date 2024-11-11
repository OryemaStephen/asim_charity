import React from 'react';

const services = [
  {
    title: 'Food Distribution',
    description:
      'Providing meals and food supplies to those in need within the community.',
    icon: '🍲', // You can replace these with icons or images
  },
  {
    title: 'Medical Assistance',
    description:
      'Offering free medical check-ups and medicine to underserved communities.',
    icon: '🩺',
  },
  {
    title: 'Educational Support',
    description:
      'Helping children with school supplies, scholarships, and tutoring.',
    icon: '📚',
  },
  {
    title: 'Emergency Relief',
    description:
      'Providing immediate relief and resources during emergencies and disasters.',
    icon: '🚑',
  },
];

const ServicesList = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We offer a range of services to support those in need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
