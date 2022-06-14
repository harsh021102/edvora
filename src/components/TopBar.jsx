import React from 'react'
import ldr from '../image/ldr.jpg'
const TopBar = ({userData}) => {
  // console.log("top",userData.name)
  return (
        <div className="flex h-20 justify-between bg-topbar-black">
            <h1 className='text-edvora-white text-4xl font-SF mt-5 ml-11'>Edvora</h1>
            <div className='flex gap-4 mr-8'>
                <h1 className='text-xl text-edvora-white py-6 font-inter'>{userData.name}</h1>
                <img src={userData.url} alt="" className='rounded-full w-11 h-11 my-4'/>
            </div>
        </div>
  )
}

export default TopBar