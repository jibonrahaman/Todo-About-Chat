import React from 'react'
import { SlHome } from "react-icons/sl";
import { TbVirusSearch } from "react-icons/tb";
import { MdExplore } from "react-icons/md";
import { PiFilmReelFill } from "react-icons/pi";
import { FcDoNotInhale } from "react-icons/fc";
import { BiSolidMessage } from "react-icons/bi";

function SideBar({className}) {
  return (
    <section className={`${className}`}>
     <div className='h-screen pl-7 pt-14  bg-black text-white '>
        <h2>InstAbout</h2>
        <div>
            <div className='flex flex-col pt-12 text-xl gap-y-7  '>
             <div className='flex gap-x-4 items-center '>
             <SlHome />
              <p>Home</p>
             </div>

              <div className='flex gap-x-4 items-center '>
              <TbVirusSearch />

              <p>Home</p>
             </div>

              <div className='flex gap-x-4 items-center '>
              <MdExplore />
              <p>Home</p>
             </div>

             <div className='flex gap-x-4 items-center '>
             <BiSolidMessage />
              <p>Home</p>
             </div>

              <div className='flex gap-x-4 items-center '>
              <FcDoNotInhale className='text-[#ffa726]' />
              <p>Home</p>
             </div> 
             <div className='flex gap-x-4 items-center '>
             <PiFilmReelFill />
              <p>Home</p>
             </div>
              <div className='flex gap-x-4 items-center '>
             <PiFilmReelFill />
              <p>Home</p>
             </div>
            </div>
        </div>
     </div>
    </section>
  )
}

export default SideBar
