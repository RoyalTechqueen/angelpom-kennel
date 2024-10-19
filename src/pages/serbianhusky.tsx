import React from 'react';
import Header from '../layout/navbar';
import Footer from '../layout/footer';

const SiberianHuskyPage: React.FC = () => {
  return (
    <section className="bg-white">
        <Header />
        <main className='flex-grow p-16'>
      <h1 className="text-4xl font-bold mb-6 text-center">Siberian Husky Breed Information</h1>
      <div className="w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-lg">
          The Siberian Husky is a medium-sized working dog known for its striking appearance, intelligence, and endurance. 
          Originally bred by the Chukchi people of Siberia for pulling sleds, Huskies are energetic, independent, and loyal. 
          They typically weigh between 35 to 60 pounds and stand 20 to 23.5 inches tall at the shoulder. 
          Siberian Huskies are recognized for their thick double coat, erect triangular ears, and distinctive markings, often with blue or multi-colored eyes.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-around px-4 mb-8">
        <div className="w-full md:w-1/2 mb-8 flex justify-center">
          <img src="/p1.jpg" alt="Siberian Husky" className="h-full object-cover rounded-lg" style={{maxHeight: '350px'}} />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Origin</td>
                <td className="px-4 py-2 text-lg">Siberia, Russia</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Height</td>
                <td className="px-4 py-2 text-lg">20 to 23.5 inches</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Weight</td>
                <td className="px-4 py-2 text-lg">35 to 60 pounds</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Colors</td>
                <td className="px-4 py-2 text-lg">Black, white, gray, sable, agouti</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Lifespan</td>
                <td className="px-4 py-2 text-lg">12 to 14 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Available French Bulldog Puppies</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[
        { id: 1, name: 'Luna', breed: 'Serbian Husky', price: '$400', image: '/p1.jpg' },
        { id: 2, name: 'Rocky', breed: 'Serbian Husky', price: '$350', image: '/s2.jpg' },
        { id: 3, name: 'Forest', breed: 'Serbian Husky', price: '$300', image: '/s3.jpg' },
    ].map((puppy) => (
      <div key={puppy.id} className="border border-gray-300 rounded-lg p-4">
        <img src={puppy.image} alt={`Puppy ${puppy.name}`} className="w-full h-auto rounded-lg mb-2" />
        <h3 className="font-bold">{puppy.name}</h3>
        <p>Breed: {puppy.breed}</p>
        <p>Price: {puppy.price}</p>
        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-yellow-700"
          onClick={() => window.location.href = '/adoption'}
        >
          Adopt Now
        </button>
      </div>
    ))}
  </div>
</div>

      <div className="flex flex-col md:flex-row items-start justify-between px-4">
        <div className="w-full mb-8">
          <h2 className="text-4xl font-semibold mb-4">Personality</h2>
          <p className="text-lg">
            Siberian Huskies are independent, outgoing, and energetic. They are known for their friendly and alert temperament but are also known to be mischievous. 
            They are very social with humans and other dogs, making them great companions. However, due to their independent nature, they require consistent training.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Ideal Environment</h2>
          <p className="text-lg">
            Siberian Huskies do well in active households with ample space for running and playing. They thrive in cold climates due to their thick coats and need regular physical activity 
            to expend their energy. Huskies are known escape artists, so secure fencing is essential.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Training</h2>
          <p className="text-lg">
            Siberian Huskies are intelligent but can be stubborn. Positive reinforcement and consistency are key to training them effectively. 
            They excel in activities like sledding, agility, and obedience competitions but can be challenging for novice owners due to their independent nature.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Grooming</h2>
          <p className="text-lg">
            Siberian Huskies have a thick double coat that sheds heavily, particularly during seasonal shedding periods. 
            Regular brushing is necessary to keep their coat free of loose hair, and they require occasional baths. Their nails should also be trimmed regularly.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Health Considerations</h2>
          <p className="text-lg">
            Siberian Huskies are generally healthy dogs but can be prone to certain genetic conditions such as hip dysplasia, eye conditions, and thyroid problems. 
            Regular vet check-ups and a balanced diet will help maintain their health.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Fun Facts</h2>
          <p className="text-lg">
            Siberian Huskies are known for their role in the famous 1925 "Serum Run to Nome," where sled teams delivered life-saving medicine to combat a diphtheria outbreak. 
            They have incredible stamina and are one of the fastest sled dog breeds in the world.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Adoption and Care</h2>
          <p className="text-lg">
            If you're interested in adopting a Siberian Husky, consider contacting reputable breeders or rescue organizations. 
            Huskies require experienced owners who can meet their high energy and exercise needs. Ensure you're prepared for the responsibility of owning an active and independent dog.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Additional Resources</h2>
          <p className="text-lg">
            For more detailed information on Siberian Huskies, including health concerns and care tips, check out:
            <a href="https://www.akc.org/dog-breeds/siberian-husky/" target="_blank" rel="noopener noreferrer"> American Kennel Club</a> 
            and 
            <a href="https://www.rover.com/blog/siberian-husky-dog-breed/" target="_blank" rel="noopener noreferrer"> Rover</a>.
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </section>
  );
};

export default SiberianHuskyPage;
