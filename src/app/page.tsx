"use client";

import dynamic from "next/dynamic";
import { I18nProvider } from "@/i18n/context";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { Services } from "@/components/sections/Services";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { Technology } from "@/components/sections/Technology";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Market } from "@/components/sections/Market";
import { Team } from "@/components/sections/Team";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const BackgroundParticlesScene = dynamic(
  () =>
    import("@/components/three/BackgroundParticles").then(
      (m) => m.BackgroundParticlesScene
    ),
  { ssr: false }
);

export default function Home() {
  return (
    <I18nProvider>
      <BackgroundParticlesScene />
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Services />
        <BusinessModel />
        <Technology />
        <CaseStudies />
        <Market />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
