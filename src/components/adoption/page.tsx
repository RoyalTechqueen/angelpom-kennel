import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../layout/navbar';
import Footer from '../../layout/footer';

const Adoption: React.FC = () => {
  const steps = [
    {
      title: 'Step 1: Browse Available Puppies',
      description: 'Browse through our selection of loving, healthy puppies looking for a forever home. We have detailed profiles with their breed, personality, and care needs.',
      buttonText: 'View Puppies',
      justify: 'start',
    },
    {
      title: 'Step 2: Apply for Adoption',
      description: 'Found a puppy you love? Complete our quick online adoption application to help us ensure a perfect match for both you and your new companion.',
      buttonText: 'Apply Now',
      justify: 'end',
    },
    {
      title: 'Step 3: Meet Your Puppy',
      description: 'Once your application is approved, we’ll set up a meeting. This ensures that you and the puppy are a great fit. You can ask questions and learn more about your new friend.',
      buttonText: 'Schedule a Visit',
      justify: 'start',
    },
    {
      title: 'Step 4: Bring Your Puppy Home',
      description: 'Finalize the adoption, and bring your new furry family member home. We’ll provide all the information you need for a smooth transition.',
      buttonText: 'Finalize Adoption',
      justify: 'end',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-12 text-center">
        <h1 className="text-5xl font-bold mb-10 mt-4">Start Your Adoption Journey</h1>
        <div className="">
          {steps.map((step, index) => (
            <div key={index} className={`flex justify-${step.justify} mb-8`}>
              <div className="bg-white shadow-lg p-6 rounded-lg text-left w-full md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">{step.title}</h2>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
                  {step.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link to="/adoptionprocess">
          <button className='px-5 py-3 mt-4 p-4 bg-yellow-500 hover:bg-yellow-800 rounded-xl'>Apply Now</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Adoption;
