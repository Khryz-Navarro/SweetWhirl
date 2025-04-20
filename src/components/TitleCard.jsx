import React from "react";
import Vanilla from "../assets/img/vanilla_ice_cream.png";

const TitleCard = () => {
  return (
    <>
      <div className="flex mt-2 m-2  justify-center items-center overflow-hidden">
        <div className="bg-gradient-to-b from-[#FFE550] to-[#FF9D00] rounded-[35px] border-b-5 border-2 md:flex h-auto w-full max-w-[1280px] p-12 md-p-24 m-20">
          <div className="h-auto p-4 my-4 md:mt-30 flex flex-col items-center md:justify-center z-10 w-full">
            <h1 className="font-GochiHand text-5xl md:text-[64px] mb-2">
              SweetWhirl
            </h1>
            <p className="font-InstrumentSans md:text-[24px] text-2xl w-[590px] py-4 pt-0 mt-0  text-center max-w-4xl px-4">
              Indulge in a world of creamy delights, where every scoop is a
              moment of pure joy and every flavor tells a story. Chill out,
              treat yourself, and let every bite take you on a delicious escape.
              Your sweet adventure starts here!
            </p>
          </div>
          <div className="m-10 mx-auto">
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
