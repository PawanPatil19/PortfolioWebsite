import React from "react";
import Link from "next/link";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full md:h-10 p-2 flex items-center py-16 bg-black text-white">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="grid md:grid-cols-2">
          <div className="text-sm md:text-lg">
            Ⓒ Pawan Kishor Patil. All Rights Reserved.
          </div>
        </div>
        <div className="flex items-center justify-center">
          <AiOutlineMail size={30} className="px-1" />
          <Link href="mailto: pawanpatil@u.nus.edu">pawanpatil@u.nus.edu</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
