import React from 'react';
import {DiNodejsSmall, DiReact, DiJava, DiJavascript, DiPython, DiMongodb, DiPostgresql, DiGit, DiLinux} from 'react-icons/di';
import {SiSocketdotio, SiCplusplus, SiFlutter, SiExpress, SiTailwindcss, SiFigma} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'

const Skills = () => {
  return (
    <div id='skills' className='w-full md:h-screen p-2 flex items-center py-16 bg-black text-white'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='w-1/2 justify-center items-center'>
                <h1 className='font-mono flex justify-center'>&lt;Skills /&gt;</h1>
                <br></br><br></br>
                <h4>Proficient in</h4>
                <br></br>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-8'>
                    <div><DiNodejsSmall size={50}  className='hover:'/>NodeJS</div>
                    <div><DiReact size={50}/>React</div>
                    <div><DiJava size={50} />Java</div>                    
                    <div><DiPython size={50} />Python</div> 
                    <div><SiCplusplus size={50}/>C++</div>                   
                    <div><DiMongodb size={50}/>Mongodb</div> 
                    <div><SiExpress size={50}/>Express</div>
                    <div><DiGit size={50}/>Git</div>
                    <div><TbBrandNextjs size={50} />Nextjs</div>
                    <div><SiFigma size={50}/>Figma</div>
                </div>
                <br></br>
                <br></br>
                <h4>I have some experience in</h4>
                <br></br>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-8'>
                    <div><SiFlutter size={50}/>Flutter</div>
                    <div><SiSocketdotio size={50} />Socket.io</div> 
                    <div><DiPostgresql size={50} />Postgresql</div>
                    <div><DiJavascript size={50} />Javascript</div>
                    <div><DiLinux size={50} />Linux</div>
                    <div><SiTailwindcss size={50} />Tailwind CSS</div> 
                    <div><DiJavascript size={50} />Javascript</div>                   
                </div>               
                
                
            </div>
        </div>

    </div>
  )
}

export default Skills