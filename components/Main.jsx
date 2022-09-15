import React from "react";
import Image from "next/image";
import TypedText from "./TypedText.js";
import Link from "next/link.js";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center bg-white md:bg-[url('../public/home_image3.png')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div class="grid grid-cols-1 divide-x-0 w-full flex-row md:grid-cols-2">
          <div>
            <span className="font-sans text-4xl">
              Hi, I'm{" "}
              <span className="text-[#5776ff] text-5xl font-bold">
                Pawan Patil
              </span>
            </span>
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
        </div>
      </div>
    </div>
  );
};

export default Main;
