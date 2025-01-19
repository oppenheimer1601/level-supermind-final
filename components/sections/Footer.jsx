import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='w-screen h-fit text-[#d5d2be] flex items-center justify-between px-20 py-10 bg-black' id='footer'>
        <div className='flex flex-col'>
            <h1 className='text-7xl'>
                Guided by the cosmos,<br /> inspired by you.
            </h1>
            <div className='flex gap-3 text-3xl pt-5'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
        </div>
        <div>
            <ul className='flex flex-col gap-2 items-start justify-center w-fit text-lg'>
            <li className='text-2xl underline flex items-end'>
                LunaVista. <MdArrowOutward className='text-4xl'/>
            </li>
            <li>
                Home
            </li>
            <li>
                Contact
            </li>
            <li>
                About us
            </li>
            <li>
                Explore
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
