// components/CaseStudies.tsx
import React from "react";

const CaseStudies: React.FC = () => {
  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-2">Case Studies</h2>
        <p className="text-gray-500 mb-6">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
