import React from "react";
import Image from "next/image";
import bartzeeImg from "../public/assets/projects/bartzeeImage.png";
import chatImg from "../public/assets/projects/chatImage.png";
import cleanImg from "../public/assets/projects/cleanImage.png";
import discordImg from "../public/assets/projects/discordImage.png";
import pocketbookImg from "../public/assets/projects/pocketbook.png";
import vortoImg from "../public/assets/projects/vorto.png";
import helpinguImg from "../public/assets/projects/helpingU.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import {AiFillGithub} from 'react-icons/ai';


const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full md:h-full p-2 flex items-center justify-center py-16 bg-white "
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="w-full h-full justify-center items-center">
          <h1 className="font-mono flex justify-center">&lt;Projects /&gt;</h1>
          <br></br>
          <Link href="https://github.com/PawanPatil19">
          <h3 className="font-mono flex justify-center">
            <button className="px-3 bg-gray-200">
                <div class="flex items-center justify-between"><AiFillGithub />Github</div>
                </button>
          </h3></Link>
          <br></br>
          <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
              title="Vorto"
              backgroundImg={vortoImg}
              projectUrl="https://github.com/shirsho-12/vorto_hacknroll"
              projectInfo="Flutter | REST API "
            />
            <ProjectItem
              title="HelpinU"
              backgroundImg={helpinguImg}
              projectUrl="https://devpost.com/software/helpinu-6me5qs"
              projectInfo="ReactJS | MongoDB | Flutter"
            />
            <ProjectItem
              title="Bartzee"
              backgroundImg={bartzeeImg}
              projectUrl="https://github.com/PawanPatil19/Bartzee"
              projectInfo="NodeJS | ExpressJS | MongoDB"
            />
            <ProjectItem
              title="PocketBook"
              backgroundImg={pocketbookImg}
              projectUrl="https://github.com/PawanPatil19/pocketBook"
              projectInfo="Flutter | Firebase"
            />
            <ProjectItem
              title="Clean-G"
              backgroundImg={cleanImg}
              projectUrl="https://github.com/PawanPatil19/Flask-Project--CLEANG"
              projectInfo="Flask | SQLAlchemy"
            />
            <ProjectItem
              title="Image Generation and Uploading Discord Bot"
              backgroundImg={discordImg}
              projectUrl="https://github.com/PawanPatil19/Image-Generation-Bot"
              projectInfo="Python"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
