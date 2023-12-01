import React from 'react'
import Product from '../../assets/Product4.png'
import Flex from '../../Components/Flex'
function TodoAbout() {
  return (
    <section className=' '>
        <div className=' h-screen text-white  px-44 pt-10' >
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

             <div className=' w-[520px] px-4 py-4 bg-[#242526] ml-28'>
        <Flex className=" gap-x-4">
        <img src={Product} alt={Product} className='w-[50px] h-[50px] rounded-full' />
        <input type="text" placeholder="What's your mind?" className='w-[400px] rounded-2xl px-3 hover:bg-[#4e4f50] bg-[#3a3b3c] focus:outline-none' />
        </Flex>
        <div className='border border-[#37383a]'></div>
            </div>
            
            </div>
   
    </section>
  )
}

export default TodoAbout
