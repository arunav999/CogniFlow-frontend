import Button from "../../Reusable/Button/Button";

import TypingLogic from "../../../utils/TypingLogic";

const HeroSection = () => {
  const state = TypingLogic();

  return (
    <>
      <section className="section scroll-mt-20 h-[85vh]" id="hero">
        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="heading">
            <span className="logo logo-gradient">Cogniflow</span> &mdash; your
            new favourite way to manage work.
          </h2>
        </div>

        {/* DYNAMIC TYPING */}
        <div className="xs:text-[22px] xs:p-4 lg:pl-18 md:text-[28px] xs:h-[43vh] lg:h-[60vh] flex flex-col md:justify-center gap-4 font-body text-light-text-link-active">
          <div>
            <p className="inline mr-2">It helps you</p>
            <p className="inline font-text font-semibold text-light-text-tertiary">
              {state.text}
              <span
                className="xs:text-3xl lg:text-4xl transition-opacity duration-700 ease-in-out font-light"
                style={{ opacity: state.blink ? 1 : 0 }}
              >
                |
              </span>
            </p>
          </div>
          <p>No more messy boards or cluttered lists.</p>
          <p>Just clean, simple task management that works with you.</p>
          <p>
            Less Stress. More Flow. That's the{" "}
            <span className="logo logo-secondary-gradient">Cogniflow</span> way.
          </p>
        </div>

        {/* GET STARTED BUTTONS */}
        <div className=" flex xs:flex-col md:flex-row items-center xs:gap-12 justify-evenly">
          <Button disabled={false} design="w-45">
            Get Started
          </Button>
          <Button disabled={false} secondary design="w-45">
            Demo
          </Button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
