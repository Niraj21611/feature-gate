import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductPreview from "../components/ProductPreview";
import SocialProof from "../components/SocialProof";
import UseCases from "../components/UseCases";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <ProductPreview />
        <SocialProof />
        <UseCases />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
