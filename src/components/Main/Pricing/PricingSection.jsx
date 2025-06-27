import Cards from "../../Reusable/Cards/Cards";

import CARD_DATA from "../../../utils/data";

const PricingSection = () => {
  return (
    <>
      <section className="flex xs:flex-col lg:flex-row items-center justify-evenly gap-10 py-12 px-24">
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
      </section>
    </>
  );
};

export default PricingSection;
