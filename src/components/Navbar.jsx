import React from 'react'
import { logo } from '../assets'

const Navbar = () => {
  return (
    <div className='flex py-5 items-center'>
      <div className='flex flex-row items-center'>
          <img src={logo} alt="logo" className=' h-[43px] w-[50px] mr-4'/>
          <h1 className='text-[32px] font-bold'>NFT <span className='text-lightBlue'>core</span></h1>
      </div>

        <ul className='list-none justify-end flex-1'>
          <li>Discover</li>
          <li>Marketplace</li>
          <li>How it Works</li>
        </ul>
    </div>
  )
}

export default Navbar