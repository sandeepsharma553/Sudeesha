import React from "react";
import {
  Code2,
  ShieldCheck,
  Clock,
  Cloud,
  Database,
  Wrench,
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean & Scalable Code",
      text: "Maintainable architecture that supports future growth without frequent rework.",
    },
    {
      icon: ShieldCheck,
      title: "Security-First Development",
      text: "Secure APIs, authentication best practices, and data protection across the stack.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      text: "Milestone-based planning with clear timelines and regular progress updates.",
    },
    {
      icon: Cloud,
      title: "Deployment & Hosting",
      text: "Domain/DNS/SSL setup, server deployment, cloud hosting and production support.",
    },
    {
      icon: Database,
      title: "Database Expertise",
      text: "SQL Server, PostgreSQL, Firebase (Firestore/Realtime) design & optimization.",
    },
    {
      icon: Wrench,
      title: "Support & Maintenance",
      text: "Post-launch support, bug fixes, enhancements, and performance tuning.",
    },
  ];

  return (
    <section id="features" className="bg-white text-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Why Sudeesha Solutions
          </h2>
          <p className="mt-3 text-slate-600">
            Reliable delivery, modern tech stack, and long-term support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={`${f.title}-${i}`}
                className="
                group
                bg-white rounded-3xl p-8 text-center
                border border-slate-200
                shadow-[0_14px_40px_rgba(2,6,23,0.06)]
                hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(2,6,23,0.12)]
                transition
              "
              >
                {/* Icon - perfectly centered */}
                <div className="mx-auto h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:scale-110 transition" strokeWidth={2.5} />
                </div>

                <h3 className="text-lg font-black">{f.title}</h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};