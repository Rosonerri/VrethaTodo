import {useState, useEffect} from 'react';
import img from "../assets/todoList.jpeg"
import { GiArmorUpgrade } from "react-icons/gi";
// import {MdOutlineAddTask} from "react-icons/md";
import { CgGym} from "react-icons/cg";
// import {FaPeopleRobbery} from "react-icons/fa6";
import {BsPlus, BsX} from "react-icons/bs"
import { Link } from 'react-router-dom';
import { viewProjects } from '../Api/projectAPI';
import { NavLink } from 'react-router-dom';
import ModelDisplay from './modelDisplay';



const Sider = () => {
  const user = JSON.parse(localStorage.getItem("user")!)
  const [state, setState]: any = useState<Array<any>>([]);
  const [toggle, setToggle] = useState<boolean>(false)


  useEffect(() =>{
    viewProjects(user?._id).then((res) =>{
      setState(res.data)
    })
  }, [])

  console.log(state?.project)
  return (
    <div className="w-[250px] h-[calc(100vh-52px)] bg-[white] border-r">
        <div className=''>
        <div><img src={img} alt="" /></div>
        <div className='font-[400] ml-[5px] text-[#D7A35F]'>Vretha Dashboard</div>
        </div>
        <h3 className='font-bold text-[13px] mt-[10px] ml-[5px]'>You Are On Free Mode</h3>
        <div className='border text-center w-[60%] py-[10px] rounded-md mt-[30px] cursor-pointer flex items-center justify-center bg-[#D7A35F] ml-10 hover:bg-[white] transition-all transition-duration-150ms mb-[10px]'>
        <GiArmorUpgrade className="mr-[5px] "/>
        <Link to="/Upgrade">
        <button className='font-bold'>UPRADE</button>
        </Link>
            </div>
            <hr />
            <div className='font-bold text-[13px] ml-[5px] mt-[5px]'>Projects</div>

        
          {state?.project?.map((props: any, i: number) =>(
            <NavLink 
            to={`homescreen/${props._id}`}
            className='flex items-center justify-center mt-[10px] ml-[37px] border w-[150px] py-[5px] rounded-sm shadow-md cursor-pointer'
              key={i}
              onClick={() =>{
                console.log(props._id)
              }}
            >
            <div className='mr-[10px] text-[20px]'><CgGym /></div>
            <div className=''>{props?.projectName}</div>
            </NavLink>

          ))}
           
            {toggle ? (
              <div className='text-[60px] mt-[30px] ml-[70px] w-[60px] rounded-[50%] shadow-md h-[60px] flex items-center justify-center cursor-pointer'>
              <BsX
               onClick={() =>{
                setToggle(!toggle)
                }}
              />
            </div>
            ) : (
              <div className='text-[60px] mt-[30px] ml-[70px] w-[60px] rounded-[50%] shadow-md h-[60px] flex items-center justify-center cursor-pointer'>
              <BsPlus
               onClick={() =>{
                setToggle(!toggle)
                }}
              />
            </div>
            )}
            
            <h4 className='ml-[65px] font-[700] text-[12px] mt-[5px]'>Add Project</h4>

            {toggle && <ModelDisplay toggle={toggle} setToggle={setToggle}/>}
    </div>
  )
}

export default Sider;
