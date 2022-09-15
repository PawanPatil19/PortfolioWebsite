import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({title, backgroundImg, projectUrl, projectInfo}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl hover:transition-all shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#000000] to-[#898d9f]">
      <Image
        className="rounded-xl group-hover:opacity-20 group-hover:transition-all md:h-100"
        src={backgroundImg}
        alt="/"
      ></Image>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {projectInfo}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-1 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info..
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
