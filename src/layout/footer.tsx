import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-300 text-black py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        <div className="text-sm">
          <p>&copy; 2024 AngelPom Kennel. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/#" className="hover:underline">Privacy Policy</Link>
          <Link to="/#" className="hover:underline">Terms of Service</Link>
          <Link to="/#" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
