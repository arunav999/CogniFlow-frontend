import HeroSection from "./Hero/HeroSection";
import AboutSection from "./About/AboutSection";
import FeaturesSection from "./Features/FeaturesSection";
import DemoSection from "./Demo/DemoSection";
import PricingSection from "./Pricing/PricingSection";

const Main = () => {
  return (
    <>
      <main className="mt-28">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <DemoSection />
        <PricingSection />
      </main>
    </>
  );
};

export default Main;
