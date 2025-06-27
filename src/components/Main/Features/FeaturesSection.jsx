const FeaturesSection = () => {
  return (
    <>
      <section className="section scroll-mt-20" id="features">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="heading">
            Everything you need &mdash; nothing you don't.
          </h2>
          <h4 className="sub-heading text-light-text-secondary">
            <span className="logo logo-secondary-gradient">Cogniflow</span>{" "}
            keeps it simple, smart, and stress-free. These are the features
            you'll actually use.
          </h4>
        </div>

        {/* FEATURES */}
        {/* 1 */}
        <div className="">
          {/* F-NAME */}
          <div className="">
            <h3>Task Boards</h3>
            <p>
              Drag, drop, and get things done with intuitive boards that just
              make sense.
            </p>
          </div>

          {/* IMAGE-CONTAINER */}
          <div className="">
            <img src="" alt="" />
          </div>
        </div>

        {/* 2 */}
        <div className="">
          {/* F-NAME */}
          <div className="">
            <h3>Smart Scheduling</h3>
            <p>
              Set deadlines, recurring tasks, and let Cogniflow keep your
              calendar clean.
            </p>
          </div>

          {/* IMAGE-CONTAINER */}
          <div className="">
            <img src="" alt="" />
          </div>
        </div>

        {/* 3 */}
        <div className="">
          {/* F-NAME */}
          <div className="">
            <h3>Team Collaboration</h3>
            <p>Tag teammates, assign tasks, and chat — all in one flow.</p>
          </div>

          {/* IMAGE-CONTAINER */}
          <div className="">
            <img src="" alt="" />
          </div>
        </div>

        {/* 4 */}
        <div className="">
          {/* F-NAME */}
          <div className="">
            <h3>Reminders That Work</h3>
            <p>Get notified before it's too late. Not too early. Just right.</p>
          </div>

          {/* IMAGE-CONTAINER */}
          <div className="">
            <img src="" alt="" />
          </div>
        </div>

        {/* 5 */}
        <div className="">
          {/* F-NAME */}
          <div className="">
            <h3>Progress Insights</h3>
            <p>
              See how far you’ve come — and what’s next — with simple visual
              summaries.
            </p>
          </div>

          {/* IMAGE-CONTAINER */}
          <div className="">
            <img src="" alt="" />
          </div>
        </div>

        <div className="text-center">
          <h4 className="sub-heading text-light-text-tertiary">
            Whether you're flying solo or managing a crew &mdash;
            <span className="logo logo-secondary-gradient">Cogniflow</span>{" "}
            adapts to your flow.
          </h4>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
