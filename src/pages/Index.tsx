import { useState, useEffect } from "react";
import { ProgressIndicator } from "@/components/landing/ProgressIndicator";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { RealitySection } from "@/components/landing/RealitySection";
import { RevelationSection } from "@/components/landing/RevelationSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { ScarcitySection } from "@/components/landing/ScarcitySection";
import { PackageSection } from "@/components/landing/PackageSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";

const Index = () => {
  const [progress, setProgress] = useState(20);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const emotions = ["😫", "😠", "😲", "💡", "😌", "🛠️", "⚡", "🎯", "🛡️"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyCTA(scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    document.getElementById("solucao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Progress indicator - desktop only */}
      <ProgressIndicator progress={progress} emotions={emotions} />

      {/* Hero */}
      <HeroSection onCTAClick={handleCTAClick} />

      {/* Problem */}
      <ProblemSection onProgressChange={setProgress} />

      {/* Reality */}
      <RealitySection onProgressChange={setProgress} />

      {/* Revelation */}
      <RevelationSection onProgressChange={setProgress} />

      {/* Solution */}
      <SolutionSection onProgressChange={setProgress} />

      {/* Bonus */}
      <BonusSection onProgressChange={setProgress} />

      {/* Scarcity */}
      <ScarcitySection onProgressChange={setProgress} />

      {/* Package */}
      <PackageSection onProgressChange={setProgress} />

      {/* Guarantee */}
      <GuaranteeSection onProgressChange={setProgress} />

      {/* Footer */}
      <Footer />

      {/* Sticky CTA - mobile only */}
      <StickyCTA isVisible={showStickyCTA} />
    </div>
  );
};

export default Index;
