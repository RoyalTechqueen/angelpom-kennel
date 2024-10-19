import React, { useState } from 'react';
import Header from '../../layout/navbar';
import Footer from '../../layout/footer';

const AdoptionProcess: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    puppyName: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));

  return (
    <section className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-5xl font-bold text-center mb-10 mt-4 ">Adoption Process</h1>

        {/* Step Indicator */}
        <div className="flex justify-center mb-8">
          {['Step 1: Fill Form', 'Step 2: Review Info', 'Step 3: Confirm'].map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= index + 1 ? 'bg-yellow-500 text-black' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              {index < 2 && <div className="w-10 border-t-2 border-primary mx-2" />}
            </div>
          ))}
        </div>

        {/* Steps Content */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">Step 1: Fill the Form</h2>
            <form className="bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2" htmlFor="address">
                  Home Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2" htmlFor="puppyName">
                  Puppy's Name
                </label>
                <input
                  type="text"
                  id="puppyName"
                  name="puppyName"
                  value={formData.puppyName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2" htmlFor="message">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                ></textarea>
              </div>
              <div className='flex justify-end items-center'>
              <button
                type="button"
                className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
                onClick={nextStep}
              >
                Next Step
              </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Step 2: Review Information</h2>
            <p className="text-center mb-4">Please review your information carefully before submission.</p>
            <ul className="mb-6">
              <li><strong>Full Name:</strong> {formData.name}</li>
              <li><strong>Email Address:</strong> {formData.email}</li>
              <li><strong>Phone Number:</strong> {formData.phone}</li>
              <li><strong>Home Address:</strong> {formData.address}</li>
              <li><strong>Puppy's Name:</strong> {formData.puppyName}</li>
              <li><strong>Additional Information:</strong> {formData.message}</li>
            </ul>
            <div className="flex justify-between">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
                onClick={nextStep}
              >
                Confirm & Proceed
              </button>
            </div>
          </div>
        )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">Step 3: Confirmation</h2>
          <p className="text-center mb-4">Your adoption form has been submitted successfully!</p>
          <p className="text-center mb-4">Thank you for choosing to adopt! We appreciate your commitment to providing a loving home for a puppy in need.</p>
          <p className="text-center mb-4">You will receive a confirmation email shortly with further instructions.</p>
          <div className="flex justify-center mt-4">
            <button
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
              onClick={() => {
                setStep(1); 
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </section>
  );
};

export default AdoptionProcess;
