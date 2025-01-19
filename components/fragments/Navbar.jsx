import React from 'react'
import { RiHome3Fill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='w-screen flex h-fit items-baseline justify-between border-b border-white text-[#d5d2be] px-12 py-4 fixed bg-[#100821]  bg-opacity-75 backdrop-blur-md backdrop-filter z-50'>
      <h1 className='text-3xl'>
        LunaVista.
      </h1>
      <ul className='flex gap-10 items-center justify-center w-fit text-lg'>
        <a className='flex items-center gap-3' href='/'>
            <RiHome3Fill className='text-xl'/>
            Home
        </a>
        <a className='flex items-center gap-3' href='#footer'>
            <IoMdPerson className='text-xl'/>
            Contact
        </a>
        <a className='flex items-center gap-3' href='/get-started'>
            <MdArrowOutward className='text-xl'/>
            Explore
        </a>
      </ul>
    </div>
  )
}

export default Navbar
