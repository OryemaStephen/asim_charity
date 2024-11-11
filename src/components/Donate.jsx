import React from 'react';

const Donate = () => {
  return (
    <div className="flex flex-col items-center w-full px-2 py-10 md:px-6 bg-amber-300">
      <div className="w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-center text-gray-800">
          Support Our Mission
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Your generous donation helps us continue our work to make a difference
          in our community. Thank you for your support!
        </p>
        {/* Bank Account and Mobile Money Information */}
        <div className="mt-10 text-gray-700">
          <h2 className="text-2xl font-semibold text-center">
            You can deposit to the following accounts.
          </h2>

          <div className="grid justify-around w-full grid-cols-1 gap-4 my-10 md:grid-cols-2">
            {/* Bank Account Details */}
            <div className="grid-cols-1 pb-5 text-center md:pb-0">
              <h3 className="text-lg font-bold">Bank Account</h3>
              <p>Bank Name: Centenary Bank Uganda</p>
              <p>Account Name: Asim Charity Organization</p>
              <p className="font-semibold">Account Number: 123456789</p>
              <p>SWIFT Code: CERBUGKA</p>
            </div>

            {/* Mobile Money Details */}
            <div className="grid-cols-1 text-center">
              <h3 className="text-lg font-bold">Mobile Money</h3>
              <p>Service Provider: AIRTEL</p>
              <p className="font-semibold">
                Mobile Money Number: +256740212281
              </p>
              <p>Reference: Asim Charity Organization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
