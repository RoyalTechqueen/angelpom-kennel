import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 
import Header from '../layout/navbar';
import Footer from '../layout/footer';

const Contact: React.FC = () => {
  return (
    <section className="bg-yellow-50">
      <Header />
      <main className="p-16 flex-grow">
        <div className="text-center">
          <h1 className="text-4xl font-bold mt-8">Contact Us</h1>
          <p className="text-lg mb-4">We&apos;re here to help you. Feel free to get in touch!</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
         
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg">
              Whether you have questions, concerns, or feedback, we’d love to hear from you. Reach out to us using the contact details below, or use our form for inquiries.
            </p>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <FaEnvelope className="inline-block text-yellow-600 mr-2" size={24} />
                <span className="font-bold text-lg">Email</span>
                <p className="text-gray-600 ml-8">info@angelpom.com</p>
              </div>

              <div className="mb-6">
              <FaPhone className="inline-block text-yellow-600 mr-2" size={24} />
       <span className="font-bold text-lg">Phone</span>
       <a href="tel:+447904849556" className="text-gray-600 ml-8 block">
            +447904849556
  </a>
</div>

              <div>
                <FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" size={24} />
                <span className="font-bold text-lg">Address</span>
                <p className="text-gray-600 ml-8">123 Puppy Lane, Dog City, DA</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white shadow-lg rounded-lg p-8 ">
            <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2">Your Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none"
                  rows={5}
                  placeholder="Write your message"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Contact;
