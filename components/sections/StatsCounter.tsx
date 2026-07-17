// components/sections/StatsCounter.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  suffixColor?: string;
}

const stats: Stat[] = [
  { id: 1, value: 59, suffix: "+", label: "Best attorneys" },
  { id: 2, value: 17, suffix: "+", label: "Years of experience" },
  { id: 3, value: 98, suffix: "%", label: "Cases won", suffixColor: "text-[#D4AF37]" },
  { id: 4, value: 250, suffix: "+", label: "Trusted clients" },
];

function useCountUp(target: number, shouldStart: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(stat.value, isVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-3xl leading-none text-white sm:text-4xl lg:text-5xl">
        {count}
        <span className={`text-xl sm:text-2xl lg:text-3xl ${stat.suffixColor ?? "text-amber-300"}`}>
          {stat.suffix}
        </span>
      </p>
      <p className="mt-2 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="relative w-full overflow-hidden border-y border-amber-400/10 bg-gradient-to-r from-[#080b12] via-[#151a26] to-[#080b12] py-9 sm:py-11">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-2 justify-items-center gap-8 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.id} className="w-full">
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
