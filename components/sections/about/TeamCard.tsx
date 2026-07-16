import Image from "next/image";
import { Check, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { TeamMember } from "./TeamData";

interface TeamCardProps {
  member: TeamMember;
  index: number;
  total: number;
}

const mobilePortraitClasses = [
  "max-sm:scale-[1.12] max-sm:translate-x-[3%]",
  "max-sm:scale-[1.14] max-sm:-translate-x-[2%]",
  "max-sm:scale-[1.14] max-sm:-translate-x-[3%]",
  "max-sm:scale-[1.2] max-sm:-translate-x-[12%]",
];

export default function TeamCard({
  member,
  index,
  total,
}: TeamCardProps) {
  return (
    <article className="group relative w-full min-w-0 max-w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d111b] shadow-[0_30px_80px_-35px_rgba(0,0,0,0.9)] transition duration-500 hover:border-amber-400/30 lg:grid lg:h-[calc(100svh-8rem)] lg:min-h-[540px] lg:max-h-[650px] lg:grid-cols-[42%_58%]">
      <div className="absolute right-4 top-4 z-20 rounded-full border border-amber-400/30 bg-black/65 px-3 py-1.5 backdrop-blur-md sm:right-6 sm:top-6">
        <span className="text-xs font-semibold tracking-wider text-amber-400 sm:text-sm">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="relative aspect-[4/3] min-h-[300px] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 1023px) 100vw, 58vw"
          className={`object-cover object-[center_top] transition duration-700 sm:group-hover:scale-[1.025] lg:object-center ${mobilePortraitClasses[index] ?? ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d111b] via-black/5 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0d111b]/25" />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:hidden">
          <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-amber-400 sm:text-xs">
            {member.position}
          </p>
          <h3 className="break-words font-serif text-2xl font-bold text-white sm:text-4xl">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            {member.experience} Experience
          </p>
        </div>
      </div>

      <div className="flex min-w-0 max-w-full flex-col justify-center p-5 sm:p-8 lg:p-6 xl:p-7">
        <div className="mb-5 hidden lg:block">
          <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-amber-400 xl:text-xs">
            {member.position}
          </p>
          <h3 className="font-serif text-3xl font-bold leading-tight text-white xl:text-4xl">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            {member.experience} Experience
          </p>
        </div>

        <p className="mb-6 max-w-full break-words text-sm leading-7 text-slate-300 sm:text-base lg:mb-4 lg:leading-6">
          {member.description}
        </p>

        <div className="mb-7 grid gap-2 sm:grid-cols-2 sm:gap-3 lg:mb-5 lg:gap-2">
          {member.specialties.map((item) => (
            <div
              key={item}
              className="flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 bg-black/20 px-3.5 py-3 lg:py-2.5"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                <Check className="h-3.5 w-3.5 text-amber-400" />
              </span>
              <span className="min-w-0 break-words text-sm text-slate-100">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between lg:pt-5">
          <button className="rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:brightness-110">
            Book Consultation
          </button>
          <div className="flex gap-2">
            <button
              aria-label={`${member.name} on LinkedIn`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"
            >
              <FaLinkedin size={18} />
            </button>
            <button
              aria-label={`Email ${member.name}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-amber-400 hover:bg-amber-400 hover:text-black"
            >
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
