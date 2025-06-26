import { TiTick } from "react-icons/ti";

import Button from "../Button/Button";

const Cards = ({ plan, price, details, button, gradient }) => {
  return (
    <div className="relative w-80 h-120 perspective-[1000px] cursor-pointer">
      <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:-rotate-y-180 rounded-2xl shadow-button-active">
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white backface-hidden rounded-2xl p-4 flex items-center justify-center flex-col">
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
          className="absolute w-full h-full bg-white backface-hidden rotate-y-180 rounded-2xl"
          style={{ backgroundImage: gradient }}
        >
          <p>{price}</p>
          <Button disabled={false}>{button}</Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
