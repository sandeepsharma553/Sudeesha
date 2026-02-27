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
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="img/about/aboutus.png"
              alt="About Sudeesha Solutions"
              className="w-full rounded-3xl shadow-[0_18px_50px_rgba(2,6,23,0.12)] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">About Us</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Sudeesha Solutions is an India-based software development company focused on building secure,
              scalable, and high-performance digital products. We deliver web applications, mobile apps,
              backend APIs, database solutions, and deployment support for startups and businesses.
            </p>

            <h3 className="mt-8 text-xl font-black">Why Choose Us?</h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-700">
                {why.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2 text-slate-700">
                {why2.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-600" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};