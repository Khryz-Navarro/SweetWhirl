import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsPaypal,
} from "react-icons/bs";
const FooterCard = () => {
  return (
    <div className="flex justify-center items-center p-4 h-full">
      <div className="bg-gray-300 flex flex-col justify-center items-center rounded-[50px] border-b-9 border-4 border-black w-full max-w-[1280px] h-auto p-12 md:p-24 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center z-10 w-full">
          <h1 className="font-GochiHand text-4xl md:text-[64px] mb-8">
            Designed by: Zander
          </h1>
          <p className="font-InstrumentSans text-base md:text-[24px] text-center max-w-4xl px-4">
            Developed by: Khryz
          </p>
          <p className="font-InstrumentSans text-base md:text-[24px] text-center max-w-4xl px-4 p-4 m-4">
            My Socials:
          </p>
          <ul className="flex gap-4">
            <li>
              <BsInstagram size={30} />
            </li>
            <li>
              <BsFacebook size={30} />
            </li>
            <li>
              <BsGithub size={30} />
            </li>
            <li>
              <BsLinkedin size={30} />
            </li>
            <li>
              <BsPaypal size={30} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
