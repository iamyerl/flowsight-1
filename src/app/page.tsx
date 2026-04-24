import LandingNavbar from "@/components/landing/LandingNavbar";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import ScienceSection from "@/components/landing/ScienceSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PipelineSection from "@/components/landing/PipelineSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import LandingFooter from "@/components/landing/LandingFooter";
import SvgDefs from "@/components/landing/SvgDefs";
import LandingEffects from "@/components/landing/LandingEffects";

export default function HomePage() {
  return (
    <div className="landing">
      <div className="stars" />
      <div className="grain" />

      <SvgDefs />

      <div className="shell">
        <LandingNavbar />
        <Hero />
        <ProblemSection />
        <ScienceSection />
        <FeaturesSection />
        <PipelineSection />
        <ArchitectureSection />
        <LandingFooter />
      </div>

      <LandingEffects />
    </div>
  );
}
