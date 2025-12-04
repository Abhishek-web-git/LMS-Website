import React from 'react'
import { IoPlayCircle } from "react-icons/io5";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
import { Si365Datascience } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiCyberdefenders } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { FaUikit } from "react-icons/fa6";







function ExploreCourses() {
  return (
    <div className='w-[100vw] min-h-[50vh] lg:h-[50vh] flex flex-col lg:flex-row items-center justify-center gap-4 px-[30px]'>

      {/* left/top div */}
      <div className='w-[100%] lg:w-[350px] lg:h-[100%] h-[400px] flex flex-col items-start justify-center gap-1 md:px-[40px] px-[20px]'>

        <span className='text-[35px] font-semibold'>Explore</span>
        <span className='text-[35px] font-semibold'>Our Courses</span>
        <p className='text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore quos aut quam ducimus maiores omnis alias totam, consequatur blanditiis adipisci cupiditate explicabo voluptatum!</p>

        <button className='px-[20px] py-[10px] border-2 bg-[black] border-white text-white rounded-[10px] text-[18px] font-light flex gap-2 mt-[40px] cursor-pointer'>Explore Courses <IoPlayCircle className="w-[30px] h-[30px] fill-white"/>
        </button>

      </div>


       {/* Right/bottom div */}
      <div className='w-[720px] max-w-[90%] lg:h-[300px] md:min-h-[300px] flex items-center justify-center lg:gap-[60px] gap-[50px] flex-wrap mb-[50px] lg:mb-[0px]'>

        <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
          <div className='w-[100px] h-[90px] bg-[#B39DFF] rounded-lg flex items-center justify-center '> 
          <TbDeviceDesktopCode  className='w-[50px] h-[50px] text-[#6d6c6c]'/>
          </div>
          Web Development
        </div>

        <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
          <div className='w-[100px] h-[90px] bg-[#8CF7D1] rounded-lg flex items-center justify-center '> 
          <FaUikit  className='w-[50px] h-[50px] text-[#6d6c6c]'/>
          </div>
          UI/UX Designing
        </div>

        <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
          <div className='w-[100px] h-[90px] bg-[#FF9ACB] rounded-lg flex items-center justify-center '> 
          <FaHackerrank  className='w-[50px] h-[50px] text-[#6d6c6c]'/>
          </div>
          Ethical Hacking
        </div>

        <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
          <div className='w-[100px] h-[90px] bg-[#FFD39B] rounded-lg flex items-center justify-center '> 
          <AiOutlineOpenAI   className='w-[50px] h-[50px] text-[#6d6c6c]'/>
          </div>
          AI/ML 
        </div>

        <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
          <div className='w-[100px] h-[90px] bg-[#B8B9FF] rounded-lg flex items-center justify-center '> 
          <Si365Datascience  className='w-[50px] h-[50px] text-[#6d6c6c]'/>
          </div>
          Data-Science
        </div>

        <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
          <div className='w-[100px] h-[90px] bg-[#FFB9D6] rounded-lg flex items-center justify-center '> 
          <MdOutlineDeveloperMode  className='w-[50px] h-[50px] text-[#6d6c6c]'/>
          </div>
          Mobile App Developer
        </div>

        <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
          <div className='w-[100px] h-[90px] bg-[#8CD6FF] rounded-lg flex items-center justify-center '> 
          <SiCyberdefenders  className='w-[50px] h-[50px] text-[#6d6c6c]'/>
          </div>
          Cyber Security
        </div>

        <div className='w-[100px] h-[130px] font-light text-[13px] flex flex-col gap-3 text-center'>
          <div className='w-[100px] h-[90px] bg-[#FFB1B1] rounded-lg flex items-center justify-center '> 
          <SiHiveBlockchain  className='w-[50px] h-[50px] text-[#6d6c6c]'/>
          </div>
          Block-Chain Design
        </div>

      </div>
      
    </div>
  )
}

export default ExploreCourses
