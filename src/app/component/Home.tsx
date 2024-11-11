import Image from 'next/image';
import home from "../../../public/home.png"
import amazon from "../../../public/amazon.png"
const Home = () => {
  return (
    <div>
    {/* <section className="text-center py-20 bg-secondary text-accent">
      <h2 className="text-4xl font-bold mb-4">Navigating the digital landscape for success</h2>
      <p className="mb-6">Our team is dedicated to helping you navigate the complexities of digital marketing...</p>
      <button className="mt-6 bg-black text-white px-5 py-3 rounded-lg">Book a Consultation</button>
      </section> */}
      <div className="bg-white p-6">
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* left side */}
            <section className="text-center py-20 bg-secondary text-accent">
      <h2 className="text-4xl font-bold mb-4">Navigating the digital landscape for success</h2>
      <p className="mb-6">Our team is dedicated to helping you navigate the complexities of digital marketing...</p>
      <button className="mt-6 bg-black text-white px-5 py-3 rounded-lg">Book a Consultation</button>
      </section>
            {/* right side */}
            <div className="flex justify-center">
              <Image
                src={home}
                alt="SEO illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            </div>
          </div>
      <div className="flex justify-around gap-2">
        
        {/* Replace with your images */}
        <Image src={amazon} width={100} height={40} alt="Amazon" />
        <Image src="/dribble.png" width={100} height={40} alt="Hubspot" />
        <Image src="/hubspot.png" width={100} height={40} alt="Netflix" />
        <Image src="/notion.png" width={100} height={40} alt="Netflix" />
        <Image src="/netflix.png" width={100} height={40} alt="Netflix" />
        <Image src="/zoom.png" width={100} height={40} alt="Netflix" />
      </div>
    
    </div>
  );
};

export default Home;
// export default function Home() {
//   return (
//     <section className="bg-blue-600 text-white py-20">
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold">Welcome to Positivus</h1>
//         <p className="mt-4 text-lg">Your partner in digital marketing success.</p>
//         <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded-lg">
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// }