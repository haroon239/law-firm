// components/sections/TeamSection.tsx
"use client";

import { useRef, useState } from "react";
import { Scale, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "James Whitfield",
    role: "Managing Partner",
    bio: "Over 15 years guiding clients through complex, high-stakes litigation with clarity and care.",
    image: "/images/team2.png",
    linkedin: "https://linkedin.com/in/james-whitfield",
    email: "haroon116butt@gmail.com",
  },
  {
    id: 2,
    name: "Elemida Karnen",
    role: "Senior Attorney",
    bio: "Senior attorney focused on consultative representation and dedicated client service.",
    image: "/images/team1.png",
    linkedin: "https://linkedin.com/in/elemida-karnen",
    email: "elemida@miakolawfirm.com",
  },
  {
    id: 3,
    name: "Marcus Reyes",
    role: "Corporate Lawyer",
    bio: "Corporate lawyer specializing in cross-border deals and regulatory compliance.",
    image: "/images/team3.png",
    linkedin: "https://linkedin.com/in/marcus-reyes",
    email: "marcus@miakolawfirm.com",
  },
  {
    id: 4,
    name: "Sophia Hader",
    role: "Litigation Specialist",
    bio: "Litigation specialist known for meticulous case preparation and courtroom results.",
    image: "/images/team4.png",
    linkedin: "https://linkedin.com/in/sophia-hader",
    email: "sophia@miakolawfirm.com",
  },
   {
    id: 5,
    name: "Elemida Karnen",
    role: "Senior Attorney",
    bio: "Senior attorney focused on consultative representation and dedicated client service.",
    image: "/images/team1.png",
    linkedin: "https://linkedin.com/in/elemida-karnen",
    email: "elemida@miakolawfirm.com",
  },
  {
    id: 6,
    name: "Marcus Reyes",
    role: "Corporate Lawyer",
    bio: "Corporate lawyer specializing in cross-border deals and regulatory compliance.",
    image: "/images/team3.png",
    linkedin: "https://linkedin.com/in/marcus-reyes",
    email: "marcus@miakolawfirm.com",
  }
];

export function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [isPointerDown, setIsPointerDown] = useState(false);

  const onPointerDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    setIsPointerDown(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const onPointerLeaveOrUp = () => {
    isDragging.current = false;
    setIsPointerDown(false);
  };

  const onPointerMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const scrollByCard = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 24
      : 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#0a0d14] to-[#080b12] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-px h-6 bg-[#C8A24D] mx-auto mb-4" />
          <p className="flex items-center justify-center gap-2 text-[#C8A24D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            <Scale className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2} />
            Our Legal Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
            Meet the Experts Protecting Your Rights
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The firm&apos;s experienced attorneys are committed to providing
            strategic legal guidance, trusted representation, and exceptional
            client service.
          </p>
        </div>

        {/* Scrollable team row */}
        <div className="relative">
          {/* Left/right nav arrows */}
          <button
            onClick={() => scrollByCard("left")}
            aria-label="Scroll left"
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-900 border border-amber-500/40 items-center justify-center text-[#C8A24D] hover:bg-[#9e751e] hover:text-neutral-900 transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollByCard("right")}
            aria-label="Scroll right"
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-900 border border-amber-500/40 items-center justify-center text-[#C8A24D] hover:bg-[#aa8026] hover:text-neutral-900 transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            onMouseDown={onPointerDown}
            onMouseLeave={onPointerLeaveOrUp}
            onMouseUp={onPointerLeaveOrUp}
            onMouseMove={onPointerMove}
            className={`flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isPointerDown ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {team.map((member) => (
              <div
                key={member.id}
                className="group shrink-0 w-[260px] sm:w-[280px] lg:w-[300px] rounded-lg overflow-hidden border border-amber-500/20 hover:border-amber-500/60 transition-colors duration-300 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.4)]"
              >
                {/* Photo */}
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden pointer-events-none">
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Divider line */}
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                {/* Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-white font-serif text-lg sm:text-xl font-bold leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[#C8A24D] text-xs sm:text-sm font-semibold mt-0.5 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social icons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      className="w-8 h-8 rounded-md border border-amber-500/40 flex items-center justify-center text-[#C8A24D] hover:bg-[#a37d29] hover:text-neutral-900 transition-colors duration-300"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="w-8 h-8 rounded-md border border-amber-500/40 flex items-center justify-center text-[#C8A24D] hover:bg-[#a07927] hover:text-neutral-900 transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" strokeWidth={1.75} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
