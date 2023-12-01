import React from 'react'
import { CiSignpostDuo1 } from "react-icons/ci";
import Flex from '../../Components/Flex'
import { SiImagej } from "react-icons/si";

function Post() {
  return (
  <section className=' mt-10'>
    <div  className=' border-t-2 border-[#212121] relative '>
        <div className='bg-red-400 w-12 h-[2px] absolute top-0  left-[50%]'></div>
    </div>
  <Flex className="justify-center gap-x-14 mt-3">
  <Flex className=" gap-x-2  items-center">
   <CiSignpostDuo1 />
   <span >POSTS</span>
   </Flex>
   <Flex className="  items-center gap-x-2">
   <SiImagej />
       <span>PHOTOS</span>
   </Flex>
  </Flex>
  </section>
  )
}

export default Post
