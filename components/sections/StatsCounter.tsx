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
      <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-none">
        {count}
        <span className={`text-xl sm:text-2xl lg:text-3xl ${stat.suffixColor ?? "text-neutral-900"}`}>
          {stat.suffix}
        </span>
      </p>
      <p className="text-gray-500 text-xs sm:text-sm mt-2">{stat.label}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="w-full bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}