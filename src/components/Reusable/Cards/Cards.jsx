const Cards = () => {
  return (
    <div className="relative w-96 h-96 perspective-[1000px]">
      <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:-rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full bg-amber-800 text-white flex items-center justify-center backface-hidden">
          Front Side
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-emerald-800 text-white flex items-center justify-center backface-hidden rotate-y-180">
          Back Side
        </div>
      </div>
    </div>
  );
};

export default Cards;
