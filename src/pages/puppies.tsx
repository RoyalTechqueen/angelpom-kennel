import React, { useState } from 'react';
import Header from '../layout/navbar';
import Footer from '../layout/footer';
import { Link } from 'react-router-dom';

const puppiesData = [
  { id: 1, name: 'Bella', breed: 'Golden Retriever', price: '$500', image: '/p3.jpg' },
  { id: 2, name: 'Max', breed: 'Golden Retriever', price: '$450', image: '/g3.jpg' },
  { id: 3, name: 'Alan', breed: 'Golden Retriever', price: '$400', image: '/g2.jpg' },
  { id: 3, name: 'Lucy', breed: 'Pomeranian', price: '$400', image: '/p2.jpg' },
  { id: 5, name: 'Charlie', breed: 'Pomeranian', price: '$600', image: '/p.jpg' },
  { id: 6, name: 'Sofia', breed: 'Pomeranian', price: '$450', image: '/2.jpg' },
  { id: 7, name: 'Daisy', breed: 'French Bulldog', price: '$550', image: '/p4.jpg' },
  { id: 8, name: 'Buddy', breed: 'French Bulldog', price: '$450', image: '/3.jpg' },
  { id: 9, name: 'Peter', breed: 'French Bulldog', price: '$500', image: '/f3.jpg' },
  { id: 10, name: 'Luna', breed: 'Serbian Husky', price: '$400', image: '/p1.jpg' },
  { id: 11, name: 'Rocky', breed: 'Serbian Husky', price: '$350', image: '/s2.jpg' },
  { id: 12, name: 'Forest', breed: 'Serbian Husky', price: '$300', image: '/s3.jpg' },
];

const Puppies: React.FC = () => {
  const [selectedBreed, setSelectedBreed] = useState('All');

  const handleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreed(event.target.value);
  };

  const filteredPuppies = selectedBreed === 'All'
    ? puppiesData
    : puppiesData.filter((puppy) => puppy.breed === selectedBreed);

  return (
    <section className="bg-yellow-50 min-h-screen">
      <Header />
      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold text-center mt-8 mb-8">Available Puppies for Adoption</h1>

       
        <div className="mb-8 text-center">
          <label htmlFor="breed" className="mr-4 text-lg font-semibold">Filter by Breed:</label>
          <select
            id="breed"
            value={selectedBreed}
            onChange={handleBreedChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="All">All Breeds</option>
            <option value="Pomeranian">Pomeranian</option>
            <option value="Golden Retriever">Golden Retriever</option>
            <option value="French Bulldog">French Bulldog</option>
            <option value="Serbian Husky">Serbian Husky</option>
          </select>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPuppies.map((puppy) => (
            <div key={puppy.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={puppy.image}
                alt={puppy.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{puppy.name}</h2>
                <p className="text-gray-600">Breed: {puppy.breed}</p>
                <p className="text-gray-600">Price: {puppy.price}</p>
                <Link to="/adoption">
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg">
                  Adopt {puppy.name}
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Puppies;
