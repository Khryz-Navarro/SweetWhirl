import React from "react";

const TitleCard = () => {
  const vanilla_ice_cream = "src/assets/img/vanilla_ice_cream.png";

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1280px] h-[584px] bg-gradient-to-b from-[#FFE550] to-[#FF9D00]  rounded-[35px] p-16 border-b-5 border-2">
        <div className="flex justify-between items-center m-8">
          <div className="max-w-2xl p-4 m-4">
            <h1 className="font-GochiHand text-[64px] w-[312px] h-[75px]">
              SweetWhirl
            </h1>
            <p className="font-InstrumentSans text-[24px] w-[590px] h-[145px]">
              Indulge in a world of creamy delights, where every scoop is a
              moment of pure joy and every flavor tells a story. Chill out,
              treat yourself, and let every bite take you on a delicious escape.
              Your sweet adventure starts here!
            </p>
          </div>
          <div className="ml-8">
            <div className="w-[368px] h-[372px] rounded-full overflow-hidden border-[2px] shadow-lg">
              <img src={vanilla_ice_cream} alt="vanilla_ice_cream" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TitleCard;
