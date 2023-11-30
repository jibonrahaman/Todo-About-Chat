import React, { useEffect, useState } from 'react'
import {FaGooglePlusG,FaFacebookF,FaGithub,FaLinkedinIn} from 'react-icons/fa'
import {toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";


import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link} from 'react-router-dom';


const LoginReg = () => {

  const  [loader,setLoader]=useState(false)
  const  [condition,setCondition]=useState(false)

   const [email1 ,setemail1]=useState('')
   const [fullname ,setfullname]=useState('')
   const [password1 ,setpassword1]=useState('')

   const [emailErr1 ,setemailErr1]=useState('')
   const [fullnameErr ,setfullnameErr]=useState('')
   const [passwordErr1 ,setpasswordErr1]=useState('')
  
   const handleEmail1=(e)=>{
    setemail1(e.target.value);
    setemailErr1('')
   }
   const handleName=(e)=>{
    setfullname(e.target.value);
    setfullnameErr('')
   }
   const handlePassword1 =(e) =>{
    setpassword1(e.target.value);
    setpasswordErr1('')
   }
   const emailValid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   const passwordValid=/^(?=.{8,})/
   const handleSignUp =()=>{
    if(!email1){
      toast.error("Enter your  Email")
    }else if(!emailValid .test(email1)){
      toast.error("Enter your Valid Email ")
    }else if(!fullname){
      toast.error("Enter your Name")
    }else if (!password1){
      toast.error("Enter Your Password")
    }else if(!passwordValid.test(password1)){
      toast.error("Please Give 8 Character Password")
    }
   }
  

   
   const  [active,setActive]=useState(false)
   const  handleSignup=()=>{
     setActive(true)
    }
    const  handleLogin=()=>{
      setActive(false)
    }
    
    
    
    const  [eye,setEye]=useState(false)
    let handleEye2=()=>{
    setEye(false)
  }
  let handleEye1=()=>{
    setEye(true)
  }

  return (
    <>
    {/* For Desktop */}
    <div className='hidden md:block'>
      <div className='body'>
        <div className={`container rounded-lg  ${active?"active":""}`}>
          {/* Sign up start */}
            <div className='signup commomClass  flex justify-center items-center flex-col pl-8 pr-4'>
            <h1 className='text-center text-3xl text-black font-mon font-bold pb-6'>Sign Up</h1>
            <div className='flex gap-x-4 pb-4'>
                <div  className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
                <FaGooglePlusG className='text-lg'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaFacebookF className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaGithub className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaLinkedinIn className='text-sm'/>
                </div>
            </div>
            <p className='text-black text-sm font-normal font-mon pb-2'>or use your email for registeration</p>
            <input onChange={handleEmail1}  className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded ' type="text" placeholder='Email'/>
            <input onChange={handleName}  className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded ' type="text" placeholder='Name'/>
            <div className='relative w-full'>
            <input onChange={handlePassword1} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded ' type={eye?"text":"password"} placeholder='Password'/>
            {eye?
            <LuEyeOff onClick={handleEye2} className='absolute top-[17px] right-[20px] cursor-pointer text-[#9A9898] text-base '/>
            :
            <LuEye onClick={handleEye1} className='absolute top-[17px] right-[20px] cursor-pointer text-[#9A9898] text-base '/>
            }
            </div>
            {/* <p className='text-black text-sm font-medium font-mon pt-3 pb-5'>Forget Your Password?</p> */}
            {loader?
            <button>
              <Bars
                height="30"
                width="80"
                color="blue"
                ariaLabel="bars-loading"
                wrapperStyle={{
                marginTop:"15px",
                }}
                wrapperClass=""
                visible={true}
              />
            </button>
            :
            <button onClick={handleSignUp} className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md mt-4'>Sign Up</button>
            }
            
            </div>
            {/* Sign up end */}


           
            {/* Sign in Start */}
            <div className='signin commomClass  flex justify-center items-center flex-col pl-8 pr-4'>
            <h1 className=' text-center text-3xl text-black font-mon font-bold pb-6'>Sign In</h1>
            <div className='flex gap-x-4 pb-4'>
                <div className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
                <FaGooglePlusG  className='text-lg'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaFacebookF className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaGithub className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaLinkedinIn className='text-sm'/>
                </div>
            </div>
            
            <p className='text-black text-sm font-normal font-mon pb-2'>or use your email password</p>
            <input  className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type="text" placeholder='Email'/>
            <div className='relative w-full'>
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type={eye?"text":"password"} placeholder='Password'/>
            {/* {eye?
            <LuEyeOff onClick={handleEye2} className='absolute top-[17px] right-[20px] cursor-pointer text-[#9A9898] text-base '/>
            :
            <LuEye onClick={handleEye1} className='absolute top-[17px] right-[20px] cursor-pointer text-[#9A9898] text-base '/>
            } */}
            </div>
            {/* <Link to='/forgetpassword'><p className='text-black text-sm font-medium font-mon pt-3 pb-5 cursor-pointer'>Forget Your Password?</p></Link> */}
            
            {loader?
            <button>
            <Bars
              height="30"
              width="80"
              color="blue"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </button>
            :
            <button className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md '>Sign In</button>
            }
            </div>
            {/* Sign in end */}
            
            <div className='toggle-container'>
              <div className='toggle'>
              <div className='commonClass2 left'>
                <h2 className='text-center text-3xl text-white font-mon font-bold pb-6'>Welcome</h2>
                <p className='text-center text-white text-sm font-normal font-mon pb-6'>Enter your personal details to use all of site features</p>
                <button onClick={handleLogin} className=' py-1.5 px-8 text-white text-base font-mon font-semibold rounded-md border-2 border-solid border-[#988BD0] '>Log In</button>
            </div>
            {/* lsdflsdfls */}
              <div className='commonClass2 right '>
                <h2 className='text-center text-3xl text-white font-mon font-bold pb-6'>Hello, Friend!</h2>
                <p className='text-center text-white text-sm font-normal font-mon pb-6'>Register with your personal details to use all of site features</p>
                <button onClick={handleSignup} className=' py-1.5 px-8 text-white text-base font-mon font-semibold rounded-md border-2 border-solid border-[#988BD0] '>Sign Up</button>
            </div>
              </div>
            </div>

        </div>
    </div>
    </div>






     {/* For mobile */}
    {condition?
     <div className='md:hidden'>
      {/* Sign up */}
     <div className='flex justify-center items-center flex-col h-screen bg-[#c9d6ff] px-4'>
     <div className='bg-white flex justify-center items-center flex-col w-full rounded-lg px-6 sm:px-16'>
            <h1 className='text-center text-3xl text-black font-mon font-bold pb-7 pt-14'>Sign Up</h1>
            <div className='flex gap-x-4 pb-4'>
                <div  className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
                <FaGooglePlusG className='text-lg'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaFacebookF className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaGithub className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaLinkedinIn className='text-sm'/>
                </div>
            </div>
            <p className='text-black text-sm font-normal font-mon pb-4'>or use your email for registeration</p>
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="text" placeholder='Email'/>
            <input  className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="text" placeholder='Name'/>
            <input  className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="password" placeholder='Password'/>
            {/* <p className='text-black text-sm font-medium font-mon pt-3 pb-5'>Forget Your Password?</p> */}
            {loader?
            <button><Bars height="27"  width="80" color="blue" ariaLabel="bars-loading" wrapperStyle={{marginTop:"15px",marginBottom:"20px",}} wrapperClass="" visible={true}/>
            </button>
            :
            <button  className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md mb-6 mt-5'>Sign Up</button>
            }
            <p className='mb-12 text-xs text-black font-mon font-medium'>Already have an account ? <span onClick={()=>setCondition(false)} className='text-[#EA6C4B] cursor-pointer text-xs font-semibold'>Sign In</span></p>
            
            </div>
      </div>
     </div>
     :
     <div className='md:hidden'>
      {/* Sing in */}
     <div className='flex justify-center items-center flex-col h-screen bg-[#c9d6ff] px-4'>
      <div className='bg-white flex justify-center items-center flex-col w-full rounded-lg px-6 sm:px-16'>
      <h1 className='text-center text-3xl text-black font-mon font-bold pb-7 pt-14'>Sign In</h1>
            <div className='flex gap-x-4 pb-4'>
                <div className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
                <FaGooglePlusG  className='text-lg'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaFacebookF className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaGithub className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaLinkedinIn className='text-sm'/>
                </div>
            </div>
            
            <p className='text-black text-sm font-normal font-mon pb-4'>or use your email password</p>
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="text" placeholder='Email'/>
            <input   className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="password" placeholder='Password'/>
            <p className='text-black text-sm font-medium font-mon pt-5 pb-5 '>Forget Your Password?</p>
            {loader?
            <button>
            <Bars
              height="27"
              width="80"
              color="blue"
              ariaLabel="bars-loading"
              wrapperStyle={{marginBottom:"20px"}}
              wrapperClass=""
              visible={true}
            />
          </button>
            :
            <button  className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md mb-6 mt-1'>Sign In</button>
            }
            <p className='mb-12 text-xs text-black font-mon font-medium'>Don’t have an account ? <span onClick={()=>setCondition(true)} className='text-[#EA6C4B] cursor-pointer text-xs font-semibold'>Sign up</span></p>
      </div>
      </div>
     </div>
     }
    </>
  )
}

export default LoginReg