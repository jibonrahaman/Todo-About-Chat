import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import TodoAbout from '../TodoAbout/TodoAbout'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import email from '../../assets/email.jpg'
import { FaRegHandPointDown } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { RotatingLines } from 'react-loader-spinner'
import Flex from '../../Components/Flex'

function HomePage() {
  const navigate = useNavigate();
  const data = useSelector(state => state.userLoginInfo.userInfo)
  const [verifyemail, setveryfyemail] = useState(false)
  const [loader, setloader] = useState(true)
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    console.log(user.emailVerified);
    if (user.emailVerified == true) {
      setveryfyemail(true)
      setloader(false)
    }
  });

  const handleBack = () => {
    if (verifyemail == false) {
      navigate('/')
    }
  }
  useEffect(() => {
    if (!data) {
      navigate('/')
    }
  }, [])

  return (
    <section  >

      {
        loader ?
          (    <div className="flex justify-center items-center h-screen">
               <RotatingLines
          strokeColor="black"
          strokeWidth="5"
          animationDuration="0.75"
          width="120"
          height="120" 
          visible={true}  />
            </div>    )

          :
          verifyemail ?
            ( <div>
                <div className='flex '>
                  <SideBar className=" w-[17%]" />
                  <div class="border-r-[1px] border-[#212121]"></div>
                  <div className='bg-[#000000] w-[83%] '>
                    <TodoAbout />
                  </div>
                </div>
              </div>     )

            :
            (   <div className='h-screen '>
                {/* veryfemail */}

                <div className='mx-auto  items-center text-center pt-24 group '>
                  <h2 className=' text-5xl text-[#777]'>Verify Your Email</h2>
                  <h2 className='text-[#777] mt-5 text-3xl group-hover:text-signBtn duration-300 '>
                    Cheak your email & click the link-
                    <TypeAnimation
                      sequence={[
                        '  to active  your account',
                        1000,
                        ' to active  your account',
                        1000,
                      ]}
                      wrapper="span"
                      speed={30}
                      style={{ fontSize: '1em', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </h2>
                  <div className='relative'>
                    <img src={email} alt={email} className='mx-auto w-[600px] h-[400px]' />
                    <FaRegHandPointDown className=' text-red-900 duration-500  text-3xl group-hover:text-signBtn absolute top-[93%] left-[50%]' />
                  </div>
                  <div >
                    <button onClick={handleBack} className="px-7 py-2 mt-3 mx-auto border bg-[#5d5a5a] text-white hover:bg-black hover:text-white duration-500 rounded-lg bg-signBtn " >Back to Login</button>
                  </div>
                </div>
                {/* veryfemail */}
              </div>   )
      }








    </section>
  )
}

export default HomePage
