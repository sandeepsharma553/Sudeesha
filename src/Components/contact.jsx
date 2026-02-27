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

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition";

  return (
    <div>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-[linear-gradient(180deg,rgba(37,99,235,0.06),rgba(124,58,237,0.04))]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">
                Get In Touch
              </h2>
              <p className="mt-3 text-slate-600">
                Tell us about your project. We’ll reply quickly with a plan & estimate.
              </p>
            </div>

            <form name="sentMessage" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={inputBase}
                  placeholder="Name"
                  required
                  value={name}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  className={inputBase}
                  placeholder="Email"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                id="message"
                className={`${inputBase} min-h-[140px] resize-none`}
                placeholder="Message"
                required
                value={message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-xl font-extrabold
                  text-white
                  bg-gradient-to-br from-blue-600 to-violet-600
                  shadow-[0_18px_50px_rgba(37,99,235,0.25)]
                  hover:-translate-y-0.5 transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
};