import React from 'react';
import Header from '../layout/navbar';
import Footer from '../layout/footer';
import Adoption from '../components/adoption/page';


const HomePage:React.FC = () => {
  return (
    <div>
     <Header />
      <Adoption />
      <Footer />
    </div>
  );
};

export default HomePage;
