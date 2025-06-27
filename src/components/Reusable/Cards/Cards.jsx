import { TiTick } from "react-icons/ti";

import Button from "../Button/Button";

const Cards = ({
  plan,
  price,
  details,
  button,
  front,
  gradient,
  secondary,
}) => {
  // w-full aspect-[3/4] max-w-[clamp(18rem, 30vw, 30rem)]
  return (
    <div className="relative w-80 h-120 perspective-[1000px] cursor-pointer">
      <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:-rotate-y-180 rounded-2xl shadow-card">
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white backface-hidden rounded-2xl flex  flex-col overflow-hidden"
          
        >
          <div className="font-heading uppercase text-lg  text-white w-full h-[40%] flex items-center justify-center" style={{ backgroundImage: front }}>
            <p className="border py-2.5 px-6">{plan}</p>
          </div>
          <div className="font-body border">
            {details.map((point, index) => (
              <p key={index} className="flex items-center gap-3">
                <span>
                  <TiTick />
                </span>
                <span>{point}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-white backface-hidden rotate-y-180 rounded-2xl flex items-center justify-center"
          style={{ backgroundImage: gradient }}
        >
          <div className=" flex flex-col items-center justify-center">
            <p className="uppercase font-heading mb-10 text-lg xl:text-base 3xl:text-xl text-white lg:text-sm">
              {plan}
            </p>
            <p className="font-heading mb-22 lg:text-lg text-3xl xl:text-2xl 3xl:text-4xl font-semibold text-white">
              {price}
            </p>
            <Button disabled={false} secondary={secondary}>
              {button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
