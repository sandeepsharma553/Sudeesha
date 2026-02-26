import React from "react";
import SmoothScroll from "smooth-scroll";

import { Navigation } from "./Components/navigation";
import { Header } from "./Components/header";
import { Features } from "./Components/features";
import { Services } from "./Components/services";
import { Portfolio } from "./Components/portfolio";
import { About } from "./Components/about";
import { Contact } from "./Components/contact";

import ScrollToTop from "./Components/scrolltotop";
import ScrollUp from "./Components/ScrollUp";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <ScrollUp />

      <Header />
      <Features />
      <Services />
      <Portfolio />
      <About />
      <Contact />

      <ScrollToTop />
    </div>
  );
};

export default App;