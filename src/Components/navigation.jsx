import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a className="navbar-brand page-scroll" href="#header" style={{ padding: 0 }}>
            <div style={{ display: "flex", alignItems: "center", height: 70 }}>
              <img
                src="img/logo/logo1 - Copy.jpg"
                alt="Sudeesha Solutions"
                style={{ height: 54, width: "auto", objectFit: "contain", marginLeft: 8 }}
              />
            </div>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#header" className="page-scroll">Home</a></li>
            <li><a href="#features" className="page-scroll">Why Us</a></li>
            <li><a href="#services" className="page-scroll">Services</a></li>
            <li><a href="#portfolio" className="page-scroll">Our Work</a></li>
            <li><a href="#about" className="page-scroll">About</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};