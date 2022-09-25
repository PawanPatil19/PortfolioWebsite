import React from "react";
import resumeImg from "../public/assets/projects/resumeImage.png";
import Image from "next/image";
import Link from "next/link";


const Resume = () => {
  return (
    <div id="resume" className="w-full md:h-screen p-2 flex items-center py-16 bg-white ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="w-full justify-center items-center">
          <h1 className="font-mono flex justify-center">&lt;Resume/&gt;</h1>
          <br></br>
          <br></br>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl hover:transition-all shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#000000] to-[#898d9f]">
            <Image
              className="rounded-xl group-hover:opacity-20 group-hover:transition-all md:h-100"
              src={resumeImg}
              alt="/"
            ></Image>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Resume
              </h3>
              <p className="pb-4 pt-2 text-white text-center"></p>
              <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1zIDEm-J5tpAQiqpN7fLDn4uN7m7bJhX0/view?usp=sharing">
                <p className="text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  View
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
