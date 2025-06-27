import HeroSection from "./Hero/HeroSection";
import AboutSection from "./About/AboutSection";
import PricingSection from "./Pricing/PricingSection";

const Main = () => {
  return (
    <>
      <main className="mt-28">
        <HeroSection />
        <AboutSection />
        <PricingSection />
      </main>
    </>
  );
};

export default Main;
