import React from 'react'
import SideBar from '../SideBar/SideBar'
import TodosAbout2 from '../TodoAbout2/TodosAbout2'

function Photos() {
  return (
    <div>
    <div className='flex '>
    <SideBar className=" w-[17%]"/>
    <div class="border-r-[1px] border-[#212121]"></div>
  <div className='bg-[#000000] w-[83%] '>
<TodosAbout2 />
  </div>
    </div>
   </div>
  )
}

export default Photos
