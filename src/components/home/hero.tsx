import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-cover bg-center min-h-screen text-center flex flex-col justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <h1 className="text-5xl font-bold text-black">Find Your Perfect Puppy Companion</h1>
      <p className="mt-4 text-xl text-black ">Discover puppies that match your lifestyle.</p>
      <div className="mt-8">
        <button className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-700">Browse Puppies</button>
        <Link to="/adoption"><button className="ml-4 px-6 py-2 border-2 border-white text-white rounded-full hover:bg-gray-200">Adopt Now</button></Link>
      </div>
    </div>
  );
};

export default HeroSection;
