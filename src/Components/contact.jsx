import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = { name: "", email: "", message: "" };

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((p) => ({ ...p, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fatd7wn", "template_dkfzg8z", e.target, "dW6FE4FdGGvC8bPb0")
      .then(
        () => {
          clearState();
          alert("Message sent successfully!");
        },
        () => alert("Failed to send. Please try again.")
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">

          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Tell us about your project. We’ll reply quickly with a plan & estimate.</p>
              </div>

              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span><i className="fa fa-map-marker"></i> Address</span>
                Chandigarh, India
              </p>
            </div>

            <div className="contact-item">
              <p>
                <span><i className="fa fa-phone"></i> Phone</span> +91 9646832734
              </p>
            </div>

            <div className="contact-item">
              <p>
                <span><i className="fa fa-envelope-o"></i> Email</span> sudeesha23@gmail.com
              </p>
            </div>

            <div className="contact-item">
              <p>
                <span><i className="fa fa-globe"></i> Website</span>{" "}
                <a href="https://sudeesha.com/" target="_blank" rel="noreferrer">
                  https://sudeesha.com/
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li><a href="https://www.facebook.com/profile.php?id=61559863916281" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com/sudeesha23" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.youtube.com/@Sudeesha23" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a></li>
                  <li><a href="https://www.instagram.com/sudeesha23/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/sudeesha-solutions" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ✅ Senwell-style Footer */}
      <div id="footer2">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <img src="img/logo/logo1 - Copy.jpg" alt="Sudeesha" style={{ height: 46 }} />
                <div>
                  <div style={{ color: "#fff", fontWeight: 900, fontSize: 18 }}>SUDEESHA SOLUTIONS</div>
                  <div style={{ opacity: 0.75 }}>Empowered by Innovation...</div>
                </div>
              </div>

              <h4>Office Address</h4>
              <p><i className="fa fa-map-marker"></i> Chandigarh, India</p>
              <p><i className="fa fa-envelope"></i> sudeesha23@gmail.com</p>
              <p><i className="fa fa-phone"></i> +91 9646832734</p>

              <div style={{ marginTop: 18, color: "#fff", fontWeight: 800 }}>Get In Touch With Us!</div>
              <div className="social2" style={{ marginTop: 12 }}>
                <a href="https://www.linkedin.com/company/sudeesha-solutions" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61559863916281" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/sudeesha23/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/@Sudeesha23" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>
                <a href="https://twitter.com/sudeesha23" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
              </div>
            </div>

            <div className="col-md-4">
              <h4>Popular Categories</h4>
              <div className="f-list">
                <a href="#services" className="page-scroll">Web Development</a>
                <a href="#services" className="page-scroll">Mobile App Development</a>
                <a href="#services" className="page-scroll">Backend & API Development</a>
                <a href="#services" className="page-scroll">Database Solutions</a>
                <a href="#services" className="page-scroll">Hosting & Deployment</a>
                <a href="#services" className="page-scroll">Maintenance & Support</a>
              </div>
            </div>

            <div className="col-md-4">
              <h4>Technologies</h4>
              <div className="f-list">
                <a href="#services" className="page-scroll">.NET / .NET Core</a>
                <a href="#services" className="page-scroll">Angular</a>
                <a href="#services" className="page-scroll">React</a>
                <a href="#services" className="page-scroll">React Native</a>
                <a href="#services" className="page-scroll">SQL Server</a>
                <a href="#services" className="page-scroll">PostgreSQL</a>
                <a href="#services" className="page-scroll">Firebase</a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} Sudeesha Solutions | All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};