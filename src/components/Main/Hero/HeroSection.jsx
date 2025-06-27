import Button from "../../Reusable/Button/Button";

import TypingLogic from "../../../utils/TypingLogic";

const HeroSection = () => {
  const state = TypingLogic();

  return (
    <>
      <section className="section scroll-mt-20" id="about">
        <div className="text-center mb-10">
          <h2 className="heading">
            <span className="logo logo-gradient">Cogniflow</span> - your new
            favourite way to manage work.
          </h2>
        </div>

        <div className="text-3xl ">
          <p>It helps you</p>
          <p>
            {/* {state.text} */}
            stay organized
            <span
              className="text-4xl transition-opacity duration-700 ease-in-out font-semibold"
              style={{ opacity: state.blink ? 1 : 0 }}
            >
              |
            </span>
          </p>
          <p>No more messy boards or cluttered lists.</p>
          <p>Just clean, simple task management that works with you.</p>
          <p>
            Less Stress. More Flow. That's the{" "}
            <span className="logo logo-gradient">Cogniflow</span> way.
          </p>
        </div>

        <div>
          <Button disabled={false}>Get Started</Button>
          <Button disabled={false} secondary>
            Demo
          </Button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
