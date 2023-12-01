import React from 'react'
import SideBar from '../SideBar/SideBar'
import TodoAbout from '../TodoAbout/TodoAbout'

function HomePage() {
  return (
    <div  >
 <div>
  <div className='flex '>
  <SideBar className=" w-[17%]"/>
  <div class="border-r-[1px] border-[#212121]"></div>
<div className='bg-[#000000] w-[83%] '>
<TodoAbout  />
</div>
  </div>
 </div>
  
    </div>
  )
}

export default HomePage
