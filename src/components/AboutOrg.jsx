import React from 'react';

const AboutOrg = () => {
  return (
    <div className="flex flex-col justify-between p-10 text-center w-full h-full space-y-8">
      <div className="w-full md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold capitalize">Who are we?</h3>

          <p className="py-3 text-lg">
            We are Asim Charity Organization. We are a passionate team working
            to improve the lives of needy Ugandans through the provision of
            basic needs such as food, shelter, education, and health services.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold capitalize">Our Mission</h3>
          <p className="text-lg">
            Giveback to the needy community members and empower them to become
            self-reliant.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold capitalize">
            Our Achievements
          </h3>
          <p className="text-lg">
            Over the past decade, Asim Charity Organization has successfully:
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-2xl text-lg space-y-2">
            <li>
              Provided meals to over 1,500 families facing food insecurity.
            </li>
            <li>
              Built and renovated schools in rural areas, benefiting 1,200+
              students.
            </li>
            <li>Conducted Quran studies, reaching over 1,000 people.</li>
            <li>
              Offered scholarships to 20+ children, helping them pursue quality
              education.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold capitalize">Looking Ahead</h3>
          <p className="text-lg">
            We believe that lasting impact is built through dedication and
            community engagement. Our future goals include expanding our reach
            to more remote areas, introducing vocational training for youths,
            and creating partnerships with local organizations to amplify our
            efforts.
          </p>

          <q className="text-lg italic">
            Together, we can make a difference in the lives of those who need it
            the most.
          </q>
        </div>
      </div>
    </div>
  );
};

export default AboutOrg;
