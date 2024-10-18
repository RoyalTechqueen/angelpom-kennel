import React from 'react';
import Header from '../layout/navbar';
import Footer from '../layout/footer';
import AdoptionBanner from '../components/home/adoptionbanner';
import HeroSection from '../components/home/hero';
import AboutUs from '../components/home/about';
import FeaturedBreeds from '../components/home/breeds';
import Testimonials from '../components/home/testimonials';

const HomePage:React.FC = () => {
  return (
    <div className='bg-yellow-50'>
        <Header />
      <HeroSection />
      <AboutUs />
      <FeaturedBreeds />
      <AdoptionBanner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
