import Cards from "../../Reusable/Cards/Cards";

import CARD_DATA from "../../../utils/data";

const PricingSection = () => {
  return (
    <>
      <section className="">
        {CARD_DATA.map((item) => (
          <Cards
            key={item.id}
            plan={item.plan}
            price={item.price}
            details={item.details}
            button={item.button}
            gradient={item.gradient}
          />
        ))}
      </section>
    </>
  );
};

export default PricingSection;
