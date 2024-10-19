import React, { useState,  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; 
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-10 transition-colors duration-300 px-8 ${
        isScrolled ? "bg-yellow-300" : "bg-transparent"
      }`}>
        <div className="flex items-center justify-between px-4 py-6 sm:px-6 min-w-screen-8xl">
        <div className="flex items-center">
       <Link to="/"> <h1 className="text-2xl font-bold">AngelPom Kennel</h1></Link>
      </div>
      <nav className='hidden lg:flex space-x-8 items-center text-xl font-semibold'>
            <Link to="/" className="text-gray-700 hover:text-yellow-500">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-500">About</Link>
            <li className="relative flex">
              <button
                className="text-gray-700 hover:text-yellow-500 flex items-center"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                Breeds <FaChevronDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-8 bg-white border rounded-lg shadow-lg w-60">
                 <Link to="/pomeranian" className="block px-4 py-2 hover:bg-gray-100 border-b">Pomeranian</Link>
                 <Link to="/golden" className="block px-4 py-2 hover:bg-gray-100 border-b">Golden Retriever</Link>
                 <Link to="/french" className="block px-4 py-2 hover:bg-gray-100 border-b">French Bulldog</Link>
                  <Link to="/siberian" className="block px-4 py-2 hover:bg-gray-100">Siberian Husky</Link>
                </ul>
              )}
            </li>
            <Link to="/puppies" className="text-gray-700 hover:text-yellow-500">Available Puppies</Link>
            <Link to="/adoption" className="text-gray-700 hover:text-yellow-500">Adoption Process</Link>
            <Link to="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>
    </nav>
    <button
          className="block lg:hidden ml-4"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>
        </div>
        <div
        className={`fixed top-0 left-0 h-full w-full  bg-white transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl"
            aria-label="Close Menu"
            onClick={() => setShowMenu(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <nav className="flex flex-col items-center p-6 space-y-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold">AngelPom Kennel</h1>
          </div>
          <Link
            to="/"
            onClick={() => setShowMenu(false)}
            className="text-lg font-medium hover:text-orange-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setShowMenu(false)}
            className="text-lg font-medium hover:text-orange-800"
          >
            About
          </Link>
          <Link
            to="/puppies"
            onClick={() => setShowMenu(false)}
            className="text-lg font-medium hover:text-orange-800"
          >
            Our Puppies
          </Link>
          <Link
            to="/adoption"
            onClick={() => setShowMenu(false)}
            className="text-lg font-medium hover:text-orange-800"
          >
            Adoption
          </Link>
          <Link
            to="/contact"
            onClick={() => setShowMenu(false)}
            className="text-lg font-medium hover:text-orange-800"
          >
            Contact
          </Link>
        </nav>
       
      </div>
    </header>
  );
};

export default Header;
