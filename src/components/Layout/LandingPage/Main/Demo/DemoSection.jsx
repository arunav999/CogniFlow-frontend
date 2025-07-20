import cogniImg from "../../../assets/cimg.png";

// React icons
import { FiPlusCircle, FiUsers, FiTarget } from "react-icons/fi";
import { BiTransferAlt } from "react-icons/bi";

// Custom component
import Button from "../../../../Reusable/Button/Button";

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

        {/* IMAGE / GIF / VIDEO */}
        <div className="md:w-full h-64 md:h-96 flex items-center justify-center overflow-hidden">
          <img
            src={cogniImg}
            alt=""
            className="object-contain max-w-full max-h-full bg-black"
          />
        </div>

        {/* FEATURE POINTS */}
        <div className="flex justify-center my-12">
          <div className="grid md:grid-cols-2 text-center gap-12 w-[85%]">
            <div className="demo-f">
              <p className="demo-n">
                <span>
                  <FiPlusCircle />
                </span>
                "Add a task in one click"
              </p>
            </div>
            <div className="demo-f">
              <p className="demo-n">
                <span>
                  <BiTransferAlt />
                </span>
                "Easily switch between Board and List views"
              </p>
            </div>
            <div className="demo-f">
              <p className="demo-n">
                <span>
                  <FiUsers />
                </span>
                "Collaborate with your team in real-time"
              </p>
            </div>
            <div className="demo-f">
              <p className="demo-n">
                <span>
                  <FiTarget />
                </span>
                "Track your weekly focus at a glance"
              </p>
            </div>
          </div>
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
