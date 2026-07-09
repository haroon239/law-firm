// components/sections/TeamSection.tsx
import { Scale, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa"

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
];

export function TeamSection() {
    return (
        <section className="w-full bg-neutral-950 py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="w-px h-6 bg-amber-500/50 mx-auto mb-4" />
                    <p className="flex items-center justify-center gap-2 text-amber-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
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

                {/* Team grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="group rounded-lg overflow-hidden border border-amber-500/20 hover:border-amber-500/60 transition-colors duration-300 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.4)]"
                        >
                            {/* Photo */}
                            <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Divider line, matches the gold hairline in reference */}
                            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                            {/* Info */}
                            <div className="p-5 sm:p-6">
                                <h3 className="text-white font-serif text-lg sm:text-xl font-bold leading-snug">
                                    {member.name}
                                </h3>
                                <p className="text-amber-500 text-xs sm:text-sm font-semibold mt-0.5 mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                                    {member.bio}
                                </p>

                                {/* Social icons */}
                                <div className="flex items-center gap-2">

                                    <a href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name}'s LinkedIn profile`}
                                        className="w-8 h-8 rounded-md border border-amber-500/40 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-neutral-900 transition-colors duration-300"
                                    >
                                        <FaLinkedin className="w-4 h-4" strokeWidth={1.75} />
                                    </a>
<a
                                    href={`mailto:${member.email}`}
                                    aria-label={`Email ${member.name}`}
                                    className="w-8 h-8 rounded-md border border-amber-500/40 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-neutral-900 transition-colors duration-300"
>
                                    <Mail className="w-4 h-4" strokeWidth={1.75} />
                                </a>
                            </div>
                        </div>
                        </div>
                    ))}
            </div>

            {/* CTA */}
            {/* <div className="flex justify-center mt-12 sm:mt-16">
                    <button className="bg-gradient-to-b from-amber-300 to-amber-500 text-neutral-900 font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity duration-300">
                        View All Attorneys
                    </button>
                </div> */}
        </div>
        </section >
    );
}