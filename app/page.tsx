"use client";

import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navigation from "@/components/landing/Navigation";
import Pricing from "@/components/landing/Pricing";
import ProductPreview from "@/components/landing/ProductPreview";
import SocialProof from "@/components/landing/SocialProof";
import UseCases from "@/components/landing/UseCases";
import { useEffect } from "react";


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
