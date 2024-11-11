"use client"
import React from 'react';
import contact from "../../../public/contact.png"
import Image from 'next/image';
const Contact = () => {
  return (
    <section className="py-12">
        
      <h2 className="text-green-600 text-center text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-center text-gray-600 mb-8">Connect with Us. Let&apos;s Discuss Your Digital Marketing Needs</p>
      <div className="mt-10 grid grid-cols-2 xs:grid-cols-1 gap-8">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
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
          <input type="text" name="name" placeholder="Name" className="w-full p-3 border border-gray-300 rounded" />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
          <textarea name="message" placeholder="Message" className="w-full p-3 border border-gray-300 rounded h-24"></textarea>
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">Send Message</button>
        </form>
      </div>
      <div className='border'>
    
      <Image
                src={contact}
                alt="illustration"
                width={300}
                height={300}
           
              />
      </div>
      </div>
    </section>
  );
};

export default Contact;
