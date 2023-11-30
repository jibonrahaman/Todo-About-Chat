import React from 'react'
import SideBar from '../SideBar/SideBar'
import TodoAbout from '../TodoAbout/TodoAbout'

function HomePage() {
  return (
    <div  >
 <div>
  <div className='flex'>
  <SideBar className=" w-[250px]"/>
  <div class="border-r-[1px] border-[#212121]"></div>
 <TodoAbout />
  </div>
 </div>
  
    </div>
  )
}

export default HomePage
