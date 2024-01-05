import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Upgrage = () => {
  return (
    <div className='w-full bg-white-400 h-[90vh] justify-center flex items-center'>
      <div className='border w-[400px] shadow-md bg-slate-50 h-[90%] ml-5 mr-5'>
        <div className='font-bold text-[21px] h-[40px] bg-purple-800 flex items-center justify-center text-[white]'>Bromo</div>
        <div className='font-bold  flex items-center justify-center text-[grey] mt-3'>Team up with your colleaques around your Api</div>
        <div className='font-bold  flex items-center justify-center text-[purple] mt-3 text-[40px]'>$19.99</div>
        <div className='font-bold flex items-center justify-center text-[grey] mt-3 text-[12px]'>Bromo Plan for $19.99 Dollar/Month</div>
        <div className='font-bold flex items-center justify-center text-[white] mt-3 text-[12px]'>
          <button className='border px-20 py-2 rounded-md bg-purple-600 text-[20px]'>Select</button>
        </div>
        <div className='font-bold flex items-center justify-start text-[black] mt-3 text-[12px] ml-5'>Highlights of plan features</div>

        <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]"/>
          <p>Limited collaboration for plan members</p>
          </div>
          <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]"/>
          <p>Collection Recovery for 30days</p>
          </div>
          <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]"/>
          <p>30 custom domain</p>
          </div>
          <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]"/>
          <p>Only Three(20) company members</p>
          </div>
          <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[purple] mr-3 text-[20px]"/>
          <p>50 Collaboration</p>
          </div>
      </div>
      <div className='border w-[400px] shadow-md bg-slate-50 h-[90%]'>
        <div className='font-bold text-[21px] h-[40px] bg-[gold] flex items-center justify-center text-[white]'>Unlimited</div>
        <div className='font-bold  flex items-center justify-center text-[grey] mt-3'>Team up with your colleaques around your Api</div>
        <div className='font-bold  flex items-center justify-center text-[gold] mt-3 text-[40px]'>$29.99</div>
        <div className='font-bold flex items-center justify-center text-[grey] mt-3 text-[12px]'>Premo Plan for $29.99 Dollar/Month</div>
        <div className='font-bold flex items-center justify-center text-[white] mt-3 text-[12px]'>
          <button className='border px-20 py-2 rounded-md bg-[gold] text-[20px]'>Select</button>
        </div>
        <div className='font-bold flex items-center justify-start text-[black] mt-3 text-[12px] ml-5'>Highlights of plan features</div>

        <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[gold] mr-3 text-[20px]"/>
          <p>Unlimited collaboration for plan members</p>
          </div>
          <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[gold] mr-3 text-[20px]"/>
          <p>Collection Recovery for 30days</p>
          </div>
          <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[gold] mr-3 text-[20px]"/>
          <p>Ulimited custom domain</p>
          </div>
          <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[gold] mr-3 text-[20px]"/>
          <p>Unlimited company members</p>
          </div>
          <div className='flex items-center ml-5 mt-5'>
          <FaRegCircleCheck className="text-[gold] mr-3 text-[20px]"/>
          <p>Unlimited Collaboration</p>
          </div>
      </div>
    </div>
  )
}

export default Upgrage;
