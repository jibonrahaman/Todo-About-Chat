import React from 'react'
import { SlHome } from "react-icons/sl";
import { TbVirusSearch } from "react-icons/tb";
import { MdExplore } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { FcDoNotInhale } from "react-icons/fc";
import { BiSolidMessage } from "react-icons/bi";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import Flex from '../../Components/Flex'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../Components/Slices/UserSlice';
function SideBar({className}) {
  const auth = getAuth();
  const navigate =useNavigate();
  const dispatch=useDispatch();

  const handleLogOut = () =>{
    signOut(auth).then(() => {
      navigate('/')
      dispatch(userLoginInfo(null))
      localStorage.removeItem('userLoginInfo')

  
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <section className={`${className} `}>
     <div className=' pl-7 h-screen pt-8  bg-black text-white '>
        <h2>InstAbout</h2>
        <div>
            <div className='flex flex-col gap-y-5 pt-12 text-xl   '>
             <div className='flex gap-x-4 items-center hover:bg-[#1a1a1a]  px-4 py-3 rounded-lg '>
             <SlHome />
              <p>Home</p>
             </div>

              <div className='flex gap-x-4 items-center hover:bg-[#1a1a1a]  px-4 py-3 rounded-lg '>
              <TbVirusSearch />
              <p>Search</p>
             </div>

              <div className='flex gap-x-4 items-center hover:bg-[#1a1a1a]  px-4 py-3 rounded-lg '>
              <MdExplore />
              <p>Explore</p>
             </div>

             <div className='flex gap-x-4 items-center hover:bg-[#1a1a1a]  px-4 py-3 rounded-lg '>
             <BiSolidMessage />
              <p>Message</p>
             </div>

              <div className='flex gap-x-4 items-center hover:bg-[#1a1a1a]  px-4 py-3 rounded-lg '>
              <FcDoNotInhale className='text-[#ffa726]' />
              <p>Notificaiton</p>
             </div> 

             <div className='flex gap-x-4 items-center hover:bg-[#1a1a1a]  px-4 py-3 rounded-lg '>
           <VscGitPullRequestCreate  className='text-[#ffff00]'/>
              <p>Create</p>
             </div>

              <div className='flex gap-x-4 items-center ml-4 '>
                 <p>Profile</p>
             </div> 

          <Flex className=" justify-end bg-[#52522f] rounded-lg duration-500 px-4 py-3 hover:bg-[#1a1a1a]  ">
          <CiLogout onClick={handleLogOut} className=' text-3xl  text-white ' />
          </Flex>
        
            </div>
        </div>
     </div>
     
    </section>
  )
}

export default SideBar
