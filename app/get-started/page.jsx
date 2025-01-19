'use client'
import React from 'react'
import { motion } from "motion/react"
import ChatBot from '@/components/fragments/ChatBot'
import { FaArrowRightLong } from 'react-icons/fa6'

const ChatBotSection = () => {
  return (
    <div className='h-screen w-screen m-0 p-0 bg-[#100821] text-[#d5d2be] flex flex-col items-center justify-start'>
        <div className='w-full px-12 py-4'>
            <h1 className='text-3xl'>
                LunaVista.
            </h1>
        </div>
        <div className='flex items-center justify-center h-full py-10 px-10 w-full gap-2'>
            <motion.div className='border-white border h-full flex flex-col items-center justify-start w-[50%] p-4' whileHover={{borderRadius:30}}>
                <h1 className='text-6xl'>
                    Your Personal Spiritual Advisor
                </h1>
                <ChatBot/>
            </motion.div>
            <motion.div className='border-white border h-full flex flex-col items-center justify-between w-[50%] p-4' whileHover={{borderRadius:30}}>
                <h1 className='text-8xl'>
                    Get Your Kundli Generated within Minutes !
                </h1>
                <div className='flex items-start justify-between px-20'>
                    <img src="/images/kundli.svg" alt="kundli" className='h-[200px] w-auto' />
                    <p className='w-[40%] text-xl'>
                        Answers to
                        Everything you need to know about yourself.
                    </p>
                </div>
                <motion.a className='mt-10 bg-white text-black rounded-xl px-10 py-4 text-2xl flex items-center gap-3' whileHover={{gap:"50px"}} href='/get-started/generate-kundli'>
                    Let's Start <FaArrowRightLong/>
                </motion.a>
            </motion.div>
        </div>
    </div>
  )
}

export default ChatBotSection
