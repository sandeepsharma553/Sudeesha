import React from "react";

export const Features = () => {
  const features = [
    {
      icon: "fa fa-code",
      title: "Clean & Scalable Code",
      text: "Maintainable architecture that supports future growth without frequent rework.",
    },
    {
      icon: "fa fa-shield",
      title: "Security-First Development",
      text: "Secure APIs, authentication best practices, and data protection across the stack.",
    },
    {
      icon: "fa fa-clock-o",
      title: "On-Time Delivery",
      text: "Milestone-based planning with clear timelines and regular progress updates.",
    },
    {
      icon: "fa fa-cloud",
      title: "Deployment & Hosting",
      text: "Domain/DNS/SSL setup, server deployment, cloud hosting and production support.",
    },
    {
      icon: "fa fa-database",
      title: "Database Expertise",
      text: "SQL Server, PostgreSQL, Firebase (Firestore/Realtime) design & optimization.",
    },
    {
      icon: "fa fa-support",
      title: "Support & Maintenance",
      text: "Post-launch support, bug fixes, enhancements, and performance tuning.",
    },
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Why Sudeesha Solutions</h2>
          <p>Reliable delivery, modern tech stack, and long-term support.</p>
        </div>

        <div className="row">
          {features.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-4">
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};