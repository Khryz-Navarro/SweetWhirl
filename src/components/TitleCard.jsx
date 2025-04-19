import React from "react";
import Vanilla from "../assets/img/vanilla_ice_cream.png";

const TitleCard = () => {
  return (
    <>
      <div className="md:flex mt-2 m-8 justify-center items-center">
        <div className="bg-gradient-to-b from-[#FFE550] to-[#FF9D00] rounded-[35px] border-b-5 border-2 md:flex h-auto w-full max-w-[1280px] p-12 md-p-24 overflow-hidden">
          <div className="h-auto w-auto p-4 my-4">
            <h1 className="font-GochiHand text-5xl md:text-[64px] mb-8">
              SweetWhirl
            </h1>
            <p className="font-InstrumentSans text-base md:text-[24px] max-w-4xl py-4">
              Indulge in a world of creamy delights, where every scoop is a
              moment of pure joy and every flavor tells a story. Chill out,
              treat yourself, and let every bite take you on a delicious escape.
              Your sweet adventure starts here!
            </p>
          </div>
          <div className="m-10">
            <div className="md:w-[368px] md:h-[372px] m-full h-auto rounded-full overflow-hidden border-[2px] shadow-lg">
              <img src={Vanilla} alt="vanilla_ice_cream" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TitleCard;
