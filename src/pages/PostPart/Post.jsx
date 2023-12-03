import React, { useEffect, useState } from 'react'
import { CiSignpostDuo1 } from "react-icons/ci";
import Flex from '../../Components/Flex'
import { SiImagej } from "react-icons/si";
import { Link } from 'react-router-dom';
import Photos from '../PhotosPart/Photos';
import Product4 from '../../assets/Product4.png'
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { getDatabase, onValue, ref } from 'firebase/database';
import { MdPublic } from "react-icons/md";
import moment from 'moment'

function Post() {
  const [post,setpost]=useState(false);
  const [photos,setphotos]=useState(false);
  const data=useSelector(state => state.userLoginInfo.userInfo)
  const db=getDatabase();
  const handlePost =()=>{
    setpost(true)
    setphotos(false)
  }
  const handlePhotos = () =>{
    setphotos(true)
    setpost(false)
  }

  const [ShowPost,setShowPost]=useState([])
  useEffect(()=>{
    const postsRef = ref(db, 'posts/');
    onValue(postsRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
       if(data.uid == item.val().postsendid){
         arr.push({...item.val()})
       }
     
           })
      setShowPost(arr)
    })
  }, [])
  return (
  <section className=' mt-8'>
    <div  className=' border-t-2 border-[#212121]'>       
    </div>
  <Flex className="justify-center gap-x-14 mt-2">
<Link to="/home">
<div className=' relative' >
<div className={`bg-[#bdbdbd] w-20 h-[2px] absolute top-[-17px]  left-0 }`}></div>
<Flex className=" gap-x-2  items-center ">
   <CiSignpostDuo1 />
   <span >POSTS</span>
   </Flex>
  
  <div className='bg-white px-6 mt-3 rounded-md w-[1100px]   overflow-y-scroll h-[500px]'>
<Flex className=" flex-col ">
     {
      ShowPost.map((item)=>{
         return <div className='bg-black my-6  text-[rgb(163,155,155)] px-4 py-2 rounded-xl'>
        <Flex className=" " >
     <Flex className=" items-center gap-x-4 ">
     <img src={data.photoURL} alt={data.photoURL} className=' w-[60px] h-[60px] rounded-full' />
         <h3 className=' text-white mt-1 text-3xl'>{data.displayName}</h3>
         <Flex className=" items-center gap-x-1 text-white">
         <MdPublic />
    <p>
      {
        moment(item.date , "YYYYMMDD hh:mm:ss a").fromNow()
      }
    </p>
         </Flex>
     </Flex>

         </Flex>
         <div className=' my-2'>
           <h2 className='mt-7 mb-3 text-white'>
         {
          item.text
         }
           </h2>
           <img src={item.img} alt={item.img}  className=' mx-auto mb-4' />
           <div className=' my-2'>
             <p className='border'></p>
             <div className='my-2'>
             <FaRegHeart className=' text-3xl ml-6' />
              </div>
             <p className='border'> </p>
           </div>
         </div>
            </div>
      })
     }
       
</Flex>
     
    

       
   </div>
  </div>

</Link>

<Link to="/photos">
 <div  className=' relative'>
 
 <Flex className="  items-center gap-x-2 absolute right-[940px]">
   <SiImagej />
       <span>PHOTOS</span>
   </Flex>
     
 </div>
 </Link>



  </Flex>
  </section>
  )
}

export default Post
