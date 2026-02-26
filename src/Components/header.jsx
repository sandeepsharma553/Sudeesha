import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro-text">
                <div style={{ opacity: 0.9, marginBottom: 10 }}>
                  Discover a New Vision for Your Business Solutions
                </div>

                <h1>
                  We <span style={{ color: "#60a5fa" }}>Digitalize</span>
                  <span></span>
                </h1>

                <p>
                  The next stage of your digital success begins right here with Sudeesha Solutions.
                  We build web & mobile products with scalable APIs, databases, and deployment support.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#contact" className="btn btn-custom btn-lg page-scroll">
                    Get a Quote
                  </a>
                  <a href="#services" className="btn btn-default btn-lg page-scroll">
                    Our Services
                  </a>
                </div>

                <div style={{ marginTop: 18, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                  .NET • Angular • React • React Native • SQL Server • PostgreSQL • Firebase
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};