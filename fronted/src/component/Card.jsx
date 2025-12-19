import React from 'react'
import { IoIosStar } from "react-icons/io";


function Card({thumbnail, title, category, price, id}) {
  return (
    <div className='max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-gray-300'>
      <img src={thumbnail} alt="" className='w-full h-48 object-cover'/>

      <div className='p-5 space-y-2'>
        <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>

        <span className='px-2 py-0.5 bg-gray-100 rounded-full text-gray-700 capitalize'>{category}</span>

        <div className='flex justify-between text-sm text-gray-500  rounded-full hover:bg-black'>
          <span className='w-full h-[24px] rounded-full cursor-pointer'>{price}</span>
          <span className='w-[22px] h-[22px] text-sm bg-white'><IoIosStar  className='bg-yellow-500'/>5</span>
        </div>

      </div>
      
    </div>
  )
}

export default Card
