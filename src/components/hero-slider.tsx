"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/assets/home/hero/hero-section-1.jpg",
    alt: "Industrial plant at dusk",
  },
  {
    src: "/assets/home/hero/hero-section-2.jpg",
    alt: "Chevron conveyor belt mold in production",
  },
  {
    src: "/assets/home/hero/hero-section-3.jpg",
    alt: "Sidewall conveyor belt close-up",
  },
] as const;

const autoplayMs = 6500;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const lastIndex = slides.length - 1;

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) {
      return;
    }

    const id = window.setInterval(() => {
      if (document.visibilityState === "hidden") {
        return;
      }
      setCurrent((index) => (index === lastIndex ? 0 : index + 1));
    }, autoplayMs);

    return () => window.clearInterval(id);
  }, [lastIndex, paused, reduceMotion]);

  return (
    <section
      className="hero relative isolate h-[calc(100svh-5.25rem)] min-h-96 w-full max-w-[100vw] overflow-hidden bg-neutral place-items-stretch!"
      aria-roledescription="carousel"
      aria-label="Homepage highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrev();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (start == null || end == null) {
          return;
        }
        const delta = end - start;
        if (delta > 40) {
          goPrev();
        } else if (delta < -40) {
          goNext();
        }
      }}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 ${
              reduceMotion ? "" : "transition-opacity duration-700 ease-out"
            } ${index === current ? "opacity-100" : "opacity-0"}`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover ${
                reduceMotion
                  ? ""
                  : `origin-center transition-transform duration-[8000ms] ease-out ${
                      index === current ? "scale-110" : "scale-100"
                    }`
              }`}
            />
          </div>
        ))}
        <div className="hero-overlay bg-neutral/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral/80 via-neutral/45 to-transparent" />
      </div>

      <div className="hero-content relative z-10 w-full max-w-7xl justify-start px-4 py-16 pb-24 sm:px-16 lg:px-20">
        <div className="max-w-3xl text-neutral-content">
          <span className="mb-6 block h-1 w-16 bg-accent" />
          <h1 className="font-black text-3xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">Your Partner For</span>
            <span className="block">Efficient Maintenance Solutions</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="btn btn-lg btn-primary rounded-full! border-none! px-8 text-primary-content transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
            >
              Learn more
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg btn-success rounded-full! px-8 transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute inset-y-0 left-4 hidden items-center sm:flex lg:left-8">
          <button
            type="button"
            className="btn btn-circle pointer-events-auto border-neutral-content/40 bg-neutral/30 text-neutral-content backdrop-blur-sm hover:border-neutral-content hover:bg-neutral/60"
            aria-label="Previous slide"
            onClick={goPrev}
          >
            <ChevronLeftIcon className="size-5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 hidden items-center sm:flex lg:right-8">
          <button
            type="button"
            className="btn btn-circle pointer-events-auto border-neutral-content/40 bg-neutral/30 text-neutral-content backdrop-blur-sm hover:border-neutral-content hover:bg-neutral/60"
            aria-label="Next slide"
            onClick={goNext}
          >
            <ChevronRightIcon className="size-5" />
          </button>
        </div>

        <div className="pointer-events-auto absolute bottom-6 left-4 flex gap-2 sm:hidden">
          <button
            type="button"
            className="btn btn-circle btn-sm border-neutral-content/40 bg-neutral/30 text-neutral-content backdrop-blur-sm"
            aria-label="Previous slide"
            onClick={goPrev}
          >
            <ChevronLeftIcon className="size-4" />
          </button>
          <button
            type="button"
            className="btn btn-circle btn-sm border-neutral-content/40 bg-neutral/30 text-neutral-content backdrop-blur-sm"
            aria-label="Next slide"
            onClick={goNext}
          >
            <ChevronRightIcon className="size-4" />
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 sm:right-8 sm:bottom-8 sm:left-auto sm:translate-x-0">
          <p className="hidden font-semibold text-neutral-content/80 text-sm tabular-nums sm:block">
            {String(current + 1).padStart(2, "0")}
            <span className="mx-1.5 text-neutral-content/40">/</span>
            {String(slides.length).padStart(2, "0")}
          </p>
          <div className="pointer-events-auto flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-8 bg-accent"
                    : "w-2 bg-neutral-content/45 hover:bg-neutral-content/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
