import React from "react";

export const Portfolio = () => {
  const projects = [
    {
      name: "KYC360",
      type: "Angular + .NET Core + SQL Server",
      text: "KYC management web application with secure workflows and admin controls.",
      img: "img/portfolio/kyc360.png",
    },
    {
      name: "Ticket Booking System",
      type: "Angular + .NET Core + SQL Server",
      text: "Booking platform with admin dashboard, listings management, and reporting.",
      img: "img/portfolio/tbs.jpg",
    },
    {
      name: "Himachal Gramin Hut",
      type: "React Native + .NET Core",
      text: "Mobile-first platform with backend APIs and database-driven content management.",
      img: "img/portfolio/hgh.jpg",
    },
    {
      name: "Services App",
      type: "React Native + .NET Core",
      text: "Service management mobile app with authentication and backend integration.",
      img: "img/portfolio/esms.jpg",
    },
    {
      name: "MyMor",
      type: "React Native + Firebase",
      text: "Community platform with real-time features and scalable Firebase backend.",
      img: "img/portfolio/mymor.jpeg",
    },
  ];

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Work</h2>
          <p>Selected projects delivered across web, mobile, backend APIs, and databases.</p>
        </div>

        <div className="row">
          {projects.map((p, i) => (
            <div key={`${p.name}-${i}`} className="col-xs-12 col-sm-6 col-md-4">
              <div className="portfolio-item" style={{ padding: 14, borderRadius: 18 }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="img-responsive"
                  style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 16 }}
                />

                <div className="portfolio-desc" style={{ paddingTop: 12 }}>
                  <h3 style={{ marginBottom: 6 }}>{p.name}</h3>
                  <p style={{ fontWeight: 700, opacity: 0.75, marginBottom: 8 }}>{p.type}</p>
                  <p>{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};