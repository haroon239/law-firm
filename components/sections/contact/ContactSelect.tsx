"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface ContactSelectProps {
  name: string;
  placeholder: string;
  options: SelectOption[];
  required?: boolean;
}

export function ContactSelect({
  name,
  placeholder,
  options,
  required = false,
}: ContactSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <div ref={containerRef} className="relative min-w-0">
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border px-4 text-left text-sm outline-none transition ${
          isOpen
            ? "border-amber-400 bg-gradient-to-r from-amber-400/10 via-white/[0.055] to-white/[0.035] ring-2 ring-amber-400/10"
            : "border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.025] hover:border-amber-400/40"
        }`}
      >
        <span className={selectedOption ? "text-white" : "text-slate-500"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-amber-300 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 overflow-hidden rounded-xl border border-amber-300/30 bg-[#121720] p-1.5 shadow-[0_22px_55px_rgba(0,0,0,0.65),0_0_30px_rgba(245,190,72,0.08)]"
        >
          {options.map((option) => {
            const isSelected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setValue(option.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-300 to-[#c99b3d] font-semibold text-neutral-950"
                    : "text-slate-200 hover:bg-white/[0.07] hover:text-amber-200"
                }`}
              >
                {option.label}
                {isSelected && <Check className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
