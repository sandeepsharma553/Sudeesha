import React from "react";

export const Portfolio = () => {
  const projects = [
    { name: "KYC360", type: "Angular + .NET Core + SQL Server", text: "KYC management web application with secure workflows and admin controls.", img: "img/portfolio/kyc360.png" },
    { name: "Ticket Booking System", type: "Angular + .NET Core + SQL Server", text: "Booking platform with admin dashboard, listings management, and reporting.", img: "img/portfolio/tbs.jpg" },
    { name: "Himachal Gramin Hut", type: "React Native + .NET Core", text: "Mobile-first platform with backend APIs and database-driven content management.", img: "img/portfolio/hgh.jpg" },
    { name: "Services App", type: "React Native + .NET Core", text: "Service management mobile app with authentication and backend integration.", img: "img/portfolio/esms.jpg" },
    { name: "MyMor", type: "React Native + Firebase", text: "Community platform with real-time features and scalable Firebase backend.", img: "img/portfolio/mymor.jpeg" },
  ];

  return (
    <section id="portfolio" className="bg-white text-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Our Work</h2>
          <p className="mt-3 text-slate-600">
            Selected projects delivered across web, mobile, backend APIs, and databases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="
                rounded-3xl p-4 bg-white
                border border-slate-200
                shadow-[0_16px_45px_rgba(2,6,23,0.06)]
                hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(2,6,23,0.10)]
                transition
              "
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[220px] object-cover rounded-2xl"
              />

              <div className="pt-4">
                <h3 className="text-lg font-black">{p.name}</h3>
                <p className="mt-1 font-bold text-slate-500">{p.type}</p>
                <p className="mt-2 text-slate-600 leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};