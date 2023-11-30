import React from 'react'
import Product from '../../assets/Product4.png'
import Flex from '../../Components/Flex'
function TodoAbout() {
  return (
    <section>
        <div className=' h-screen px-36 pt-14' >
               <Flex className="   ">
                <div>
                    <img src={Product} alt={Product} className=' w[200px] h-[200px] rounded-full' />
                </div>
                <div className=' absolute top-[90px] left-[650px]'>
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
                </div>
             </Flex>
            
            </div>
   
    </section>
  )
}

export default TodoAbout
