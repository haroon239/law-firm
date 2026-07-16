import TeamSidebar from "./TeamSidebar";
import TeamCard from "./TeamCard";
import { teamMembers } from "./TeamData";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative isolate overflow-x-clip border-y border-white/5 bg-[#080b12] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-amber-500/8 blur-[120px]" />
        <div className="absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-yellow-500/6 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      </div>

      <div className="relative mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 min-w-0 lg:hidden">
          <TeamSidebar />
        </div>

        <div className="grid min-w-0 gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-10 xl:gap-16">
          <aside className="hidden lg:col-span-5 lg:block lg:self-stretch">
            <div className="sticky top-28 py-4">
              <TeamSidebar />
            </div>
          </aside>

          <div className="min-w-0 space-y-12 sm:space-y-16 lg:col-span-7 lg:space-y-0">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="relative min-w-0 lg:sticky lg:top-28 lg:flex lg:min-h-[calc(100svh-7rem)] lg:items-center lg:py-5"
                style={{ zIndex: index + 1 }}
              >
                <TeamCard
                  member={member}
                  index={index}
                  total={teamMembers.length}
                />
              </div>
            ))}
            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-[calc(100svh-7rem)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
