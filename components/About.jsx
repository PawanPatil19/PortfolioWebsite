import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-black text-white'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='w-1/2 justify-center items-center'>
                <h1 className='font-mono flex justify-center'>&lt;About Me /&gt;</h1>
                <br></br><br></br>
                <p className='text-sm md:text-lg'>I am a Year 2 Computer Science student at the National University
                    of Singapore. I love creating new things and working on ideas 
                    in my areas of interest. <br></br>
                    I have designed and built several Web applications, and worked on 
                    creating user-friendly designs for my projects. In my free time,
                    I also like doing Photography and play tennis. 
                </p>
            </div>
        </div>

    </div>
  )
}

export default About