import Image from "next/image";
import illustration from "../../../public/Illustration.png";
export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex text-center">
          <h2 className="text-2xl font-bold ">Services</h2>
          <p className="text-sm mt-3 ml-2">
            {" "}
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 xs:grid-cols-1 gap-8">

          <div className="bg-white p-6 rounded-3xl shadow-md">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* left side */}
            <div>
            <h3 className="text-xl font-semibold">SEO Optimization</h3>
            <p className="mt-2">
              Improve your website visibility on search engines.
            </p>
            <a href="#" className="flex items-center font-medium gap-2 mt-8">
            <svg
                  width="35"
                  height="35"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.2501 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.7501 27.299L11.2501 24.701ZM30.7695 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4835 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7695 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.701L11.2501 24.701L12.7501 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <span>Learn more</span>
                </a>
            </div>
            {/* right side */}
            <div className="flex justify-center">
              <Image
                src={illustration}
                alt="SEO illustration"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* left side */}
            <div>
            <h3 className="text-xl font-semibold">SEO Optimization</h3>
            <p className="mt-2">
              Improve your website visibility on search engines.
            </p>
            <a href="#" className="flex items-center font-medium gap-2 mt-8">
            <svg
                  width="35"
                  height="35"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.2501 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.7501 27.299L11.2501 24.701ZM30.7695 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4835 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7695 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.701L11.2501 24.701L12.7501 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <span>Learn more</span>
                </a>
            </div>
            {/* right side */}
            <div className="flex justify-center">
              <Image
                src={illustration}
                alt="SEO illustration"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-md">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* left side */}
            <div>
            <h3 className="text-xl font-semibold">SEO Optimization</h3>
            <p className="mt-2">
              Improve your website visibility on search engines.
            </p>
            <a href="#" className="flex items-center font-medium gap-2 mt-8">
            <svg
                  width="35"
                  height="35"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.2501 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.7501 27.299L11.2501 24.701ZM30.7695 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4835 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7695 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.701L11.2501 24.701L12.7501 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <span>Learn more</span>
                </a>
            </div>
            {/* right side */}
            <div className="flex justify-center">
              <Image
                src={illustration}
                alt="SEO illustration"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-md">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* left side */}
            <div>
            <h3 className="text-xl font-semibold">SEO Optimization</h3>
            <p className="mt-2">
              Improve your website visibility on search engines.
            </p>
            <a href="#" className="flex items-center font-medium gap-2 mt-8">
            <svg
                  width="35"
                  height="35"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.2501 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.7501 27.299L11.2501 24.701ZM30.7695 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4835 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7695 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.701L11.2501 24.701L12.7501 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <span>Learn more</span>
                </a>
            </div>
            {/* right side */}
            <div className="flex justify-center">
              <Image
                src={illustration}
                alt="SEO illustration"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-md">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* left side */}
            <div>
            <h3 className="text-xl font-semibold">SEO Optimization</h3>
            <p className="mt-2">
              Improve your website visibility on search engines.
            </p>
            <a href="#" className="flex items-center font-medium gap-2 mt-8">
            <svg
                  width="35"
                  height="35"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.2501 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.7501 27.299L11.2501 24.701ZM30.7695 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4835 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7695 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.701L11.2501 24.701L12.7501 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <span>Learn more</span>
                </a>
            </div>
            {/* right side */}
            <div className="flex justify-center">
              <Image
                src={illustration}
                alt="SEO illustration"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-md">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* left side */}
            <div>
            <h3 className="text-xl font-semibold">SEO Optimization</h3>
            <p className="mt-2">
              Improve your website visibility on search engines.
            </p>
            <a href="#" className="flex items-center font-medium gap-2 mt-8">
            <svg
                  width="35"
                  height="35"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                  <path
                    d="M11.2501 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.7501 27.299L11.2501 24.701ZM30.7695 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4835 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7695 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.701L11.2501 24.701L12.7501 27.299Z"
                    fill="#B9FF66"
                  />
                </svg>
                <span>Learn more</span>
                </a>
            </div>
            {/* right side */}
            <div className="flex justify-center">
              <Image
                src={illustration}
                alt="SEO illustration"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            </div>
          </div>
        </div>

        <div className="mt-10 p-8 rounded-3xl shadow-md bg-gray-50">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Left side with text */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Let’s make things happen
              </h2>
              <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
              <a
                href="#"
                className="flex items-center text-green-600 font-medium hover:underline"
              >
               
                <button className="mt-6 bg-black text-white px-5 py-3 rounded-lg">Get Your free Proposal now</button>
              </a>
            </div>

            {/* Right side with image */}
            <div className="flex justify-center">
              <Image
                src={illustration}
                alt="SEO illustration"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
