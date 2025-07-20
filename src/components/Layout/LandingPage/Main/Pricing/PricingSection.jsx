import Cards from "../../../../Reusable/Cards/Cards";
import Button from "../../../../Reusable/Button/Button";

import CARD_DATA from "../../../../../utils/data";

const PricingSection = () => {
  return (
    <>
      <section className="section scroll-mt-20" id="pricing">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="heading">Simple Plans, Built for Flow</h2>
          <h4 className="sub-heading text-light-text-secondary">
            Whether you're solo or scaling,{" "}
            <span className="logo logo-secondary-gradient">Cogniflow</span> has
            a plan that fits your style.
          </h4>
        </div>

        {/* PRICING CARDS */}
        <div className="flex xs:flex-col lg:flex-row items-center justify-evenly gap-10 ">
          {CARD_DATA.map((item) => (
            <Cards
              key={item.id}
              plan={item.plan}
              price={item.price}
              details={item.details}
              button={item.button}
              front={item.front}
              gradient={item.gradient}
              secondary={item.secondary}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="my-12">
          <h4 className="sub-heading text-light-text-tertiary flex xs:flex-col lg:flex-row items-center justify-center gap-2">
            <span>Not sure which to pick? &mdash; </span>
            <Button secondary disabled={false}>
              {" "}
              Start with free
            </Button>{" "}
            <span>upgrade when you're ready.</span>
          </h4>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
