
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">About TastyBites</h1>
        
        <div className="glass p-8 rounded-lg space-y-6">
          <p>
            TastyBites was founded in 2023 with a simple mission: to deliver delicious, 
            high-quality food right to your doorstep. What started as a small family 
            business has quickly grown into one of the most loved food delivery 
            services in the area.
          </p>
          
          <p>
            Our team of passionate chefs prepares each meal with care, using only 
            the freshest ingredients sourced from local suppliers. We believe that 
            good food has the power to bring people together and create memorable 
            experiences.
          </p>
          
          <p>
            At TastyBites, we are committed to:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Using fresh, locally-sourced ingredients</li>
            <li>Providing exceptional customer service</li>
            <li>Ensuring timely delivery of your favorite meals</li>
            <li>Continuously expanding our menu to offer new and exciting options</li>
          </ul>
          
          <p>
            We're more than just a food delivery service – we're a team dedicated 
            to making your dining experience special, whether it's a quick lunch, 
            family dinner, or special celebration.
          </p>
          
          <p>
            Thank you for choosing TastyBites. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
