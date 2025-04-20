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
              <a href="https://instagram.com/" target="_blank">
                <BsInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <BsFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank">
                <BsGithub size={30} />
              </a>
            </li>
            <li>
              <a href="http://linked.in/" target="_blank">
                <BsLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="https://paypal.com/" target="_blank">
                <BsPaypal size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
