"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { Programs } from "@/components/sections/Programs";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CareerPaths } from "@/components/sections/CareerPaths";
import { Facilities } from "@/components/sections/Facilities";
import { AdmissionJourney } from "@/components/sections/AdmissionJourney";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Programs />
        <WhyChoose />
        <CareerPaths />
        <Facilities />
        <AdmissionJourney />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
