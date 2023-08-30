import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { BsPersonCircle } from "react-icons/bs"
import {AiOutlineClose} from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram} from 'react-icons/fa'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const[logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

  return (
    <div className='flex px-4 items-center h-20 justify-between absolute z-10 w-full text-white'>
         <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
        </div>
        <div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>Views</li>
                <li>Books</li>
            </ul>
        </div>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2'  size={20}/>
            <BsPersonCircle size={20}/>
        </div>

         {/* hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4  size={30}/> }
        </div>

            {/* mobile menu deop down */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
                    <h1>BEACHES.</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Destination</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>Views</li>
                <li className='border-b'>Books</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icons'/>
                    <FaTwitter className='icons'/>
                    <FaYoutube className='icons'/>
                    <FaPinterest className='icons'/> 
                    <FaInstagram className='icons'/>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar