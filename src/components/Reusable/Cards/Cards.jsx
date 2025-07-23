// ==================== 3rd-party Imports ====================
import { useEffect, useRef, useState } from "react";
import { TiTick } from "react-icons/ti";

// ==================== Reusable Components ====================
import Button from "../Button/Button";

// ==================== Cards Component ====================
// Interactive pricing/plan card with flip animation and details
const Cards = ({
  plan,
  price,
  details,
  button,
  front,
  gradient,
  secondary,
}) => {
  // State for card flip
  const [flipped, setFlipped] = useState(false);
  // Ref for card DOM node
  const cardRef = useRef(null);

  // Flip back when clicking outside the card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setFlipped(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ==================== Render Card ====================
  return (
    <div
      ref={cardRef}
      className="group relative w-80 h-120 perspective-[1000px] cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`w-full h-full transition-transform duration-500 [transform-style:preserve-3d] rounded-2xl shadow-card
          ${flipped ? "-rotate-y-180" : ""}
          group-hover:-rotate-y-180
        ease-in`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white backface-hidden rounded-2xl flex flex-col overflow-hidden">
          <div
            className="relative font-heading uppercase text-lg text-white w-full h-[40%] clip-bottom"
            style={{ backgroundImage: front }}
          >
            <h4 className="py-2.5 px-6 absolute bottom-15 right-10">
              <span
                className="py-2 px-4 shadow-card"
                style={{ backgroundImage: front }}
              >
                {plan}
              </span>
            </h4>
          </div>
          <div className="font-body m-4">
            <ul className="flex flex-col text-sm gap-4">
              {details.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-light-text-secondary"
                >
                  <span>
                    <TiTick />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-white backface-hidden rotate-y-180 rounded-2xl flex items-center justify-center"
          style={{ backgroundImage: gradient }}
        >
          <div className="flex flex-col items-center justify-center">
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
