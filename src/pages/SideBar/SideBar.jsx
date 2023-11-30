import React from 'react'

function SideBar({className}) {
  return (
    <section className={`${className}`}>
     <div className='h-screen bg-black text-white'>
        <h2>InstAbout</h2>
        <div>
            <div className='flex flex-col'>
             <div>
              <p>Home</p>
             </div>
            </div>
        </div>
     </div>
    </section>
  )
}

export default SideBar
