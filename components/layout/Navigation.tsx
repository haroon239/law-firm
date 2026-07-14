"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["HOME", "ABOUT", "PRACTICE AREA", "PAGE", "ELEMENT", "BLOG", "CONTACT"];

export function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`${isSticky
      ? "fixed top-0 left-0 right-0 z-50 bg-[#111827] shadow-md"
      : "absolute top-0 md:top-[-17px] left-0 right-0 z-30 bg-[#111827] md:bg-transparent"
    } transition-all duration-300`}
>
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
        <div className="relative flex items-stretch justify-between bg-[#111827] rounded-none sm:rounded-md shadow-lg">

          {/* Mobile-only logo, left side */}
          <div className="flex lg:hidden items-center py-3 pl-4">
            <img
              src="/images/logo.jpeg"
              alt="AG&R Law Firm"
              className="h-10 w-10 rounded-full border-2 border-[#C8A24D] object-cover"
            />
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6 py-5 pl-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-semibold text-sm hover:text-[#C8A24D] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile hamburger, right side */}
          <div className="flex lg:hidden items-center py-4 pr-4">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="text-white p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* FREE CONSULTING — desktop only now */}
          {!isSticky && (
            <div
              className="hidden lg:flex items-center bg-[#C8A24D] pl-6 pr-4 sm:pl-10 sm:pr-8"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <button className="text-white font-bold text-[10px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap hover:text-[#C8A24D] transition-all duration-500 ease-in-out">
                FREE CONSULTING
              </button>
            </div>
          )}

          {isSticky && (
            <div className="invisible hidden lg:flex items-center pl-16 pr-12 py-3">
              <span className="text-sm md:text-base font-bold tracking-wide whitespace-nowrap">
                FREE CONSULTING
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-gray-700">
          <div className="flex flex-col px-4 py-3 gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-white font-semibold text-sm hover:text-[#C8A24D] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Sticky state, desktop only: FREE CONSULTING pinned right */}
      {isSticky && (
        <div
          className="hidden lg:flex absolute top-0 bottom-0 right-0 items-center bg-[#C8A24D] pl-8 pr-6 py-3 md:pl-16 md:pr-12"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <button className="text-[#111827] font-bold text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap hover:text-white transition-all duration-500 ease-in-out">
            FREE CONSULTING
          </button>
        </div>
      )}
    </nav>
  );
}