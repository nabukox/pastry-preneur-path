import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { BridgeSection } from "@/components/landing/BridgeSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { ValueStackSection } from "@/components/landing/ValueStackSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { QuickTimelineSection } from "@/components/landing/QuickTimelineSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <BridgeSection />
      <QuickTimelineSection />
      <SolutionSection />
      <BonusSection />
      <ValueStackSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
