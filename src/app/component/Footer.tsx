// // components/Footer.tsx

// import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 px-4 m-14">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-white mb-4">Positivus</h2>
//           </div>
//             <div>
//                         <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
//             <li><a href="#" className="hover:text-gray-100">About us</a></li>
//             <li><a href="#" className="hover:text-gray-100">Services</a></li>
//             <li><a href="#" className="hover:text-gray-100">Use Cases</a></li>
//             <li><a href="#" className="hover:text-gray-100">Pricing</a></li>
//             <li><a href="#" className="hover:text-gray-100">Blog</a></li>
//           </ul>
//           </div>

//         <div className="flex justify-center lg:justify-end space-x-4 mt-4">
//             <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-gray-100"><FaLinkedin size={24} /></a>
//             <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-gray-100"><FaFacebook size={24} /></a>
//             <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-gray-100"><FaTwitter size={24} /></a>
//           </div>
//           </div>
// <div className='mt-5 flex items-center justify-stretch'>
//         <div className="mb-8 lg:mb-0 text-center lg:text-left flex flex-col gap-4">
//           <h3 className="text-lg font-semibold text-green-400 mb-2">Contact us:</h3>
//           <p>Email: <a href="mailto:info@positivus.com" className="hover:text-gray-100">info@positivus.com</a></p>
//           <p>Phone: <a href="tel:555-567-8901" className="hover:text-gray-100">555-567-8901</a></p>
//           <p>Address: 1234 Main St, <br></br>Moonstone City, Stardust State 12345</p>
//         </div>

//         {/* Right Section - Newsletter Subscription */}
//         <div className=" ml-20 text-center border border-gray-500 rounded-lg p-10">
//           <form className="flex items-center justify-between gap-2 ">
//             <input
//               type="email"
//               placeholder="Email"
//               className="px-4 py-2 w-full lg:w-auto rounded border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none focus:border-green-400"
//             />
//             <button className="bg-green-400 text-gray-900 px-4 py-2 rounded font-semibold hover:bg-green-500">
//               Subscribe to news
//             </button>
//           </form>

//         </div>
//       </div>
// <div></div>
//       {/* Bottom Section - Copyright */}
//       <div className="mt-10 border-t border-gray-700 pt-4">
//         <p>© 2023 Positivus. All Rights Reserved. <a href="#" className="hover:underline">Privacy Policy</a></p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col px-24 mt-10 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-16 pt-14 pb-12 max-w-full bg-zinc-900 rounded-[45px_45px_0px_0px] w-[1241px] max-md:px-5">
        <div className="flex flex-col w-full max-w-[1121px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
            {/*          
<Image
  loading="lazy"
  src={logo}
  className="object-contain shrink-0 self-stretch my-auto aspect-[6.21] w-[180px]"
  alt="Company logo"
  width={180}
  height={30} // You may need to adjust the height based on the aspect ratio
/> */}
          <div className="flex ">  <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_17_43)">
                <path
                  d="M14.7572 4.95854L29.1885 0.78125L24.9777 15.0001L29.1885 29.1788L14.7572 25.0416L0.285034 29.1788L4.53675 15.0001L0.285034 0.78125L14.7572 4.95854Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_43">
                  <rect
                    width="29.5167"
                    height="29"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h1 className="text-2xl font-semibold text-white">Positivus</h1></div>
          

            <nav className="flex flex-wrap gap-10 items-start self-stretch my-auto text-lg text-white min-w-[240px] max-md:max-w-full">
              <a href="#about-us">About us</a>
              <a href="#services">Services</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#pricing">Pricing</a>
              <a href="#blog">Blog</a>
            </nav>
            {/* <div className="flex gap-5 items-start self-stretch my-auto"> */}
            {/* <a href="#" aria-label="Facebook">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a39a9010fefdee5c418470be4fa557ae1c541a73ebe6d5687ae4eca9551be64?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 aspect-square w-[30px]" alt="Facebook icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f647e6456a2f5aa2b87ac7dbf14361af8a8daed2caa6ed204f8c51f565d1792?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 aspect-square w-[30px]" alt="Twitter icon" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6af3bf703154640cce69f0f7be92320d1bce3cf13c85e60eb08ec2cd9d71ea3a?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 aspect-square w-[30px]" alt="LinkedIn icon" />
              </a> */}
            <div className="flex justify-center lg:justify-end space-x-4 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-gray-100"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-gray-100"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-gray-100"
              >
                <FaTwitter size={24} />
              </a>
            </div>
            {/* </div> */}
          </div>
          <div className="flex flex-wrap gap-10 items-start mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col min-w-[240px]">
              <div className="flex flex-col self-start text-xl font-medium text-black">
                <div className="px-2 bg-lime-300 rounded-lg">Contact us:</div>
              </div>
              <address className="flex flex-col mt-7 text-lg text-white not-italic">
                <div>Email: info@positivus.com</div>
                <div className="mt-5">Phone: 555-567-8901</div>
                <div className="mt-5">
                  Address: 1234 Main St
                  <br />
                  Moonstone City, Stardust State 12345
                </div>
              </address>
            </div>
            <form className="flex overflow-hidden flex-wrap gap-5 items-start px-10 py-14 rounded-2xl bg-zinc-800 min-w-[240px] max-md:px-5 max-md:max-w-full">
              <input
                type="email"
                placeholder="Email"
                className="overflow-hidden gap-2.5 px-9 py-6 text-lg text-white whitespace-nowrap rounded-2xl border border-white border-solid min-w-[240px] w-[285px] max-md:px-5"
                required
              />
              <button
                type="submit"
                className="gap-2.5 px-9 py-5 text-xl leading-snug text-center text-black bg-lime-300 rounded-2xl min-w-[240px] max-md:px-5"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col mt-12 w-full text-lg leading-loose text-white max-w-[1120px] max-md:mt-10 max-md:max-w-full">
          <hr className="w-full border-t border-white border-solid" />
          <div className="flex flex-wrap gap-10 items-start self-start mt-12 max-md:mt-10 max-md:max-w-full">
            <div>© 2023 Positivus. All Rights Reserved.</div>
            <a href="#privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
