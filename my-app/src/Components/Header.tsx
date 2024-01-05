import React,{useState} from 'react'
import { IoPartlySunny } from "react-icons/io5";
import { GiNightSleep } from "react-icons/gi";
import { IoLogoAndroid } from "react-icons/io";
import { LuLogOut} from "react-icons/lu";
import img from "../assets/passport.jpg"
import img2 from "../assets/CodeLab Best Logo.png"
import { NavLink } from 'react-router-dom';



const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const onToggle = () =>{
        setToggle(!toggle)
    }
  return (
    <div className='flex w-full h-[70px] border-b'>
      <div className='flex items-center justify-between w-[96%] border-b'>
        <div className='w-[190px] ml-9'>
        <img src={img2} alt="" />
        </div>
        <div className='flex items-center'>
            <div className=' w-12 h-12 flex justify-center items-center rounded-full  font-bold text-[20px] mx-2 overflow-hidden cursor-pointer'
            onClick={onToggle}
            >
                <img src={img} alt="" className='rounded-[50%]'/>
            </div>
            <div className='flex item-center bg-gray-200 px-py-2 border rounded-md py-1 shadow-md w-[170px]'>
               <NavLink 
               to="/dark" className={({isActive}: any) =>
            isActive ? "mx-1 text-[25px] text-[#565656] rounded-[4px] py-1 px-3 shadow-sm" : "mx-1 text-[35px] rounded-[4px] py-1 px-2  "
            }
               >
               <IoPartlySunny size={25}/> 
               </NavLink>
               <NavLink to="/"
               className={({isActive}: any) =>
            isActive ? "mx-2 text-[30px] bg-white text-[#F1946E] rounded-md py-1 px-1 shadow-md cursor-pointer flex justify-center items-center w-[40%]" : "mx-2 text-[30px]  text-[#565656] flex items-center justify-center rounded-sm py-1 px-2 shadow-md cursor-pointer w-[40%]"
            }
               >
               < GiNightSleep size={25} /> 
               </NavLink>
               <NavLink to="/dark"
               className={({isActive}: any) =>
            isActive ? "mx-2 text-[30px] bg-white text-[#F1946E] rounded-sm py-1 px-2 shadow-md cursor-pointer flex justify-center items-center w-[40%]" : "mx-2 text-[30px]  text-[#565656] flex items-center justify-center rounded-sm py-1 px-2 shadow-md cursor-pointer w-[40%]"
            }
               >
              <IoLogoAndroid size={25}/> 
               </NavLink>
            </div>
        </div>
      </div>
      {toggle && (
        <div className='w-[400px] h-[300px] border shadow-md absolute right-[15%] mt-[90px]'>
        <div className='flex mt-[30px] ml-[20px]'>
        <div className=' w-12 h-12 flex justify-center items-center rounded-full  font-bold text-[20px] mx-2 overflow-hidden'>
            <img src={img} alt="" className='rounded-[50%]'/>
        </div>
            <div>
                <div className='font-bold'>Ajayi Gabriel</div>
                <div>Email: <span className='font-[italic] text-[green]'>gabrieldotajayi@gmail.com</span></div>
            </div>
        </div>
        <div className="mt-6 pl-4 py-3 flex items-center  text-[gray] hover:bg-[#F1946E] transition-all duration-200 hover:cursor-pointer ">
        <LuLogOut size={25} className="ml-[20px]"/>
        <span className='ml-[200px] font-bold'>
          Log Out
        </span>
      </div>
  </div>
      )}
    </div>
  )
}

export default Header;
