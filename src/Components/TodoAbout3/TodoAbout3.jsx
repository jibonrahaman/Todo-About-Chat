import React, { createRef, useState } from 'react'
import Product from '../../assets/Product4.png'
import Flex from '../../Components/Flex'
import { MdOutlineClose } from "react-icons/md";
import '../../Components/TodoAbout3/TodoAbout3.css'
import { FaUpload } from "react-icons/fa";
import { FallingLines } from 'react-loader-spinner'
import Post from '../../pages/PostPart/Post';
import { ImUpload } from 'react-icons/im'
import { getAuth, updateProfile } from 'firebase/auth';
import { useSelector } from 'react-redux';
import "cropperjs/dist/cropper.css";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { Cropper } from 'react-cropper';

function TodoAbout3() {
    const [backdropShow, setbackdropShow] = useState(false)
    const [postImg, setpostImg] = useState(true)
    const [ProfileImageUpload, setProfileImageUpload] = useState(false)
    const storage = getStorage();
    const auth = getAuth();
    const data = useSelector(state => state.userLoginInfo.userInfo)
   
    return (
        <section className=' '>
            <div className=' h-screen text-white  px-16 pt-4 ' >


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
                            <img src={data.photoURL} alt={data.photoURL} className='w-[50px] h-[50px] rounded-full' />
                            <input onClick={() => setbackdropShow(!backdropShow)} type="text" placeholder="What's your mind?" className='w-[400px] rounded-2xl px-3 hover:bg-[#4e4f50] bg-[#3a3b3c] focus:outline-none' />
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
                                    <MdOutlineClose onClick={() => setbackdropShow(false)} className=' absolute top-0 right-1 text-5xl p-1 bg-slate-300 text-black' />
                                </Flex>
                                <div >
                                    <Flex className="  gap-x-3 ml-3">
                                        <img src={data.photoURL} alt={data.photoURL} className='w-[60px] h-[60px] rounded-full' />
                                        <h4 className='mt-2'>Jibon</h4 >
                                    </Flex>
                                    <div className=' hello2 h-[200px]' >
                                        <textarea name="" id="" placeholder="What's on your mind? " className=' hello bg-[#242526] outline-none w-[450px] mt-5 px-3 py-10 resize-none  '>
                                        </textarea>
                                        {
                                            postImg ?
                                                <div onClick={() => setpostImg(false)} className='flex gap-x-4 items-center'>
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
                                                            <MdOutlineClose onClick={() => setpostImg(true)} className=' absolute top-[-15px] right-[-15px] text-xl p-1 bg-slate-300 text-black' />
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

export default TodoAbout3

