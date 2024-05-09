import React, { useState, useEffect } from "react";
import { Navigation } from "../src/Components/navigation";
import { Header } from "../src/Components/header";
import { Features } from "../src/Components/features";
import { About } from "../src/Components/about";
import { Services } from "../src/Components/services";
import { Gallery } from "../src/Components/gallery";
// import { Testimonials } from "../src/Components/testimonials";
// import { Team } from "../src/Components/Team";
import { Contact } from "../src/Components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import ScrollToTop from "./Components/scrolltotop";
import ScrollUp from "./Components/ScrollUp";
// import { Portfolio } from "./Components/portfolio";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <ScrollUp />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      {/* <Portfolio data={landingPageData.portfolio}/> */}
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
      <ScrollToTop />
    </div>
  );
};

export default App;
