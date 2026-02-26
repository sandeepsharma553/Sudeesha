import React from "react";

export const About = () => {
  const why = [
    "Scalable & maintainable architecture",
    "Transparent communication & timelines",
    "Dedicated 5-member delivery team",
  ];

  const why2 = [
    "Security-first development practices",
    "End-to-end support (Dev + Hosting + Domain)",
    "Quality-focused delivery & testing",
  ];

  return (
    <div id="about">
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="About Sudeesha Solutions" />
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Sudeesha Solutions is an India-based software development company focused on building secure,
                scalable, and high-performance digital products. We deliver web applications, mobile apps,
                backend APIs, database solutions, and deployment support for startups and businesses.
              </p>

              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>{why.map((d, i) => <li key={i}>{d}</li>)}</ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>{why2.map((d, i) => <li key={i}>{d}</li>)}</ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};