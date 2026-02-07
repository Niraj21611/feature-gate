"use client";

import { motion, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";
import VideoFallback from "./VideoFallback";

export default function SpiritualHero() {
  const prefersReducedMotion = useReducedMotion();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload video
    const video = document.createElement("video");
    video.src = "/hero-video.mp4";
    video.onloadeddata = () => setVideoLoaded(true);
  }, []);

  // Word-by-word reveal animation
  const words = "A place to learn, read, and remember".split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.12,
            delayChildren: 0.4,
          },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#EFEDE7] flex items-center justify-center px-6 lg:px-8 pt-4">
      <div className="w-full max-w-9xl mx-auto py-16 lg:py-20">
        {/* Rounded Hero Container */}
        <div className="relative overflow-hidden rounded-[32px] lg:rounded-[36px] h-[500px] lg:h-[680px] shadow-2xl shadow-earth-dark/8">
          {/* Fallback gradient (shows before video loads) */}
          {!videoLoaded && <VideoFallback />}

          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoLoaded(false)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Soft Overlay */}
          {/* Atmospheric Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            {/* Sand / parchment glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,236,220,0.35),rgba(245,236,220,0.18),rgba(245,236,220,0.06))]" />

            {/* Soft noir vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/25" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 lg:px-12">
            {/* Animated Heading */}
            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl xl:text-5xl text-earth-dark leading-[1.15] tracking-tight mb-6 lg:mb-2 max-w-4xl"
              style={{ fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <motion.span
                    variants={wordVariant}
                    className="inline-block text-[#2B2A28] mr-[0.3em]"
                  >
                    {word}
                  </motion.span>

                  {/* Insert line break after 5th word */}
                  {index === 4 && <br />}
                </React.Fragment>
              ))}
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 1.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 1.8,
                    }
              }
              className="text-[#5F5B55] lg:text-lg text-stone-gray max-w-[520px] leading-relaxed mb-10 lg:mb-6"
            >
              Courses, teachings, and books to support inner growth, mindful
              study, and spiritual practice.
            </motion.p>

            {/* Call to Action */}
            <motion.a
              href="#explore"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 2.2,
                    }
              }
              className="inline-flex items-center justify-center px-8 lg:px-10 py-3.5 lg:py-4 bg-[#1F1E1C] text-soft-white text-[15px] lg:text-base font-medium rounded-full hover:bg-stone-gray transition-all duration-500 hover:shadow-xl hover:shadow-earth-dark/15 hover:-translate-y-0.5"
            >
              Begin learning
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
