"use client";
import React, { useState } from "react";
import '../style.css';

const WorkingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  const toggleStep = (step: number) => {
    setActiveStep(activeStep === step ? null : step);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 heading2 w-72">Our Working Process</h2>
        <p className="text-gray-500 mb-6">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>

        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`border-2 rounded-lg p-4 ${
                activeStep === step ? 'bg-[#B9FF66] border-green-700' : 'bg-white border-gray-300'
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleStep(step)}
              >
                <span className="font-semibold text-2xl">
                  0{step} <span className="text-lg font-normal">{
                    step === 1 ? "Consultation" :
                    step === 2 ? "Research and Strategy Development" :
                    step === 3 ? "Implementation" :
                    step === 4 ? "Monitoring and Optimization" :
                    step === 5 ? "Reporting and Communication" :
                    "Continuous Improvement"
                  }</span>
                </span>
                <span>{activeStep === step ? "−" : "+"}</span>
              </div>

              {activeStep === step && (
                <>
                  <hr className="border-t-1 border-gray-300 my-4" />
                  <p className="text-gray-600 mt-4 heading2">
                    {
                      step === 1 ? "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." :
                      step === 2 ? "We conduct thorough research on your industry, competitors, and audience to develop a tailored marketing strategy that aligns with your business goals." :
                      "Our team implements the strategy, optimizing and adjusting as necessary to ensure effective results for your business."
                    }
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
