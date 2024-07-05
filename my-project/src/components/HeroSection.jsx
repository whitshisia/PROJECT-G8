// src/components/HeroSection.jsx
import React from 'react';
import heroImage from '../assets/library.jpg'; 
const HeroSection = () => {
  return (
    <section className="flex justify-between items-center p-8 bg-gray-100">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4">LIBRARY MANAGEMENT SYSTEM</h1>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Get Started
        </button>
      </div>
      <img src={heroImage} alt="Library Management" className="max-w-md" />
    </section>
  );
};

export default HeroSection;
