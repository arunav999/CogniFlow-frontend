import Button from "../../Reusable/Button/Button";

const AboutSection = () => {
  return (
    <>
      <section className="section scroll-mt-20" id="about">
        <div className="text-center mb-10">
          <h2 className="heading">
            Tired of juggling tools and forgetting tasks?
          </h2>
          <h4 className="sub-heading text-light-text-secondary">
            <span className="logo logo-gradient">Cogniflow</span> brings calm to
            your chaos &mdash; everything you need, in one clean space.
          </h4>
        </div>

        <div className="problem">
          <h2>Problem Points</h2>
          <div className="points">
            {/* 1 */}
            <div className="point-1">
              <h4>Too Many Tools</h4>
              <p>You're bouncing between apps just to get basic things done.</p>
            </div>
            {/* 2 */}
            <div className="point-2">
              <h4>Missed Deadlines</h4>
              <p>Important tasks get buried, and reminders come too late.</p>
            </div>
            {/* 3 */}
            <div className="point-3">
              <h4>No Visual Clarity</h4>
              <p>
                Sticky notes, spreadsheets, and half-written lists aren't
                helping.
              </p>
            </div>
            {/* 4 */}
            <div className="point-4">
              <h4>Lack of Flow</h4>
              <p>Your day feels busy &mdash; but progress feels stuck.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h4 className="sub-heading text-light-text-secondary">
            It doesn't have to be this way. Let{" "}
            <span className="logo logo-gradient">Cogniflow</span> simplify your
            workday.
          </h4>
        </div>

        <div>
          <Button secondary disabled={false} design="w-55">
            Try <span className="font-logo text-2xl font-semibold">Cogniflow</span> free
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
