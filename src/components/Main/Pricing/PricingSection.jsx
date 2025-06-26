import Cards from "../../Reusable/Cards/Cards";

import CARD_DATA from "../../../utils/data";

const PricingSection = () => {
  return (
    <>
      <section className="flex md:flex-col lg:flex-row items-center justify-center gap-10 py-16 px-28">
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
