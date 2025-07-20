import cogniLogo from "../../../../../assets/cimg.png";

import { FEATURES_DATA } from "../../../../../utils/data";

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
        {FEATURES_DATA.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between gap-12 mb-16 md:px-12`}
          >
            <div className="md:w-1/2 text-center md:text-left">
              <p className="xs:text-[43px] sm:text-[86px] font-heading text-[#97878360] xs:font-bold sm:font-extrabold">
                0{feature.id}
              </p>
              <h3 className="xs:text-[16px] sm:text-2xl text-light-text-primary font-semibold mb-2 font-body">
                {feature.title}
              </h3>
              <p className="font-text xs:text-[14px] sm:text-lg text-light-text-secondary">
                {feature.description}
              </p>
            </div>

            {/* IMAGE-CONTAINER */}
            <div className="md:w-1/2 h-64 md:h-96 flex items-center justify-center overflow-hidden">
              <img
                src={feature.imgSrc}
                alt={feature.imgAlt}
                className="object-contain max-w-full max-h-full bg-black"
              />
            </div>
          </div>
        ))}

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
