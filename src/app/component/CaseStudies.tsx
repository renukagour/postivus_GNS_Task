// components/CaseStudies.tsx
import React from "react";
import '../style.css'
import Image from "next/image";
import greenArrow from '../../../public/green-arrow.png'
const caseStudies = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
];
const CaseStudies: React.FC = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 heading2 w-36">Case Studies</h2>
        <p className="text-gray-500 mb-6">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a href="#" className="text-green-500 mt-4 inline-block">
              Learn more &rarr;
            </a>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <p>
              For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.
            </p>
            <a href="#" className="text-green-500 mt-4 inline-block">
              Learn more &rarr;
            </a>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <p>
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>
            <a href="#" className="text-green-500 mt-4 inline-block">
              Learn more &rarr;
            </a>
          </div>
        </div> */}
         <section className="flex flex-col px-24 mt-20 max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
      <div className="flex  gap-10 items-start px-16 py-16 bg-zinc-900 rounded-[45px] max-md:px-5 max-md:max-w-full">
        {caseStudies.map((study, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col min-w-[240px] w-[286px]">
              <p className="text-lg text-white">{study}</p>
              <div className="flex gap-4 items-center mt-5 text-xl leading-snug text-lime-300">
                <p className="text-xl cursor-pointer">
                 Learn more </p>
                <Image
                src={greenArrow}
                alt="learn"
                width={20}
                />
                
              </div>
            </div>
            {index < caseStudies.length - 1 && (
              <div className="shrink-0 w-0 border border-white border-solid h-[186px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
      </div>
    </section>
  );
};

export default CaseStudies;
