
import React from 'react';

const Testimonials:React.FC = () => {
  return (
    <section className="p-16  text-center">
      <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="border border-yellow-300 rounded-lg p-4 w-full ">
          <p className="text-gray-600">"We found the perfect puppy for our family! The process was easy and stress-free!"</p>
          <p className="font-semibold mt-2">- Sarah L.</p>
        </div>
        <div className="border border-yellow-300  rounded-lg p-4 w-full ">
          <p className="text-gray-600">"Adopting our puppy was one of the best decisions we ever made!"</p>
          <p className="font-semibold mt-2">- Mark D.</p>
        </div>
        <div className="border border-yellow-300  rounded-lg p-4 w-full ">
          <p className="text-gray-600">"Excellent service and support throughout the adoption process!"</p>
          <p className="font-semibold mt-2">- Emily R.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
