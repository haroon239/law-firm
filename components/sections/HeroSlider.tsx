"use client";

import { useState, useEffect, useRef } from "react";

interface HeroSlide {
    id: number;
    image: string;
    title: string;
    description: string;
    buttonText: string;
}

const heroSlides: HeroSlide[] = [
    {
        id: 1,
        image: "/images/hero/slider-4.png",
        title: "CONNECT WITH LEGAL EXPERTS",
        description:
            "Easily book a session with our professional legal team for personalized consultation, case evaluation, and strategic support to achieve the best possible outcome.",
        buttonText: "BOOK A SERVICE",
    },
    {
        id: 2,
        image: "/images/hero/slide-2.png",
        title: "PROTECTING YOUR RIGHTS",
        description:
            "We provide comprehensive legal services with decades of experience in handling complex cases with professionalism and dedication to your success.",
        buttonText: "START CONSULTATION",
    },
    {
    id: 3,
    image: "/images/hero/slide-1.png",
    title: "TRUSTED LEGAL REPRESENTATION",
    description:
        "From legal advice to courtroom representation, our experienced attorneys are committed to defending your interests, resolving disputes efficiently, and delivering trusted legal solutions.",
    buttonText: "START CONSULTATION",
}

];

const EXIT_DURATION = 700; // must match the text transition duration below
const AUTOPLAY_INTERVAL = 7000;

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Refs always hold the LATEST values, so the interval callback
    // never reads a stale closure.
    const currentSlideRef = useRef(currentSlide);
    const isAnimatingRef = useRef(isAnimating);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        currentSlideRef.current = currentSlide;
    }, [currentSlide]);

    useEffect(() => {
        isAnimatingRef.current = isAnimating;
    }, [isAnimating]);

    const goToSlide = (index: number) => {
        if (index === currentSlideRef.current || isAnimatingRef.current) return;

        // Step 1: play the exit transition on the current slide
        setIsAnimating(true);
        isAnimatingRef.current = true;

        timeoutRef.current = setTimeout(() => {
            // Step 2: swap the active slide while STILL "isAnimating"
            // so the new slide mounts in its off-screen starting state
            setCurrentSlide(index);
            currentSlideRef.current = index;

            // Step 3: wait for the browser to paint that starting state
            // (double rAF guarantees a paint has happened) before
            // flipping to the "visible" classes
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = requestAnimationFrame(() => {
                    setIsAnimating(false);
                    isAnimatingRef.current = false;
                });
            });
        }, EXIT_DURATION);
    };

    const nextSlide = () => goToSlide((currentSlideRef.current + 1) % heroSlides.length);
    const prevSlide = () =>
        goToSlide((currentSlideRef.current - 1 + heroSlides.length) % heroSlides.length);

    // Autoplay: set up ONCE, always reads latest state via refs, so it
    // never gets stuck on a stale currentSlide/isAnimating snapshot.
   useEffect(() => {
    const timer = setTimeout(() => {
        const next = (currentSlideRef.current + 1) % heroSlides.length;
        goToSlide(next);
    }, AUTOPLAY_INTERVAL);

    return () => clearTimeout(timer);
}, [currentSlide]); // re-arm after every actual slide change

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <section className="group relative w-full h-[100dvh] overflow-hidden bg-black">
            {/* Background Images - crossfade */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative h-full flex items-center">
                <div className="mx-auto max-w-7xl px-6 py-20 w-full lg:px-8">
                    <div className="max-w-2xl">
                        {heroSlides.map((slide, index) => {
                            const isActive = index === currentSlide;
                            const show = isActive && !isAnimating;
                            return (
                                <div key={slide.id} className={`${isActive ? "block" : "hidden"}`}>
                                    <div className="overflow-hidden pb-2">
                                        <h1
                                            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight transition-all duration-700 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                                                }`}
                                        >
                                            {slide.title}
                                        </h1>
                                    </div>

                                    <div className="mt-4 sm:mt-6 overflow-hidden pb-2">
                                        <p
                                            className={`text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-xl transition-all duration-700 ease-out delay-150 ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                                                }`}
                                        >
                                            {slide.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 sm:mt-8 overflow-hidden pb-2">
                                        <button
                                            className={`bg-[#C8A24D] text-white px-6 sm:px-8 py-2.5 sm:py-3 font-bold text-xs sm:text-sm hover:bg-[#8f7743] hover:cursor-pointer transition-all duration-700 ease-out delay-300 ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                                                }`}
                                        >
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows - only visible on hover over the hero section */}
            <button
                onClick={prevSlide}
                className="hidden sm:flex absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 text-white text-2xl md:text-3xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 hover:text-amber-500"
                aria-label="Previous slide"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="hidden sm:flex absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 text-white text-2xl md:text-3xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 hover:text-amber-500"
                aria-label="Next slide"
            >
                ❯
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-10">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ${index === currentSlide
                                ? "bg-amber-500 w-6 md:w-8"
                                : "bg-white/50 hover:bg-white w-2.5 md:w-3"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}