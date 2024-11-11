"use client";
import React, { useState } from "react";

const WorkingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  const toggleStep = (step: number) => {
    setActiveStep(activeStep === step ? null : step);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-2">Our Working Process</h2>
        <p className="text-gray-500 mb-6">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>

        <div className="space-y-4">
          <div className="border-2 border-green-700 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(1)}
            >
              <span className="font-semibold text-2xl">01 <span className="text-lg font-normal">Consultation</span></span>
              <span>{activeStep === 1 ? "−" : "+"}</span>
            </div>
            {activeStep === 1 && (
              <p className="text-gray-600 mt-4">
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
              </p>
            )}
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(2)}
            >
              <span className="font-semibold text-2xl">02 <span className="text-lg font-normal">Research and Strategy Development</span></span>
              <span>{activeStep === 2 ? "−" : "+"}</span>
            </div>
            {activeStep === 2 && (
              <p className="text-gray-600 mt-4">
                We conduct thorough research on your industry, competitors, and audience to develop a tailored marketing strategy that aligns with your business goals.
              </p>
            )}
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(3)}
            >
              <span className="font-semibold text-2xl">03 <span className="text-lg font-normal">Implementation</span></span>
              <span>{activeStep === 3 ? "−" : "+"}</span>
            </div>
            {activeStep === 3 && (
              <p className="text-gray-600 mt-4">
                Our team implements the strategy, optimizing and adjusting as necessary to ensure effective results for your business.
              </p>
            )}
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(4)}
            >
              <span className="font-semibold text-2xl">04 <span className="text-lg font-normal">Monitoring and Optimization</span></span>
              <span>{activeStep === 4 ? "−" : "+"}</span>
            </div>
            {activeStep === 4 && (
              <p className="text-gray-600 mt-4">
                Our team implements the strategy, optimizing and adjusting as necessary to ensure effective results for your business.
              </p>
            )}
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(5)}
            >
              <span className="font-semibold text-2xl">05 <span className="text-lg font-normal">Reporting and Communication</span></span>
              <span>{activeStep === 5 ? "−" : "+"}</span>
            </div>
            {activeStep === 5 && (
              <p className="text-gray-600 mt-4">
                Our team implements the strategy, optimizing and adjusting as necessary to ensure effective results for your business.
              </p>
            )}
          </div>
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(6)}
            >
              <span className="font-semibold text-2xl">06 <span className="text-lg font-normal">Continuous Improvement</span></span>
              <span>{activeStep === 6 ? "−" : "+"}</span>
            </div>
            {activeStep === 6 && (
              <p className="text-gray-600 mt-4">
                Our team implements the strategy, optimizing and adjusting as necessary to ensure effective results for your business.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
