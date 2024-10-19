import React from 'react';
import Header from '../layout/navbar';
import Footer from '../layout/footer';

const About: React.FC = () => {
  return (
    <section className="bg-yellow-50 min-h-screen">
      <Header />
      <main className="p-16  flex-grow">
        <div className="text-center mt-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About AngelPom Kennel</h1>
          <p className="text-xl text-gray-600">Connecting puppies with loving families for years</p>
        </div>

        <div className=' flex items-center flex-col md:flex-row gap-8 mt-8'>
        <div className="mb-12  w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At AngelPom Kennel, we believe that every dog deserves a loving home. Our goal is to create an adoption experience that is seamless, helping families find their perfect furry friend while giving every puppy the care they deserve.
          </p>
        </div>

        
        <div className="mb-12  w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li><strong>Compassion:</strong> Every puppy is treated with kindness and respect.</li>
            <li><strong>Trust:</strong> We provide transparency throughout the adoption process.</li>
            <li><strong>Support:</strong> We offer ongoing guidance and advice to new pet owners.</li>
          </ul>
        </div>
        </div>

       
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our puppies are raised with love and care to ensure they grow into happy and healthy companions. We provide vet records and health guarantees for each puppy, offering peace of mind as you welcome your new family member.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We’re committed to supporting you even after the adoption process, providing resources on training, health, and more. Join our community of happy adopters and make memories that will last a lifetime.
              </p>
            </div>
          </div>
        </section>

    

        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="/ceo.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-gray-800">Irina</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="/h2.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-gray-800">Michael Johnson</h3>
              <p className="text-gray-600">Puppy Care Specialist</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <img
                src="/h3.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-gray-800">Emily Rose</h3>
              <p className="text-gray-600">Adoption Coordinator</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default About;
