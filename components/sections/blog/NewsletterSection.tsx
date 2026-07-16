// components/sections/blog/NewsletterSection.tsx
"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
  };

  return (
    <section className="w-full bg-[#111827] py-12 sm:py-16 relative">
      {/* top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border border-[#D4AF37]/25 rounded-2xl bg-neutral-900/50 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left: heading */}
            <div className="text-center lg:text-left lg:flex-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Newsletter
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Encourage subscription for your legal legal insights.
              </p>
            </div>

            {/* Right: description + form */}
            <div className="lg:flex-1 w-full">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5 text-center lg:text-left">
                Elegant subscription form with smooth animations and
                interactive elements.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-3"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-neutral-950/60 border border-[#D4AF37]/30 rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#D4AF37]/70 transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-b from-[#C8A24D] to-[#D4AF37] text-[#111827] font-bold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}