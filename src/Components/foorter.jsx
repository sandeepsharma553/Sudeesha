import React from "react";

export const Footer = () => {

    return (
        <div
            id="footer2"
            className="
          text-white/85 pt-16
          bg-[radial-gradient(900px_500px_at_15%_20%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(124,58,237,0.14),transparent_60%),linear-gradient(135deg,#070b14_0%,#0b1535_45%,#070b14_100%)]
        "
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Col 1 */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <img src="img/logo/logo1 - Copy.jpg" alt="Sudeesha" className="h-12 w-auto" />
                            <div>
                                <div className="text-white font-black text-lg">SUDEESHA SOLUTIONS</div>
                                <div className="text-white/70">Empowered by Innovation...</div>
                            </div>
                        </div>

                        <h4 className="text-white font-black text-lg mb-3">Office Address</h4>
                        <div className="space-y-2 text-white/75">
                            <div>📍 Chandigarh, India</div>
                            <div>✉️ sudeesha23@gmail.com</div>
                            <div>📞 +91 9646832734</div>
                        </div>

                        <div className="mt-5 text-white font-extrabold">Get In Touch With Us!</div>
                        <div className="mt-3 flex flex-wrap gap-3">
                            {[
                                ["in", "https://www.linkedin.com/company/sudeesha-solutions"],
                                ["f", "https://www.facebook.com/profile.php?id=61559863916281"],
                                ["ig", "https://www.instagram.com/sudeesha23/"],
                                ["yt", "https://www.youtube.com/@Sudeesha23"],
                                ["x", "https://twitter.com/sudeesha23"],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                      h-12 w-12 rounded-2xl grid place-items-center
                      bg-white/5 border border-white/15
                      shadow-[0_14px_40px_rgba(0,0,0,0.18)]
                      hover:-translate-y-0.5 hover:bg-white/10 transition
                    "
                                >
                                    <span className="font-black text-white">{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="text-white font-black text-lg mb-3">Popular Categories</h4>
                        <div className="space-y-2">
                            {[
                                "Web Development",
                                "Mobile App Development",
                                "Backend & API Development",
                                "Database Solutions",
                                "Hosting & Deployment",
                                "Maintenance & Support",
                            ].map((t) => (
                                <a
                                    key={t}
                                    href="#services"
                                    className="block w-fit text-white/70 font-bold hover:text-white hover:translate-x-1 transition"
                                >
                                    {t}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="text-white font-black text-lg mb-3">Technologies</h4>
                        <div className="space-y-2">
                            {[
                                ".NET / .NET Core",
                                "Angular",
                                "React",
                                "React Native",
                                "SQL Server",
                                "PostgreSQL",
                                "Firebase",
                            ].map((t) => (
                                <a
                                    key={t}
                                    href="#services"
                                    className="block w-fit text-white/70 font-bold hover:text-white hover:translate-x-1 transition"
                                >
                                    {t}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 py-6 text-center text-white/70 font-bold">
                    © {new Date().getFullYear()} Sudeesha Solutions | All rights reserved
                </div>
            </div>
        </div>
    );
};