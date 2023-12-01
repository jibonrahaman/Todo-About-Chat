import React, { useState } from 'react'
import { CiSignpostDuo1 } from "react-icons/ci";
import Flex from '../../Components/Flex'
import { SiImagej } from "react-icons/si";
import { Link } from 'react-router-dom';
import Photos from '../PhotosPart/Photos';
import Product4 from '../../assets/Product4.png'
import { FaRegHeart } from "react-icons/fa6";

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
     
   
   <div className='bg-white px-6 rounded-md pb-3 w-[600px] overflow-y-scroll h-[380px]'>
   <div className='bg-black my-6  text-[rgb(163,155,155)] px-4 py-2 rounded-xl'>
   <Flex className=" gap-x-4">
    <img src={Product4} alt={Product4} className=' w-[60px] h-[60px] rounded-full' />
    <h3 className=' text-white mt-1 text-3xl'>Jibon</h3>
    </Flex>
    <div className=' mt-2'>
    <img src={Product4} alt={Product4} className=' mx-auto rounded-md' />
      <div className=' mt-1'>
        <p className='border'></p>
        <div className='my-2'>
        <FaRegHeart className=' text-3xl ml-6' />

        </div>
        <p className='border'> </p>
      </div>
    </div>
   
    
       </div> <div className='bg-black my-6  text-[rgb(163,155,155)] px-4 py-2 rounded-xl'>
   <Flex className=" gap-x-4">
    <img src={Product4} alt={Product4} className=' w-[60px] h-[60px] rounded-full' />
    <h3 className=' text-white mt-1 text-3xl'>Jibon</h3>
    </Flex>
    <div className=' mt-2'>
    <img src={Product4} alt={Product4} className=' mx-auto rounded-md' />
      <div className=' mt-1'>
        <p className='border'></p>
        <div className='my-2'>
        <FaRegHeart className=' text-3xl ml-6' />

        </div>
        <p className='border'> </p>
      </div>
    </div>
   
    
       </div>
     

       
   </div>

 </div>
 </Link>



  </Flex>
  </section>
  )
}

export default Post2

