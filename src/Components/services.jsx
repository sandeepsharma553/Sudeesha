import React from "react";

export const Services = () => {
  const services = [
    {
      icon: "fa fa-desktop",
      name: "Web Development",
      text: "Custom websites, dashboards, admin panels, portals, CRM/ERP modules, and web applications tailored to your business.",
    },
    {
      icon: "fa fa-mobile",
      name: "Mobile App Development",
      text: "Cross-platform mobile apps (Android & iOS) using React Native with smooth UX and scalable backend integration.",
    },
    {
      icon: "fa fa-exchange",
      name: "Backend & API Development",
      text: "Robust REST APIs using .NET / .NET Core with authentication, role-based access, and integration-ready architecture.",
    },
    {
      icon: "fa fa-database",
      name: "Database Solutions",
      text: "SQL Server, PostgreSQL, Firebase (Firestore/Realtime) database design, optimization, and data management.",
    },
    {
      icon: "fa fa-cloud",
      name: "Hosting & Deployment",
      text: "Domain/DNS/SSL setup, cloud hosting, server deployment, CI/CD guidance, and production monitoring support.",
    },
    {
      icon: "fa fa-wrench",
      name: "Maintenance & Support",
      text: "Ongoing maintenance, feature upgrades, security patches, and performance tuning for long-term reliability.",
    },
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>End-to-end development: Web, Mobile, APIs, Databases, Hosting & Support.</p>
        </div>

        <div className="row">
          {services.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-xs-12 col-sm-6 col-md-4">
              <div className="service-desc" style={{ padding: 22, borderRadius: 18 }}>
                <i className={d.icon} style={{ fontSize: 44, marginBottom: 12, color: "#2563eb" }}></i>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};