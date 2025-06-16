
import React from 'react';
import Image from 'next/image';

const paymentMethods = Array.from({ length: 7 }, (_, i) => `/images/payments/payment-${i + 1}.png`);

const Payments = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:items-start  bg-slate-700/50 rounded-lg p-6 lg:gap-0 gap-4">
      {/* Text section */}
      <div className="w-full lg:w-[25%] text-center">
        <h2 className="text-2xl font-bold text-white">You don't have Crypto?</h2>
        <p className="text-white/80">No problem.</p>
      </div>

      {/* Payment methods section */}
      <div className="w-full lg:w-[55%]">
        <div className="flex flex-wrap justify-center gap-4">
          {paymentMethods.map((method, index) => (
            <div key={index} className=" rounded-lg hover:bg-white/20 transition">
              <Image 
                src={method} 
                alt={`Payment method ${index + 1}`}
                width={80}
                height={50}
                className="object-contain h-12 w-20"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button section */}
      <div className="flex justify-center w-full lg:w-[20%]">
        <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Payments;