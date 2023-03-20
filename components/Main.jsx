import React, { useEffect } from "react";
import Image from "next/image";
import TypedText from "./TypedText.js";
import Link from "next/link.js";
import homeImage from "../public/home_image.gif";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";


const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center bg-white bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="w-full h-full mx-auto flex justify-center items-center ">
        <div class="grid grid-cols-1 w-full md:grid-cols-2">
          <div className="my-auto">
            <span className="font-sans text-4xl md:text-5xl">
              Hi, I&rsquo;m{" "}
              <span className="text-[#5776ff] text-5xl md:text-6xl font-bold">
                Pawan Patil
              </span>
            </span>
            <br></br>
            <span className="font-sans text-sm text-gray-400">
              Year 2 Computer Science Student @ NUS
            </span>
            <br></br>
            <br></br>
            <TypedText />

            <br></br>
            <br></br>
            <span className="font-mono font-bold ">Connect with me</span>
            <div className="container flex mx-auto justify-center items-center pt-7 pl-5">
              <div class="grid grid-cols-2 w-1/2 gap-6 md:grid-cols-4">
                <div>
                  <Link href="https://www.linkedin.com/in/pawan-kishor-patil/">
                  <AiOutlineLinkedin
                    size={40}
                    className="hover:shadow-lg hover:rounded-full"
                  /></Link>
                </div>
                <div>
                <Link href="https://github.com/PawanPatil19">
                  <AiOutlineGithub
                    size={40}
                    className="hover:shadow-lg hover:rounded-full"
                  /></Link>
                </div>
                <div>
                <Link href="https://www.instagram.com/just_pkp/">
                  <AiOutlineInstagram
                    size={40}
                    className="hover:shadow-lg hover:rounded-full"
                  /></Link>
                </div>
                <div>
                <Link href="mailto: pawanpatil@u.nus.edu">
                  <AiOutlineMail
                    size={40}
                    className="hover:shadow-lg hover:rounded-full"
                  /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 hidden md:block">
            <Image
              src={homeImage}
              alt="Picture of the author"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
