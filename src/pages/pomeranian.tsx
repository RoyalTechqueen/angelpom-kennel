import React from 'react';
import Header from '../layout/navbar';
import Footer from '../layout/footer';
import { Link } from 'react-router-dom';

const PomeranianPage: React.FC = () => {
  return (
    <section className="bg-white">
        <Header />
        <main className='flex-grow p-16'>
      <h1 className="text-4xl font-bold mb-6 text-center">Pomeranian Breed Information</h1>
      <div className="w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-lg">
          The Pomeranian is a small breed of dog that is a part of the Spitz family. Known for their fluffy double coat and fox-like features, 
          these dogs are both adorable and lively. Pomeranians usually weigh between 3 to 7 pounds and stand 7 to 12 inches tall. 
          They come in a variety of colors including orange, black, cream, and chocolate.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-around px-4 mb-8">
        <div className="w-full md:w-1/2 mb-8 flex justify-center">
          <img src="/p2.jpg" alt="Pomeranian" className="h-full object-cover rounded-lg" style={{maxHeight: '350px'}} />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Origin</td>
                <td className="px-4 py-2 text-lg">Germany, Poland</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Height</td>
                <td className="px-4 py-2 text-lg">7 to 12 inches</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Weight</td>
                <td className="px-4 py-2 text-lg">3 to 7 pounds</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Colors</td>
                <td className="px-4 py-2 text-lg">Orange, black, cream, chocolate</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Lifespan</td>
                <td className="px-4 py-2 text-lg">12 to 16 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Available French Bulldog Puppies</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[
      { id: 1, name: 'Lucy', breed: 'Pomeranian', price: '$400', image: '/p2.jpg' },
      { id: 2, name: 'Charlie', breed: 'Pomeranian', price: '$600', image: '/p.jpg' },
      { id: 3, name: 'Sofia', breed: 'Pomeranian', price: '$450', image: '/2.jpg' },
    ].map((puppy) => (
      <div key={puppy.id} className="border border-gray-300 rounded-lg p-4">
        <img src={puppy.image} alt={`Puppy ${puppy.name}`} className="w-full h-auto rounded-lg mb-2" />
        <h3 className="font-bold">{puppy.name}</h3>
        <p>Breed: {puppy.breed}</p>
        <p>Price: {puppy.price}</p>
        <Link to="/adoption">
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-yellow-700"     
        >
          Adopt Now
        </button>
        </Link>
      </div>
    ))}
  </div>
</div>
      <div className="flex flex-col md:flex-row items-start justify-between px-4">
        <div className="w-full mb-8">
          <h2 className="text-4xl font-semibold mb-4">Personality</h2>
          <p className="text-lg">
            Pomeranians are known for their cheerful and confident personalities. They are affectionate and form strong bonds with their families. 
            This breed is intelligent and eager to please, but they can also be quite sassy and stubborn. Socialization is crucial to ensure they are well-adjusted and friendly.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Ideal Environment</h2>
          <p className="text-lg">
            Pomeranians adapt well to various living situations, making them great companions for apartment dwellers and families alike. 
            They do require regular exercise, such as walks and playtime, to stay healthy and happy.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Training</h2>
          <p className="text-lg">
            Early training and socialization are essential for Pomeranians. Due to their intelligent nature, they can learn commands quickly, 
            but they can also exhibit some independence. Positive reinforcement methods work best.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Grooming</h2>
          <p className="text-lg">
            The fluffy coat of a Pomeranian requires regular grooming to prevent mats and tangles. 
            It’s advisable to brush them several times a week and take them for professional grooming sessions every month or so.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Health Considerations</h2>
          <p className="text-lg">
            Pomeranians are generally healthy, but they may be prone to certain health issues like dental problems, patellar luxation, and heart conditions. 
            Regular vet check-ups are vital for maintaining their health.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Fun Facts</h2>
          <p className="text-lg">
            Pomeranians were bred from larger Spitz breeds and were once used as working dogs. 
            Today, they are one of the most popular toy breeds in the world and are often seen in various dog shows.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Adoption and Care</h2>
          <p className="text-lg">
            If you're interested in adopting a Pomeranian, consider reaching out to local shelters or breed-specific rescue organizations. 
            Ensure you understand the commitment required to care for a Pomeranian, including their grooming needs and potential health issues.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Additional Resources</h2>
          <p className="text-lg">
            For more detailed information on Pomeranians, including specific health concerns and care tips, you can check out:
            <a href="https://www.akc.org/dog-breeds/pomeranian/" target="_blank" rel="noopener noreferrer"> American Kennel Club</a> 
            and 
            <a href="https://www.rover.com/blog/pomeranian-dog-breed/" target="_blank" rel="noopener noreferrer"> Rover</a>.
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </section>
  );
};

export default PomeranianPage;
