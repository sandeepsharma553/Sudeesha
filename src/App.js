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
import { Footer } from "./Components/foorter";
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
    <div className="pt-[76px]">
      <Navigation />

      <Header />
      <Features />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;