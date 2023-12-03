import React, { createRef, useEffect, useState } from 'react'
import Product from '../../assets/Product4.png'
import Flex from '../../Components/Flex'
import { MdOutlineClose } from "react-icons/md";
import '../../Components/TodoAbout3/TodoAbout3.css'
import { FaLeaf, FaUpload } from "react-icons/fa";
import { Dna, FallingLines } from 'react-loader-spinner'
import Post from '../../pages/PostPart/Post';
import { ImUpload } from 'react-icons/im'
import { getAuth, updateProfile } from 'firebase/auth';
import { useSelector } from 'react-redux';
import "cropperjs/dist/cropper.css";
import { getDownloadURL, getStorage, ref as refs, uploadBytes, uploadString } from "firebase/storage";
import { Cropper } from 'react-cropper';
import { getDatabase, onValue, push, ref, set } from 'firebase/database'
// import {v4} from 'UUID'
// import {imgeDb} from '../../pages/Firebase/Firebase'
import { v4 as uuidv4 } from 'uuid';

function TodoAbout3() {
    const [backdropShow, setbackdropShow] = useState(false)
    const [postImg, setpostImg] = useState(true)
    const [ProfileImageUpload, setProfileImageUpload] = useState(null)
    const storage = getStorage();
    const db = getDatabase();
    const auth = getAuth();
    const data = useSelector(state => state.userLoginInfo.userInfo)
    const [task,setTask] = useState('')
    const [photo,setphoto]=useState('')
    const handlePostChange = (e)=>{
        setTask(e.target.value);
        console.log(e.target.value);
    }
    
//    const handleImgPostChnage =(e) =>{
//  console.log(e.target.files[0]);
//  const storageRef = refs(storage, 'some-child');
//  uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
//     getDownloadURL(storageRef).then((downloadURL) => {
//         console.log('File available at', downloadURL);
//         set(push(ref(db, 'post/')), {
//             img:downloadURL,
//             // date: `${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()}, ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} `,
            
//           })
//       });
//   });
//    }
    const [loader , setloader]=useState(false)
 const handleimgChange = (e)=>{
    setProfileImageUpload(e.target.files[0]);
 }
   const handleSubmit =()=>{
  setloader(true)
    const storageRef = refs(storage, uuidv4());
    uploadBytes(storageRef, ProfileImageUpload).then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {
        set(push(ref(db, 'posts/')), {
            text:task,
            postsendid:data.uid,
            postsendname:data.displayName,
          img:ProfileImageUpload != null &&  downloadURL,
       date: `${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()}, ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} `
        })
      });
      
    }).then(()=>{
       setTimeout(()=>{
        setloader(false)
        setProfileImageUpload(null)
        setbackdropShow(false)
       setTask('')
       },1500)
       
    })
   
    // const storageRef = refs(storage, ProfileImageUpload.name);
    // uploadString(storageRef,ProfileImageUpload ).then((snapshot) => {
    //     console.log('Uploaded a data_url string!');
    //     getDownloadURL(storageRef ).then((downloadURL) => {
    //       console.log('File available at', downloadURL);
         
    //     });
    //   });
    // const imgRef =ref(imgeDb, `files/${v4()}`)
    // uploadBytes(imgRef,ProfileImageUpload).then((snapshot)=>{
    
    // })
    // set(push(ref(db, 'post/')), {
    //     text: task,
    //     img:photo,
    //     // date: `${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()}, ${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} `,
        
    //   })
   }



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
                                    <Flex className="  gap-x-5 ml-3">
                                        <img src={data.photoURL} alt={data.photoURL} className='w-[60px] h-[60px] rounded-full' />
                                        <h4 className='mt-2 text-xl'>{data.displayName}</h4 >
                                    </Flex>
                                    <div className=' hello2 h-[200px]' >
                                        <textarea onChange={handlePostChange} value={task}  name="" id="" placeholder="What's on your mind? " className=' hello bg-[#242526] outline-none w-[450px] mt-5 px-3 py-10 resize-none  '>
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
                                                            <label  >
                                                                <Flex className=" text-center items-center ">
                                                                    <input onChange={handleimgChange} type="file" />
                                                                    <FaUpload />
                                                                    <p>Add Photos</p>
                                                                </Flex>
                                                            </label>
                                                            <MdOutlineClose onClick={() => setpostImg(true)} className=' absolute top-[-15px] right-[-15px] text-xl p-1 bg-slate-300 text-black' />
                                                        </Flex>
                                                        {/* <input id="file-input" type="file" /> */}
                                                    </div>
                                                </div>
                                        }

                                    </div>
                                   <div className=' relative'>
                                   {
                                        loader ?           
                                      <p className=' absolute top-[-42px]  left-[154px]'>
                                          <Dna
                                                visible={true}
                                                  height="80"
                                                width="80"
                                                ariaLabel="dna-loading"
                                                wrapperStyle={{}}
                                                wrapperClass="dna-wrapper"
                                                />
                                      </p>
                                           :
                                           
                                              <p onClick={handleSubmit} className=' text-center items-center mx-auto mt-3 px-5 py-1 bg-[#323436] hover:bg-[#0866ff] rounded-2xl duration-500'>post</p>  
                                            }
                                   </div>
                                 
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

