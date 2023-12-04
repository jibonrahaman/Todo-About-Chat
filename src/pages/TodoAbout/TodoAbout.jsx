import React, { createRef, useState } from 'react'
import Product from '../../assets/Product4.png'
import Flex from '../../Components/Flex'
import { MdOutlineClose } from "react-icons/md";
 import '../TodoAbout/TodoAbout.css'
 import { FaUpload } from "react-icons/fa";
 import { FallingLines } from 'react-loader-spinner'
import Post from '../PostPart/Post';
import { ImUpload } from 'react-icons/im'
import { getAuth, updateProfile } from 'firebase/auth';
import { useSelector } from 'react-redux';
import "cropperjs/dist/cropper.css";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { Cropper } from 'react-cropper';

function TodoAbout() {
  const [backdropShow,setbackdropShow] = useState(false)
  const [postImg,setpostImg]=useState(true)
  const [ProfileImageUpload ,setProfileImageUpload] =useState(false)
  const storage = getStorage();
  const auth = getAuth();
  const data=useSelector(state => state.userLoginInfo.userInfo)
  console.log(data.photoURL);
  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState('');
  const cropperRef = createRef();
  const handleUploadChange =(e)=>{
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;

    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  }

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const storageRef = ref(storage, auth.currentUser.uid);
      const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, 'data_url').then((snapshot) => {
        console.log('Uploaded a data_url string!');
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log('File available at', downloadURL);
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }).then(()=>{
            setProfileImageUpload(false)
          })
        });
      });
    }
  };

  const handleShowUpload =()=>{
   setProfileImageUpload(true)
  }
  return (
    <section className=' '>
        <div  className=' h-screen text-white  px-44 pt-4 ' >
               <Flex className="  items-center gap-x-20">
                <div onClick={handleShowUpload} className=' relative group'>
                    <img src={data.photoURL} alt={data.photoURL} className=' w[200px] h-[200px] rounded-full' />
                    <Flex className='w-full   h-full group-hover:bg-[rgb(0,0,0,0.41)] opacity-0 group-hover:opacity-100 duration-500 absolute top-0 left-0 rounded-full justify-center  items-center text-center cursor-pointer  '>
            <ImUpload  className='text-2xl text-white ' />
          </Flex>
                </div>
                <Flex className=' flex-col'>
                <Flex className=" items-center gap-x-8">
                    <h2 className=' uppercase font-bold text-2xl text-[#ecddc1]'>{data.displayName}</h2>
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
            </div>

            {
  ProfileImageUpload &&
  <div className=' backdrop-blur-md   h-screen   bg-signBtn w-full absolute top-0 left-0 z-20 '>
          <div className='bg-[#777] w-1/2 mx-auto mt-16  p-5 '>
            <h2 className='text-4xl text-white ml-40'>Upload Your Image</h2>

            <div className=' relative w-[100px] mx-auto  mt-3  h-[100px] rounded-full'>

              {
                image ?
                <div
            className="img-preview w-[100px] h-[100px] rounded-full overflow-hidden "
            
          />
      
        :
        <img src={data.photoURL} alt={data.photoURL} className=" w-full h-full rounded-full border mt-3" />
              }            
            </div>
            <input onChange={handleUploadChange}  type="file" className='mt-3 mb-4' />
           {
          
              image &&
            <Cropper
            ref={cropperRef}
            style={{ height: 300, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            guides={true}
          />
      
           }
            
            <Flex className=" mt-4 gap-x-7">
              <button onClick={getCropData}  type='button' className='  bg-signBtn bg-blue-400 text-white px-6 py-2 duration-300 rounded-lg hover:bg-black hover:text-signBtn '>Upload </button>
              <button onClick={()=>setProfileImageUpload(false)}  type='button' className=' bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-black hover:text-red-900 '>Cancel </button>

            </Flex>

          </div>
        </div>  
}
   
    </section>
  )
}

export default TodoAbout
