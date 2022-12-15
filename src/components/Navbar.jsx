import React from 'react'
import { logo } from '../assets'

const Navbar = () => {
  return (
    <div className='flex flex-row'>
      <img src={logo} alt="logo" className=' h-[43px] w-[50px] '/>
    </div>
  )
}

export default Navbar