import React, { useState } from 'react'
import Product from '../../assets/Product4.png'

import { MdOutlineClose } from "react-icons/md";
 import '../TodoAbout2/TodosAbout2.css'
 import { FaUpload } from "react-icons/fa";
 import { FallingLines } from 'react-loader-spinner'
import Flex from '../../Components/Flex';
import Post from '../PostPart/Post';
import Post2 from '../Post2/Post2';
function TodosAbout2() {
  const [backdropShow,setbackdropShow] = useState(false)
  const [postImg,setpostImg]=useState(true)
  return (
    <section className=' '>
        <div  className=' h-screen text-white  px-44 pt-4 ' >
             

             {/* <Flex className=" items-center mt-4  gap-x-10 ">
              <Flex className=" gap-x-5 items-center">
              <h2 className='text-white text-2xl'>posts Photo/Status</h2>
              <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel='falling-lines-loading'
            />
              </Flex>
             <div className=' w-[520px] rounded-md px-4 py-4 bg-[#242526] '>
        <Flex className=" gap-x-2">
        <img src={Product} alt={Product} className='w-[50px] h-[50px] rounded-full' />
        <input onClick={()=>setbackdropShow(!backdropShow)} type="text" placeholder="What's your mind?" className='w-[400px] rounded-2xl px-3 hover:bg-[#4e4f50] bg-[#3a3b3c] focus:outline-none' />
        </Flex>
        <div className='border mt-2 border-[#37383a]'></div>
            </div>
             </Flex> */}
             <Post2 />
             
                {/* backdrop */}
                    {/* {
                      backdropShow && 
                      <section className='backdrop'>
                      <div className="absolute top-0 left-0 w-full h-screen z-10 backdrop-blur-sm flex justify-center items-center ">
                      <div className=' bg-[#242526] px-4 py-6 relative'>
                    <Flex className=" justify-center ">
                      <h2 className=' text-xl'>Create Post</h2>    
                      <MdOutlineClose onClick={()=>setbackdropShow(false)} className=' absolute top-0 right-1 text-5xl p-1 bg-slate-300 text-black'/>
                    </Flex>
                    <div >
                      <Flex className="  gap-x-3 ml-3">
                      <img src={Product} alt={Product} className='w-[60px] h-[60px] rounded-full' />
                      <h4 className='mt-2'>Jibon</h4 >
                      </Flex>
                    <div className=' hello2 h-[200px]' >
                    <textarea name="" id=""   placeholder="What's on your mind? " className=' hello bg-[#242526] outline-none w-[450px] mt-5 px-3 py-10 resize-none  '>
                      </textarea>
                    {
                      postImg ?
                      <div  onClick={()=>setpostImg(false)} className='flex gap-x-4 items-center'>
                    <FaUpload />
                    <p>Photo Upload</p>
                    </div>
                    :
                    <div className='  ml-6  w-[400px] border p-4 border-[#323436] '>
                    <div class="image-upload">
              <Flex className="justify-center relative">
              <label for="file-input">
              <Flex className=" text-center items-center ">
              <FaUpload />
                <p>Add Photos</p>
              </Flex>
                </label>
                <MdOutlineClose onClick={()=>setpostImg(true)}  className=' absolute top-[-15px] right-[-15px] text-xl p-1 bg-slate-300 text-black'/>
              </Flex>
                <input id="file-input" type="file" />
              </div>
                    </div>
                    }
                    
                    </div>
                    <p className=' text-center items-center mx-auto mt-3 px-5 py-1 bg-[#323436] hover:bg-[#0866ff] rounded-2xl duration-500'>post</p>
                    </div>
                      </div>
                      </div>
                    </section>
                    } */}
                {/* backdrop */}
            </div>
   
    </section>
  )
}

export default TodosAbout2
