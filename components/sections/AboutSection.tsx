// components/sections/AboutSection.tsx
import { Gavel, HeartHandshake, Scale, Award } from "lucide-react";

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
}

const features: Feature[] = [
    {
        id: 1,
        title: "Proven Litigation Success",
        description: "A strong record of favorable outcomes in complex cases.",
        icon: Gavel,
    },
    {
        id: 2,
        title: "Client-Focused Representation",
        description: "Personal attention and clear communication throughout.",
        icon: HeartHandshake,
    },
    {
        id: 3,
        title: "Complex Corporate Solutions",
        description: "Strategic counsel for high-stakes corporate matters.",
        icon: Scale,
    },
    {
        id: 4,
        title: "Award-Winning Practice",
        description: "Recognized for excellence across multiple disciplines.",
        icon: Award,
    },
];

export function AboutSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#0B0B0B] to-[#111827] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
            {/* subtle corner accent lines, matches the gold linework in the reference */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-amber-500/40" />
                <div className="absolute bottom-0 right-0 w-40 h-40 border-b border-r border-amber-500/40" />
            </div>

            <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-16 xl:gap-20 items-center">
                    {/* Image column */}
                    {/* Image column */}
                    <div className="relative flex justify-center xl:justify-start">
                        <div className="relative w-full rounded-2xl overflow-hidden border border-[#C8A24D]/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)] h-[300px] sm:h-[420px] md:h-[520px] xl:h-[720px]">
                            <img
                                src="/images/office-1.png"
                                alt="Law Firm Office"
                                className="w-full h-full object-cover"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Premium Badge */}
                        {/* <div className="absolute -top-5 -left-3 sm:-top-6 sm:-left-6 bg-gradient-to-br from-[#F8E7A1] via-[#D4AF37] to-[#B8860B] text-black rounded-2xl px-6 py-5 text-center shadow-2xl border border-white/20 w-36 sm:w-40">
                            <p className="text-4xl sm:text-5xl font-black leading-none">
                                15+
                            </p>

                            <p className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider leading-tight">
                                Years of Legal Excellence
                            </p>

                            <div className="flex justify-center mt-3">
                                <Award className="w-5 h-5" />
                            </div>
                        </div> */}
                    </div>

                    {/* Content column */}
                    <div>
                        <p className="text-amber-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
                            ⚖ About the Firm
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl max-w-xl font-serif font-bold text-white leading-tight mb-6">
                            Experience, Integrity, &amp; Dedicated Client Success
                        </h2>
                        <p className="text-gray-300 text-base leading-8 max-w-xl mb-10">
                            Founded by industry leaders, our firm combines deep legal
                            expertise with a commitment to client outcomes. For over 15
                            years, we&apos;ve provided strategic, high-stakes representation
                            in complex litigation, corporate law, and intellectual property.
                        </p>

                        {/* Feature grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={feature.id}
                                        className="group rounded-xl border border-[#C8A24D]/20 bg-[#141414] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A24D] hover:shadow-[0_12px_35px_rgba(200,162,77,.18)]"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-amber-500/10 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-[#C8A24D] group-hover:text-black transition-all duration-300" />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm sm:text-base leading-snug">
                                                    {feature.title}
                                                </p>
                                                <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-snug">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <button className="rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C8A24D] px-8 py-4 font-bold text-black shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                Meet Our Attorneys
                            </button>

                            <button className="rounded-xl border border-[#C8A24D] px-8 py-4 font-bold text-white hover:bg-[#C8A24D] hover:text-black transition-all duration-300">
                                Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}