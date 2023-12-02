import React, { useState } from 'react'
import Product from '../../assets/Product4.png'
import Flex from '../../Components/Flex'
import { MdOutlineClose } from "react-icons/md";
 import '../TodoAbout/TodoAbout.css'
 import { FaUpload } from "react-icons/fa";
 import { FallingLines } from 'react-loader-spinner'
import Post from '../PostPart/Post';
import { ImUpload } from 'react-icons/im'
function TodoAbout() {
  const [backdropShow,setbackdropShow] = useState(false)
  const [postImg,setpostImg]=useState(true)
  const [ProfileImageUpload ,setProfileImageUpload] =useState(false)
  const handleShowUpload =()=>{
   setProfileImageUpload(true)
  }
  return (
    <section className=' '>
        <div  className=' h-screen text-white  px-44 pt-4 ' >
               <Flex className="  items-center gap-x-20">
                <div onClick={handleShowUpload} className=' relative group'>
                    <img src={Product} alt={Product} className=' w[200px] h-[200px] rounded-full' />
                    <Flex className='w-full   h-full group-hover:bg-[rgb(0,0,0,0.41)] opacity-0 group-hover:opacity-100 duration-500 absolute top-0 left-0 rounded-full justify-center  items-center text-center cursor-pointer  '>
            <ImUpload  className='text-2xl text-white ' />
          </Flex>
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

             <Flex className=" items-center  gap-x-10 ">
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
             </Flex>
             <Post />
             
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

            {
  ProfileImageUpload &&
  <div className=' backdrop-blur-md  h-screen   bg-signBtn w-full absolute top-0 left-0 z-10 '>
          <div className='bg-[#777] w-1/2 mx-auto mt-16  p-5 '>
            <h2 className='text-4xl text-white ml-40'>Upload Your Image</h2>

            <div className=' relative w-[100px] mx-auto  mt-3  h-[100px] rounded-full  '>            
           <img src="" alt="" className=" w-full h-full rounded-full border mt-3" />
            </div>
            <input  type="file" className='mt-3 mb-4' />
            
            <Flex className=" mt-4 gap-x-7">
              <button  type='button' className='  bg-signBtn bg-blue-400 text-white px-6 py-2 duration-300 rounded-lg hover:bg-black hover:text-signBtn '>Upload </button>
              <button onClick={()=>setProfileImageUpload(false)}  type='button' className=' bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-black hover:text-red-900 '>Cancel </button>

            </Flex>

          </div>
        </div>  
}
   
    </section>
  )
}

export default TodoAbout
