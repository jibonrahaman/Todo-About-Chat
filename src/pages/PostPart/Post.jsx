import React, { useState } from 'react'
import { CiSignpostDuo1 } from "react-icons/ci";
import Flex from '../../Components/Flex'
import { SiImagej } from "react-icons/si";

function Post() {
  const [post,setpost]=useState(false);
  const [photos,setphotos]=useState(false);
  const handlePost =()=>{
    setpost(true)
  }
  const handlePhotos = () =>{
    setphotos(true)
  }
  return (
  <section className=' mt-14'>
    <div  className=' border-t-2 border-[#212121] relative '>
        <div className={`bg-[#bdbdbd] w-16 h-[2px] absolute top-0  left-[39%]`}></div>
    </div>
  <Flex className="justify-center gap-x-14 mt-3">
<div onClick={handlePost}>
<Flex className=" gap-x-2  items-center">
   <CiSignpostDuo1 />
   <span >POSTS</span>
   </Flex>
</div>
  <div onClick={handlePhotos}>
  <Flex className="  items-center gap-x-2">
   <SiImagej />
       <span>PHOTOS</span>
   </Flex>
  </div>
  </Flex>
  </section>
  )
}

export default Post
