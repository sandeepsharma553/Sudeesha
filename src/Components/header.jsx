import React from "react";

export const Header = () => {
  return (
    <header id="header" className="relative overflow-hidden">
      <div
        className="
          relative min-h-[82vh]
          flex items-center justify-center
          text-center
          bg-[radial-gradient(900px_500px_at_15%_20%,rgba(37,99,235,0.35),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(124,58,237,0.30),transparent_60%),linear-gradient(135deg,#070b14_0%,#0b1535_45%,#070b14_100%)]
        "
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-3xl px-4">
          <div className="text-white/85 text-sm md:text-base mb-3">
            Discover a New Vision for Your Business Solutions
          </div>

          <h1 className="text-white font-black tracking-tight leading-[1.02] text-[44px] md:text-[64px]">
            We <span className="text-sky-400">Digitalize</span>
          </h1>

          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
            The next stage of your digital success begins right here with Sudeesha Solutions.
            We build web & mobile products with scalable APIs, databases, and deployment support.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-xl font-extrabold
                text-white
                bg-gradient-to-br from-blue-600 to-violet-600
                shadow-[0_18px_50px_rgba(37,99,235,0.25)]
                hover:-translate-y-0.5 transition
              "
            >
              Get a Quote
            </a>

            <a
              href="#services"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-xl font-extrabold
                text-white
                bg-white/10 border border-white/25
                hover:bg-white/15 transition
              "
            >
              Our Services
            </a>
          </div>

          <div className="mt-6 text-white/80 font-semibold text-sm md:text-base">
            .NET • Angular • React • React Native • SQL Server • PostgreSQL • Firebase
          </div>
        </div>
      </div>
    </header>
  );
};