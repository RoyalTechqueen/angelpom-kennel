import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16  flex flex-col md:flex-row items-center scroll-mt-24" id="about">
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img src="/p2.jpg" alt="Cute Puppy" className="w-96 h-96 rounded-full mx-auto" />
      </div>
      <div className="w-full md:w-1/2 text-left px-8">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-md mb-4">
          At Pawfect Companion, our mission is to connect loving families with their ideal puppy companions. We understand that choosing a pet is a significant decision, and we're here to guide you every step of the way.
        </p>
        <p className="text-md mb-4">
          Our dedicated team is committed to ensuring that each puppy is well-cared for and socialized from a young age. We take pride in our transparent adoption process, allowing you to see the love and care we put into raising our puppies. Beyond just adoption, we provide comprehensive support and resources for new puppy owners. From training tips to health advice, we are your partners in nurturing a happy and healthy relationship with your new furry friend. Our goal is to make the adoption process as smooth as possible. We offer personalized consultations to help you find the puppy that best fits your family dynamics and lifestyle. Your happiness and your puppy's well-being are our top priorities.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
