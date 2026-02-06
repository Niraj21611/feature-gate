"use client";

import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import ProductPreview from "./components/ProductPreview";
import UseCases from "./components/UseCases";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal-text");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <ProductPreview />
        <UseCases />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
