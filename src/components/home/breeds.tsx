import React from 'react';
import { Link } from 'react-router-dom';

const Breeds: React.FC = () => {
  return (
    <section className="p-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6"> Our Featured Breeds</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        
       
        <div className="rounded-lg p-4 flex flex-col items-center">
          <Link to="/pomeranian"><img src="/p2.jpg" alt="Pomeranian" className="w-32 h-32 object-cover rounded-full mb-4" /></Link>
          <h3 className="text-xl font-semibold">Pomeranian</h3>
          
        </div>
        
        <div className="rounded-lg p-4 flex flex-col items-center">
          <Link to="/golden"><img src="/p3.jpg" alt="Golden Retriever" className="w-36 h-36 object-cover rounded-full mb-4" /></Link>
          <h3 className="text-xl font-semibold">Golden Retriever</h3>
          
        </div>
        
        <div className="rounded-lg p-4 flex flex-col items-center">
         <Link to="/french"> <img src="/p4.jpg" alt="French Bulldog" className="w-36 h-36 object-cover rounded-full mb-4" /></Link>
          <h3 className="text-xl font-semibold">French Bulldog</h3>
         
        </div>

        <div className="hidden col-span-2 md:col-span-1 md:col-start-2 rounded-lg p-4 md:flex flex-col items-center">
          <Link to="/siberian"><img src="/p1.jpg" alt="Siberian Husky" className="w-36 h-36 object-cover rounded-full mb-4" /></Link>
          <h3 className="text-xl font-semibold">Siberian Husky</h3>
         
        </div>
        <div className="md:hidden rounded-lg p-4 sm:flex flex-col items-center">
          <img src="/p1.jpg" alt="Siberian Husky" className="w-36 h-36 object-cover rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Siberian Husky</h3>
         
        </div>
      </div>
    </section>
  );
};

export default Breeds;
