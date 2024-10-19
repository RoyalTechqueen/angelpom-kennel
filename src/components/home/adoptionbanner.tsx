import React from 'react';
import { Link } from 'react-router-dom';

const AdoptionBanner: React.FC = () => {
  return (
    <section className="bg-[url('/bg.jpg')] bg-cover bg-center py-16 text-center">
      <div className=" py-16 px-8">
        <h2 className="text-black text-4xl font-bold mb-4">Find Your Perfect Companion</h2>
        <p className="text-black text-lg mb-6">
          At AngelPom Kennel, we believe every puppy deserves a loving home. Adopt a furry friend today and give them the chance to bring joy and companionship into your life. 
          Our adoption process is simple and transparent, ensuring that your new best friend is well cared for before they meet you.
        </p>
        <p className="text-black text-lg mb-6">
          By adopting, you become part of our community and help us continue to provide love and care for many more puppies. Start your journey today!
        </p>
        <Link to="/adoption" className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition">
          Adopt Now
        </Link>
      </div>
    </section>
  );
};

export default AdoptionBanner;
