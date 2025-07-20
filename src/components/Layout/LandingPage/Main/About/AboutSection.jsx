import { TbNorthStar } from "react-icons/tb";

import Button from "../../../../Reusable/Button/Button";

const AboutSection = () => {
  return (
    <>
      <section className="section scroll-mt-20 mb-12" id="about">
        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="heading">
            Tired of juggling tools and forgetting tasks?
          </h2>
          <h4 className="sub-heading text-light-text-secondary">
            <span className="logo logo-secondary-gradient">Cogniflow</span>{" "}
            brings calm to your chaos &mdash; everything you need, in one clean
            space.
          </h4>
        </div>

        {/* BODY */}
        <div className="flex flex-col items-center gap-12">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-heading flex items-center justify-center gap-2 w-fit py-2 px-6 border-2 border-light-ui-border rounded">
              <span>
                <TbNorthStar />
              </span>
              Problem Points
            </h2>
          </div>

          {/* POINTS */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 1 */}
            <div className="points">
              <h4 className="points-h">Too Many Tools</h4>
              <p className="points-p">
                You're bouncing between apps just to get basic things done.
              </p>
            </div>
            {/* 2 */}
            <div className="points">
              <h4 className="points-h">Missed Deadlines</h4>
              <p className="points-p">
                Important tasks get buried, and reminders come too late.
              </p>
            </div>
            {/* 3 */}
            <div className="points">
              <h4 className="points-h">No Visual Clarity</h4>
              <p className="points-p">
                Sticky notes, spreadsheets, and half-written lists aren't
                helping.
              </p>
            </div>
            {/* 4 */}
            <div className="points">
              <h4 className="points-h">Lack of Flow</h4>
              <p className="points-p">
                Your day feels busy &mdash; but progress feels stuck.
              </p>
            </div>
          </div>
        </div>

        {/* SUB-HEADING */}
        <div className="text-center mt-12">
          <h4 className="sub-heading text-light-text-tertiary">
            It doesn't have to be this way. Let{" "}
            <span className="logo logo-secondary-gradient">Cogniflow</span>{" "}
            simplify your workday.
          </h4>
        </div>

        {/* TRY-BUTTON */}
        <div className="flex items-center justify-center py-8 lg:px-34">
          <Button secondary disabled={false} design="w-55">
            Try{" "}
            <span className="font-logo text-2xl font-semibold">Cogniflow</span>{" "}
            free
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
