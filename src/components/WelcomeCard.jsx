import React from "react";

const WelcomeCard = () => {
  return (
    <>
      <div className="flex justify-center items-center p-4 m-4 h-screen">
        <div className="bg-[#50F9FF] flex flex-col justify-center items-center rounded-[50px] border-b-9 border-4 border-black w-full max-w-[1280px] h-auto p-12 md:p-24 relative overflow-hidden">
          <div className="flex flex-col items-center justify-center z-10 w-full">
            <h1 className="font-GochiHand text-4xl md:text-[64px] mb-8">
              Welcome
            </h1>
            <p className="font-InstrumentSans text-base md:text-[24px] text-center max-w-4xl px-4">
              Welcome to SweetWhirl, where every scoop is a celebration of
              flavor, creativity, and joy! We're passionate about crafting the
              finest desserts that bring people together and create
              unforgettable moments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeCard;
