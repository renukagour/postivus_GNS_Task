import Image from "next/image";
import illustration from "../../../public/Illustration.png";
import '../style.css'
import arrow from '../../../public/arrow.png'
import arrowWhite from '../../../public/arrow-white.png'
import ServiceCard from "./ServiceCard";
import s1 from '../../../public/s1.png'
import s2 from '../../../public/s2.png'
import s3 from '../../../public/s3.png'
import s4 from '../../../public/s4.png'
import s5 from '../../../public/s5.png'
import s6 from '../../../public/s6.png'
const services = [
  {
    title: "Search engine optimization",
    icon: s1 ,
    bgColor: "bg-zinc-100",
    textColor: "text-black",
    buttonIcon:  arrow ,
  },
  {
    title: "Pay-per-click advertising",
    icon: s2 ,
    bgColor: "bg-lime-300",
    textColor: "text-black",
    buttonIcon: arrow ,
  },
  {
    title: "Social Media Marketing",
    icon:  s3 ,
    bgColor: "bg-zinc-900",
    textColor: "text-white",
    buttonIcon:  arrowWhite ,
  },
  {
    title: "Email Marketing",
    icon: s4 ,
    bgColor: "bg-zinc-100",
    textColor: "text-black",
    buttonIcon:  arrow ,
  },
  {
    title: "Content Creation",
    icon: s5 ,
    bgColor: "bg-lime-300",
    textColor: "text-black",
    buttonIcon: arrow ,
  },
  {
    title: "Analytics and Tracking",
    icon:  s6 ,
    bgColor: "bg-zinc-900",
    textColor: "text-white",
    buttonIcon:  arrowWhite ,
  },
];
export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex text-center">
          <h2 className="text-3xl font-bold heading2">Services</h2>
          <p className="text-xs mt-3 ml-5 w-[400px] text-left">
            {" "}
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 xs:grid-cols-1 gap-8">

        {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          icon={service.icon}
          bgColor={service.bgColor}
          textColor={service.textColor}
          buttonIcon={service.buttonIcon}
        />
      ))}
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
