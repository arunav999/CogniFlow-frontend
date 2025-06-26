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
  return (
    <div className="relative w-full aspect-[3/4] max-w-[clamp(18rem, 30vw, 30rem)] perspective-[1000px] cursor-pointer">
      <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:-rotate-y-180 rounded-2xl shadow-card">
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white backface-hidden rounded-2xl p-4 flex items-center justify-center flex-col"
          style={{ backgroundImage: front }}
        >
          <div className="font-heading">{plan}</div>
          <div className="font-body">
            {details.map((point, index) => (
              <p key={index}>
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
