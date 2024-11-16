"use client"
import React from 'react';
import contact from "../../../public/contact.png"
import Image from 'next/image';
import '../style.css'
const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
    <h2 className="text-2xl font-bold mb-2 heading2 w-24">Contact</h2>
    <p className="text-gray-500 mb-6">
    Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
    </p>
      <div className="m-10 p-5 flex justify-between gap-8 bg-gray-200 rounded-lg ">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg ">
        <form className="space-y-4">
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="contactType" value="help" className="form-radio text-green-600" />
              <span className="ml-2 text-gray-700">Say Hi</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="contactType" value="quote" className="form-radio text-green-600" />
              <span className="ml-2 text-gray-700">Get a Quote</span>
            </label>
          </div>
          <input type="text" name="name" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea name="message" placeholder="Message" className="w-full p-3 border border-gray-300 rounded-lg h-24"></textarea>
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg">Send Message</button>
        </form>
      </div>
      <div>
    
      <Image
                src={contact}
                alt="illustration"
                width={250}
                height={250}
                className='object-fill'
           
              />
      </div>
      </div>
    </div>
  );
};

export default Contact;
