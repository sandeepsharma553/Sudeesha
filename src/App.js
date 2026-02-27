import React, { useEffect } from "react";
import "./App.css";

import { Navigation } from "./Components/navigation";
import { Header } from "./Components/header";
import { Features } from "./Components/features";
import { Services } from "./Components/services";
import { Gallery } from "./Components/gallery";
import { Portfolio } from "./Components/portfolio";
import { About } from "./Components/about";
import { Contact } from "./Components/contact";
import ScrollToTop from "./Components/scrolltotop";
import ScrollUp from "./Components/ScrollUp";

const App = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal--in");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Navigation />
      <ScrollUp />

      <Header />

      <div className="reveal">
        <Features />
      </div>

      <div className="reveal">
        <Services />
      </div>

      <div className="reveal">
        <Portfolio />
      </div>

      <div className="reveal">
        <About />
      </div>

      <div className="reveal">
        <Contact />
      </div>

      <ScrollToTop />
    </div>
  );
};

export default App;