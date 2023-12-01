import React, { useState } from 'react'
import { CiSignpostDuo1 } from "react-icons/ci";
import Flex from '../../Components/Flex'
import { SiImagej } from "react-icons/si";
import { Link } from 'react-router-dom';
import Photos from '../PhotosPart/Photos';

function Post2() {
  const [post,setpost]=useState(false);
  const [photos,setphotos]=useState(false);
  const handlePost =()=>{
    setpost(true)
    setphotos(false)
  }
  const handlePhotos = () =>{
    setphotos(true)
    setpost(false)
  }
  return (
  <section className=' mt-8'>
    <div  className=' border-t-2 border-[#212121] '>
       
       
    </div>
  <Flex className="justify-center gap-x-14 mt-3">
<Link to="/home">
<div >
<div className={`bg-[#bdbdbd] w-20 h-[2px] absolute top-[-17px]  left-0 }`}></div>
<Flex className=" gap-x-2  items-center">
   <CiSignpostDuo1 />
   <span >POSTS</span>
   </Flex>
   
</div>
</Link>

<Link to="/photos">
 <div  className=' relative'>
 <div className={` bg-[#bdbdbd] w-20 h-[2px] absolute top-[-17px]  left-2 }`}></div>
 <Flex className="  items-center gap-x-2">
   <SiImagej />
       <span>PHOTOS</span>
   </Flex>
     
 </div>
 </Link>



  </Flex>
  </section>
  )
}

export default Post2

