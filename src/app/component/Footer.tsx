// components/Footer.tsx

import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 m-14">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Positivus</h2>
          </div>
            <div>
                        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
            <li><a href="#" className="hover:text-gray-100">About us</a></li>
            <li><a href="#" className="hover:text-gray-100">Services</a></li>
            <li><a href="#" className="hover:text-gray-100">Use Cases</a></li>
            <li><a href="#" className="hover:text-gray-100">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-100">Blog</a></li>
          </ul>
          </div>
       
        <div className="flex justify-center lg:justify-end space-x-4 mt-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-gray-100"><FaLinkedin size={24} /></a>
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-gray-100"><FaFacebook size={24} /></a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-gray-100"><FaTwitter size={24} /></a>
          </div>
          </div>
<div className='mt-5 flex items-center justify-stretch'>
        <div className="mb-8 lg:mb-0 text-center lg:text-left flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-green-400 mb-2">Contact us:</h3>
          <p>Email: <a href="mailto:info@positivus.com" className="hover:text-gray-100">info@positivus.com</a></p>
          <p>Phone: <a href="tel:555-567-8901" className="hover:text-gray-100">555-567-8901</a></p>
          <p>Address: 1234 Main St, <br></br>Moonstone City, Stardust State 12345</p>
        </div>

        {/* Right Section - Newsletter Subscription */}
        <div className=" ml-20 text-center border border-gray-500 rounded-lg p-10">
          <form className="flex items-center justify-between gap-2 ">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 w-full lg:w-auto rounded border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:border-green-400"
            />
            <button className="bg-green-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-green-500">
              Subscribe to news
            </button>
          </form>
      
        </div>
      </div>
<div></div>
      {/* Bottom Section - Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p>© 2023 Positivus. All Rights Reserved. <a href="#" className="hover:underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
