import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Image src="/../public/logo_navbar.png" alt="/" height="50" width="125"></Image> */}
        <Link href="/">
          <span className="font- font-bold text-3xl px-4 cursor-pointer ">
            Pawan Patil
          </span>
        </Link>
        <div className="p-5">
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-md uppercase hover:border-b hover:scale-125">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-md uppercase hover:border-b hover:scale-125">
                About Me
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-md uppercase hover:border-b hover:scale-125">
                Projects
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-md uppercase hover:border-b hover:scale-125">Skills</li>
            </Link>
            <Link href="/#resume">
              <li className="ml-10 text-md uppercase hover:border-b hover:scale-125">Resume</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md-hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 animate-in fade-in slide-in-from-left"
              : "fixed left-[-100%] top-0 ease-in duration-500 animate-in fade-in slide-in-from-left"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h2 className="font-mono">Pawan Patil</h2>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:bg-gray-700 hover:text-white hover:scale-125"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="py-4 flex flex-col">
              <ul className="uppercase font-sans">
                <Link href="/#home">
                  <li className="py-4 text-lg cursor-pointer">Home</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-lg">About Me</li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 text-lg">Projects</li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-lg">Skills</li>
                </Link>
                <Link href="/#resume">
                  <li className="py-4 text-lg">Resume</li>
                </Link>
              </ul>
            </div>

            <br></br>
            <div class="grid grid-cols-4 gap-6 md:grid-cols-4">
              <div>
                <Link href="https://www.linkedin.com/in/pawan-kishor-patil/">
                  <AiOutlineLinkedin
                    size={40}
                    className="hover:shadow-lg hover:rounded-full"
                  />
                </Link>
              </div>
              <div>
                <Link href="https://github.com/PawanPatil19">
                  <AiOutlineGithub
                    size={40}
                    className="hover:shadow-lg hover:rounded-full"
                  />
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/just_pkp/">
                  <AiOutlineInstagram
                    size={40}
                    className="hover:shadow-lg hover:rounded-full"
                  />
                </Link>
              </div>
              <div>
                <Link href="mailto: pawanpatil@u.nus.edu">
                  <AiOutlineMail
                    size={40}
                    className="hover:shadow-lg hover:rounded-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
