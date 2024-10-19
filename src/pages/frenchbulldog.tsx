import React from 'react';
import Header from '../layout/navbar';
import Footer from '../layout/footer';
import { Link } from 'react-router-dom';

const FrenchBulldogPage: React.FC = () => {
  return (
    <section className="bg-white">
        <Header />
        <main className='flex-grow p-16'>
      <h1 className="text-4xl font-bold mb-6 mt-4 text-center">French Bulldog Breed Information</h1>
      <div className="w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-lg">
          The French Bulldog is a small, sturdy, and playful breed that originated in France. 
          Known for their distinctive bat-like ears, affectionate personalities, and charming appearance, 
          they have become one of the most popular companion dogs worldwide. 
          French Bulldogs typically weigh between 16 to 28 pounds and stand 11 to 12 inches tall at the shoulder. 
          They come in a variety of colors, including brindle, fawn, and white.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-around px-4 mb-8">
        <div className="w-full md:w-1/2 mb-8 flex justify-center">
          <img src="/p4.jpg" alt="French Bulldog" className="h-full object-cover rounded-lg" style={{maxHeight: '350px'}} />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Origin</td>
                <td className="px-4 py-2 text-lg">France</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Height</td>
                <td className="px-4 py-2 text-lg">11 to 12 inches</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Weight</td>
                <td className="px-4 py-2 text-lg">16 to 28 pounds</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Colors</td>
                <td className="px-4 py-2 text-lg">Brindle, fawn, white</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2 font-bold text-lg">Lifespan</td>
                <td className="px-4 py-2 text-lg">10 to 14 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Available French Bulldog Puppies</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[
      { id: 1, name: 'Daisy', breed: 'French Bulldog', price: '$550', image: '/p4.jpg' },
      { id: 2, name: 'Buddy', breed: 'French Bulldog', price: '$450', image: '/3.jpg' },
      { id: 3, name: 'Peter', breed: 'French Bulldog', price: '$500', image: '/f3.jpg' },
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
            French Bulldogs are known for their playful, affectionate, and easygoing nature. 
            They are excellent companion dogs that thrive on human interaction and attention. 
            Despite their small size, they are sturdy and adaptable, making them great for both apartment living and family homes.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Ideal Environment</h2>
          <p className="text-lg">
            French Bulldogs do well in homes where they can relax and spend time with their owners. 
            They don't require a lot of space, so they are suitable for apartment dwellers, but they do need short daily walks to stay healthy. 
            They are sensitive to extreme temperatures, so it's important to keep them cool in hot weather and warm in cold climates.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Training</h2>
          <p className="text-lg">
            French Bulldogs are intelligent but can be a bit stubborn at times. 
            Positive reinforcement and patience are key to successful training. 
            They respond well to rewards and praise, and early socialization helps them become well-adjusted adult dogs.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Grooming</h2>
          <p className="text-lg">
            French Bulldogs have a short, smooth coat that is easy to care for. 
            Regular brushing helps reduce shedding, and they only need occasional baths. 
            Their facial folds should be cleaned regularly to prevent irritation or infection, and their nails should be trimmed to avoid overgrowth.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Health Considerations</h2>
          <p className="text-lg">
            Like all breeds, French Bulldogs are prone to certain health issues, such as breathing difficulties due to their short snouts, 
            hip dysplasia, and skin allergies. It's important to monitor their health and consult a vet for regular check-ups to keep them in good condition.
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Fun Facts</h2>
          <p className="text-lg">
            French Bulldogs are often called "Frenchies" and are known for their expressive faces and quirky personalities. 
            They were originally bred as companions for lace workers in England and later became popular in France, 
            where they earned their name. Frenchies are also popular with celebrities and have a significant presence on social media!
          </p>

          <h2 className="text-4xl font-semibold mt-4 mb-2">Adoption and Care</h2>
          <p className="text-lg">
            If you're considering adopting a French Bulldog, be sure to research responsible breeders or consider rescue organizations. 
            They require moderate care, attention, and affection, so be prepared for a lifelong companion with a big personality!
          </p>

         
        </div>
      </div>
      </main>
      <Footer />
    </section>
  );
};

export default FrenchBulldogPage;
