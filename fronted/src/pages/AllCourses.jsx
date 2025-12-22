import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../component/Nav'
import { FaArrowLeftLong } from "react-icons/fa6";
import ai from "../assets/SearchAi.png"
import { useSelector } from 'react-redux';
import Card from '../component/Card';

function AllCourses() {

  const navigate = useNavigate()
  const {courseData} = useSelector(state=>state.course)
  const [category, setCategory] = useState([])
  const [filterCourses, setFilterCourses] = useState([])

  const toggleCategory = (e)=> {
    if(category.includes(e.target.value) ){
      setCategory(prev => prev.filter(c=> c !== e.target.value ))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    let courseCopy = courseData?.slice()
    if(category.length > 0){
      courseCopy = courseCopy.filter(c => category.includes(c.category))
    }
    setFilterCourses(courseCopy)
  }

  useEffect(()=>{
    setFilterCourses(courseData)
  },[courseData])

  useEffect(()=>{
    applyFilter()
  },[category])

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Nav/>

      {/* SideBar */}

      <aside className='w-[260px] h-screen overflow-y-auto bg-black fixed top-0 left-0 py-[130px] border-r border-gray-200 shadow-md transition-transform duration-300 z-5'>

        <h2 className='text-xl font-bold flex items-center justify-center gap-2 text-gray-50 mb-6'><FaArrowLeftLong className='text-white cursor-pointer' onClick={()=>navigate("/")}/>Filter by Category</h2>

        <form action="" onSubmit={(e)=>e.preventDefault()} className='space-y-4 text-sm bg-gray-600 border-white text-[white] border p-[20px] rounded-2xl'>

          <button className='px-[10px] py-[10px] bg-black text-white rounded-[10px] text-[15px] font-light flex items-center jusitfy-center gap-2'>Search With AI <img src={ai} alt="" className='w-[30px] h-[30px] rounded-full'/></button>

          <label htmlFor="" className='flex items-center gap-3 hover:text-gray-200 cursor-pointer transition'>
            <input type="checkbox" className='accent-black w-4 h-4 rounded-md' value={'Web Development'} onChange={toggleCategory}/>Web Development
          </label>

          <label htmlFor="" className='flex items-center gap-3 hover:text-gray-200 cursor-pointer transition'>
            <input type="checkbox"  className='accent-black w-4 h-4 rounded-md'value={'App Development'} onChange={toggleCategory}/>App Development
          </label>

          <label htmlFor="" className=' flex items-center gap-3 hover:text-gray-200 cursor-pointer transition'>
            <input type="checkbox" className='w-4 h-4 accent-black rounded-md' value={'Data Science'} onChange={toggleCategory}/>Data Science
          </label>

          <label htmlFor="" className='flex items-center gap-3 hover:text-gray-200 cursor-pointer transition'>
            <input type="checkbox" className='w-4 h-4 accent-black rounded-md' value={'Ethical Hacking'} onChange={toggleCategory}/>Ethical Hacking
          </label>

          <label htmlFor="" className='flex items-center gap-3 hover:text-gray-300 cursor-pointer transition'>
            <input type="checkbox" className='w-4 h-4 accent-black rounded-md' value={'UI/UX Designing'} onChange={toggleCategory}/>UI/UX Designing
          </label>

          <label htmlFor="" className='flex items-center gap-3 cursor-pointer hover:text-gray-200 transition'>
            <input type="checkbox" className='w-4 h-4 accent-black rounded-md' value={'AI/ML'} onChange={toggleCategory}/>AI/ML
          </label>

          <label htmlFor="" className='flex items-center cursor-pointer hover:text-gray-200 transition gap-3'>
            <input type="checkbox" className='w-4 h-4 accent-black rounded-md' value={'Cyber Security'} onChange={toggleCategory}/>Cyber Security
          </label>

          <label htmlFor="" className='flex items-center gap-3 hover:text-gray-200 cursor-pointer transition'>
            <input type="checkbox" className='w-4 h-4 accent-black rounded-full' value={'Block-Chain Design'} onChange={toggleCategory}/>Block-Chain Design
          </label>

          <label htmlFor="" className='flex items-center gap-3 hover:text-gray-200 cursor-pointer transition'>
            <input type="checkbox" className='w-4 h-4 accent-black rounded-md' value={'Other'} onChange={toggleCategory}/>Other
          </label>

        </form>

      </aside>

      <main className='w-full transition-all duration-300 py-[130px] md:pl-[300px] flex items-start justify-center md:justify-start flex-wrap gap-6 px[10px]'>
        {
          filterCourses?.map((course, index)=>(
            <Card key={index} thumbnail={course.thumbnail} title={course.title} category={course.category} price={course.price} id={course._id}/>
          ))
        }

      </main>
      
    </div>
  )
}

export default AllCourses
