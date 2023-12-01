import React, { useState } from 'react'
import Product from '../../assets/Product4.png'
import Flex from '../../Components/Flex'
import { MdOutlineClose } from "react-icons/md";
 import '../TodoAbout/TodoAbout.css'
 import { FaUpload } from "react-icons/fa";
 import { ProgressBar } from 'react-loader-spinner'
function TodoAbout() {
  const [backdropShow,setbackdropShow] = useState(false)
  const [postImg,setpostImg]=useState(true)
  return (
    <section className=' '>
        <div  className=' h-screen text-white  px-44 pt-10 ' >
               <Flex className="  items-center gap-x-20">
                <div>
                    <img src={Product} alt={Product} className=' w[200px] h-[200px] rounded-full' />
                </div>
                <Flex className=' flex-col'>
                <Flex className=" items-center gap-x-8">
                    <h2 className=' font-text text-2xl'>Jibon</h2>
                    <p className=' px-4 py-2 bg-[#131313] hover:bg-[#363636] duration-300 rounded-lg text-white '>Edite Profile</p>
                    <p className=' px-4 py-2 bg-[#131313] hover:bg-[#363636] duration-300 rounded-lg text-white '>View Archive</p>
                </Flex> 
                <Flex className=" mt-3 items-center gap-x-14">
                   <p>0 posts</p>
                   <p>64 followers</p>
                   <p>4 following</p>
                </Flex>
                </Flex>
             </Flex>

             <Flex className=" items-center mt-10  gap-x-14 ">
              <Flex className=" gap-x-3 items-center">
              <h2 className='text-white text-2xl'>posts Photo/Status</h2>
              <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor = '#F4442E'
                barColor = '#51E5FF'
              />
              </Flex>
             <div className=' w-[520px] rounded-md px-4 py-4 bg-[#242526] '>
        <Flex className=" gap-x-2">
        <img src={Product} alt={Product} className='w-[50px] h-[50px] rounded-full' />
        <input onClick={()=>setbackdropShow(!backdropShow)} type="text" placeholder="What's your mind?" className='w-[400px] rounded-2xl px-3 hover:bg-[#4e4f50] bg-[#3a3b3c] focus:outline-none' />
        </Flex>
        <div className='border mt-2 border-[#37383a]'></div>
            </div>
             </Flex>
             
                {/* backdrop */}
                    {
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
                    }
                {/* backdrop */}
            </div>
   
    </section>
  )
}

export default TodoAbout
