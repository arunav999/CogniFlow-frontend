import Button from "../../Reusable/Button/Button";

const DemoSection = () => {
  return (
    <>
      <section className="section scroll-mt-20" id="demo">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="heading">
            See <span className="logo logo-gradient">Cogniflow</span> in action.
          </h2>
          <h4 className="sub-heading text-light-text-secondary">
            A quick peek at how easy it is to stay organized and in control.
          </h4>
        </div>

        {/* IMAGE / GIF */}
        <div className="">
          <span>Image or Gif</span>
        </div>

        {/* FEATURE POINTS */}
        <div className="">
          <ul>
            <li>"Add a task in one click"</li>
            <li>"Easily switch between Board and List views"</li>
            <li>"Collaborate with your team in real-time"</li>
            <li>Track your weekly focus at a glance</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h4 className="sub-heading text-light-text-tertiary">
            Looks good? Let's make it yours.{" "}
            <Button secondary disabled={false}>
              {" "}
              Start for free
            </Button>
          </h4>
        </div>
      </section>
    </>
  );
};

export default DemoSection;
