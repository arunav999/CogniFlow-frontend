import Cards from "../../Reusable/Cards/Cards";

import CARD_DATA from "../../../utils/data";

const PricingSection = () => {
  return (
    <>
      <section className="section">
        <div className="text-center mb-16">
          <h2 className="heading">
            Simple Plans, Built for Flow
          </h2>
          <h4 className="sub-heading">
            Whether you're solo or scaling,{" "}
            <span className="font-logo xs:text-2xl sm:text-3xl font-bold">
              Cogniflow
            </span>{" "}
            has a plan that fits your style.
          </h4>
        </div>

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
      </section>
    </>
  );
};

export default PricingSection;
