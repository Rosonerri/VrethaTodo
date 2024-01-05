import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import img from "../assets/avatar.png"
const HomeScreen = () => {
  
  return (
    <div className="flex items-center flex-col">
      <div className="w-[100%] h-[70px] bg-white flex items-center justify-around">
        <h1 className='font-[400] text-[40px] text-[#D7A35F]'>VRETHA TODO DASHBOARD</h1>
        <div className='w-[420px] flex ml-[50px]'>
          <img src={img} alt="" className='w-[100px]' />
          <h6 className='font-[500] text-[12px] mt-[25px]'>Over 20m Registered companies</h6>
        </div>
      </div>
      <div className='flex'>
      <div className='border w-[320px] h-[70vh] rounded-md shadow-md bg-white mt-[30px]'>
        <div className='w-[100%] h-[40px] bg-[#80D5F1] font-[bold] flex items-center justify-center font-[700]  text-[#F6F1C8]'>
          Start
          </div>
      </div>
      <div className='border w-[320px] h-[70vh] rounded-md shadow-md bg-white mt-[30px] ml-[20px] mr-[20px]'>
      <div className='w-[100%] h-[40px] bg-[#F6F1C8] font-[bold] flex items-center justify-center font-[700] text-[#80D5F1]'>
         Processing
          </div>
      </div>
      <div className='border w-[320px] h-[70vh] rounded-md shadow-md bg-white mt-[30px]'>
      <div className='w-[100%] h-[40px] bg-[#D7A35F] font-[bold] flex items-center justify-center font-[700] text-[green]'>
          Finished
          </div>
      </div>
      </div>
    </div>
  )
}

export default HomeScreen;
