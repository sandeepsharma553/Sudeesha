import React from "react";
import {
  Monitor,
  Smartphone,
  ArrowLeftRight,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Monitor,
      name: "Web Development",
      text: "Custom websites, dashboards, admin panels, portals, CRM/ERP modules, and web applications tailored to your business.",
    },
    {
      icon: Smartphone,
      name: "Mobile App Development",
      text: "Cross-platform mobile apps (Android & iOS) using React Native with smooth UX and scalable backend integration.",
    },
    {
      icon: ArrowLeftRight,
      name: "Backend & API Development",
      text: "Robust REST APIs using .NET / .NET Core with authentication, role-based access, and integration-ready architecture.",
    },
    {
      icon: Database,
      name: "Database Solutions",
      text: "SQL Server, PostgreSQL, Firebase (Firestore/Realtime) database design, optimization, and data management.",
    },
    {
      icon: Cloud,
      name: "Hosting & Deployment",
      text: "Domain/DNS/SSL setup, cloud hosting, server deployment, CI/CD guidance, and production monitoring support.",
    },
    {
      icon: Wrench,
      name: "Maintenance & Support",
      text: "Ongoing maintenance, feature upgrades, security patches, and performance tuning for long-term reliability.",
    },
  ];

  return (
    <section id="services" className="bg-white text-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-slate-600">
            End-to-end development: Web, Mobile, APIs, Databases, Hosting & Support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={`${s.name}-${i}`}
                className="
                  group text-center
                  rounded-3xl p-8 bg-slate-50
                  border border-slate-200
                  shadow-[0_16px_45px_rgba(2,6,23,0.06)]
                  hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(2,6,23,0.10)]
                  transition
                "
              >
                {/* Icon */}
                <div className="mx-auto h-14 w-14 rounded-2xl bg-blue-600/10 border border-blue-600/15 flex items-center justify-center mb-6">
                  <Icon
                    className="h-7 w-7 text-blue-600 group-hover:scale-110 transition"
                    strokeWidth={2.5}
                  />
                </div>

                <h3 className="text-lg font-black">{s.name}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};