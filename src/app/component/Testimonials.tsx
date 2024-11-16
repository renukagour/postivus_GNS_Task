"use client"
import React, { useState } from 'react';

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  position: string;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
  },
  {
    id: 2,
    quote: "Positivus transformed our digital strategy and provided insights we hadn't considered before.We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: 'Jane Doe',
    position: 'CEO at ABC Inc.',
  },
  {
    id: 3,
    quote: "Their team is knowledgeable, responsive, and truly cares about their clients' success. We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: 'Sarah Lee',
    position: 'COO at DEF Ltd.',
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((current - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrent((current + 1) % testimonialsData.length);
  };

  return (
   
     <div className="container mx-auto py-4 px-4">
        <h2 className="text-2xl font-bold mb-2 heading2 w-36">Testimonials</h2>
        <p className="text-gray-500 mb-6">
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
     <section className=" container bg-gray-900 text-white py-12">
      
      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <div className="flex space-x-8 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="p-8 bg-gray-800 rounded-lg text-center min-w-full">
              <p className="text-gray-300 mb-4">&quot;{testimonial.quote}&quot;</p>
              <h4 className="text-green-400 font-semibold">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </div>
          ))}
        </div>
        {/* Carousel navigation */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button onClick={handlePrev} className="p-2 rounded-full bg-gray-700 hover:bg-green-400">{"<"}</button>
          <div className="space-x-2">
            {testimonialsData.map((_, index) => (
              <span key={index} className={`w-2 h-2 inline-block rounded-full ${index === current ? 'bg-green-400' : 'bg-gray-500'}`}></span>
            ))}
          </div>
          <button onClick={handleNext} className="p-2 rounded-full bg-gray-700 hover:bg-green-400">{">"}</button>
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default Testimonials;
