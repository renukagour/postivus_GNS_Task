import React from "react";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import WorkingProcess from "./WorkingProcess";
import Teams from "./Teams";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
// import ServiceGrid from "./ServiceGrid";

export const HomePage = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* main content */}
      <main>
        <Home />
        <Services />
        {/* <ServiceGrid/> */}

        <CaseStudies />
        <WorkingProcess />
        <Teams />
        <Testimonials />
        <Contact />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};
