import React from 'react';
import Header from '../layout/navbar';
import Footer from '../layout/footer';

const GoldenRetrieverPage: React.FC = () => {
  return (
    <section className="bg-white">
        <Header />
        <main className='flex-grow p-16'>
      <h1 className="text-4xl font-bold mb-6  mt-4 text-center">Golden Retriever Breed Information</h1>
      <div className="w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-lg">
          The Golden Retriever is a large, friendly, and intelligent breed that was originally bred for hunting and retrieving game. 
          Known for their loyalty, gentle temperament, and beautiful golden coats, they are one of the most popular family dogs in the world. 
          Golden Retrievers typically weigh between 55 to 75 pounds and stand 21.5 to 24 inches tall at the shoulder. 
          They come in shades of gold, ranging from light to dark golden.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-around px-4 mb-8">
        <div className="w-full md:w-1/2 mb-8 flex justify-center">
          <img src="/p3.jpg" alt="Golden Retriever" className="h-full object-cover rounded-lg" style={{maxHeight: '350px'}} />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Origin</td>
                <td className="px-4 py-2 text-lg">Scotland</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Height</td>
                <td className="px-4 py-2 text-lg">21.5 to 24 inches</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Weight</td>
                <td className="px-4 py-2 text-lg">55 to 75 pounds</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Colors</td>
                <td className="px-4 py-2 text-lg">Light golden, golden, dark golden</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Lifespan</td>
                <td className="px-4 py-2 text-lg">10 to 12 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Available French Bulldog Puppies</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[
      { id: 1, name: 'Bella', breed: 'Golden Retriever', price: '$500', image: '/p3.jpg' },
      { id: 2, name: 'Max', breed: 'Golden Retriever', price: '$450', image: '/g3.jpg' },
      { id: 3, name: 'Alan', breed: 'Golden Retriever', price: '$400', image: '/g2.jpg' },
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
            Golden Retrievers are known for their friendly and tolerant personalities. They are highly intelligent, eager to please, and love human companionship, 
            making them excellent family pets. They are gentle with children and other animals, and their playful nature makes them a joy to be around.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Ideal Environment</h2>
          <p className="text-lg">
            Golden Retrievers thrive in active households where they can participate in regular physical activities. 
            They enjoy outdoor activities like running, fetching, and swimming, and they require daily exercise to stay healthy and happy.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Training</h2>
          <p className="text-lg">
            Golden Retrievers are highly trainable due to their intelligence and eagerness to learn. 
            They excel in obedience training, and positive reinforcement methods work best for them. 
            Early socialization and training are key to having a well-behaved Golden Retriever.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Grooming</h2>
          <p className="text-lg">
            Golden Retrievers have a dense water-repellent double coat that sheds year-round, especially during seasonal changes. 
            Regular brushing is necessary to keep their coat healthy and free from mats and tangles. They also benefit from occasional baths and nail trimming.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Health Considerations</h2>
          <p className="text-lg">
            Golden Retrievers are generally healthy, but they are prone to certain genetic conditions, such as hip dysplasia, elbow dysplasia, 
            and certain heart conditions. Regular vet check-ups, a healthy diet, and consistent exercise are essential to maintaining their health.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Fun Facts</h2>
          <p className="text-lg">
            Golden Retrievers are not only fantastic pets but are also frequently used as service dogs, therapy dogs, and search and rescue dogs due to their intelligence and friendly nature. 
            They were originally bred in the 19th century to retrieve game during hunting without damaging it, thanks to their soft mouths.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Adoption and Care</h2>
          <p className="text-lg">
            If you're interested in adopting a Golden Retriever, consider reputable breeders or rescue organizations. 
            This breed requires a strong commitment to their physical and mental well-being, so ensure you're ready for the responsibility of caring for an active and affectionate dog.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Additional Resources</h2>
          <p className="text-lg">
            For more detailed information on Golden Retrievers, including health concerns and care tips, check out:
            <a href="https://www.akc.org/dog-breeds/golden-retriever/" target="_blank" rel="noopener noreferrer"> American Kennel Club</a> 
            and 
            <a href="https://www.rover.com/blog/golden-retriever-dog-breed/" target="_blank" rel="noopener noreferrer"> Rover</a>.
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </section>
  );
};

export default GoldenRetrieverPage;
