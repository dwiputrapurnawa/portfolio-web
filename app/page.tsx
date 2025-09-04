import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ServicesSection />
        <ExperienceSection />
        <PortfolioSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
