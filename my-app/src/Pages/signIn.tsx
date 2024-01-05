import React,{useState} from 'react'
import * as yup from "yup"
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { PuffLoader} from "react-spinners"
import {useForm} from "react-hook-form"

const signIn = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const schema = yup.object({
        companyName: yup.string().required("Company Name must be filled"),
        email: yup.string().email().required("Email must be filled"),
        password: yup.string().min(6).required("Password must be filled"),
        confirm: yup.string().oneOf([yup.ref("password")]),
    });
    const {
        reset,
        register, 
        handleSubmit,
        formState: { errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onHandleSubmit = handleSubmit((data) =>{
        setToggle(true);
        console.log(data)
    })
  return (
    <div className='flex items-center justify-center w-full h-screen bg-[white]'>
      <form className='border rounded-md w-[500px] min-h-[650px] shadow-sm mx-4' onSubmit={onHandleSubmit}>
        <div className='pl-4 mt-8' >
        <span className='font-bold text-[20px] mb-[30px]'>Sign In</span>
        <br />
        <br />
       
        <div className='mt-[15px]'>
            <div className='font-[500]'>Email</div>
            <input type="text" placeholder='Email' className='w-[95%] outline-0 border h-[35px]'{...register("email")}/>
            {errors.email?.message && (
            <div className='text-[crimson] justify-end flex mr-[30px]'>{errors.email?.message}</div>
            )}
        </div>
        <div className='mt-[15px]'>
            <div className='font-[500]'>Password</div>
            <input type="text" placeholder='Password' className='w-[95%] outline-0 border h-[35px]'  {...register("password")}/>
            {errors.password?.message && (
            <div className='text-[crimson] justify-end flex mr-[30px]'>{errors.password?.message}</div>

            )}
        </div>
       
        </div>
       <div className='ml-[70px] mt-[20px] mr-[55px]'>
       <button className='border py-2 w-[90%] bg-purple-600 text-[white] font-bold mb-5' type='submit'
       onClick={()=>{
        setToggle(true)
       }}
       >
        {toggle ? <PuffLoader color="white" size={11} /> : "Sign In" }
       </button>
       
       <div className='flex items-center justify-center'>
        <div className='border-b w-full'></div>
        <div className='mr-3 ml-3 mb-5 mt-3'>Or</div>
        <div className='border-b w-full mr-10'></div>
       </div>
       <div className='flex mr-10'>
       <button className='border py-2 w-[90%] bg-red-800 text-[white] font-bold mb-5'>with Google</button>
       <button className='border py-2 w-[90%] bg-blue-900 text-[white] font-bold ml-5 mb-5'>with Facebook</button>
       </div>
       </div>
      </form>
    </div>
  )
}

export default signIn;
