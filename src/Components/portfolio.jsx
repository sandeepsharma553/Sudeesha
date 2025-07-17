import React from "react";

export const Portfolio = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our portfolio</h2>
          <p>
          Explore our portfolio to discover how we've helped businesses like yours thrive through technology.  Whether you're a startup or an established enterprise, our IT solutions are tailored to your unique needs.
          </p>
        </div>
        <div className="row">
        <div className="gallery-items">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <img src={d.img} alt="" className="i.fa" />{" "}
                 
                  <div className="portfolio-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
            </div>
        </div>
      </div>
    </div>
  );
};
