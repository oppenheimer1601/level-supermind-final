
import Spline from '@splinetool/react-spline';
import { motion } from "motion/react"
import { FaArrowRightLong } from "react-icons/fa6";
import { GiSun } from "react-icons/gi";

const Hero = () => {
  return (
    <div className='w-screen h-screen bg-[#100821] flex items-center justify-center flex-col text-[#d5d2be]'>
      <Spline
        scene="https://prod.spline.design/FjA66sa8DZSxFHbk/scene.splinecode" 
      />
      <div className='absolute w-full h-full flex flex-col items-center justify-center z-20'>
        <motion.h1 className='text-[200px] font-bold' initial={{opacity:0,y:-60}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>Luna Vista.</motion.h1>
        <motion.p className='text-xl tracking-wider' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:0.5}}>Your cosmic journey starts here | Align your path with the stars above</motion.p>
        <motion.div className='flex items-center justify-center gap-12 text-2xl mt-20' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:1}}>
            <motion.a className='px-10 py-6 border text-white border-white text-glow flex items-center gap-3 font-semibold' whileTap={{scale:0.9,opacity:0.7}} whileHover={{backgroundColor:"white",color:"#100821"}} href='#daily-horoscope'>Today's Horoscope <GiSun className='text-2xl'/></motion.a>
            <motion.a className='px-10 py-6 border text-white text-glow bg-[#100821] flex items-center gap-3 font-semibold' whileTap={{scale:0.9,opacity:0.7}} whileHover={{backgroundColor:"white",color:"#100821"}} href='/get-started'>Start Free <FaArrowRightLong className='text-2xl'/></motion.a>
        </motion.div>
      </div>
      <div className='absolute w-full h-full flex flex-col text--[#d5d2be] items-start justify-between px-20 pt-20 text-[150px] z-10'>
        <div className='w-full flex items-center justify-between'>
            <img src="/images/aries.png" alt="aries" className='w-[300px] h-auto'/>
            <img src="/images/gemini.png" alt="gemini" className='w-[250px] h-auto -rotate-45'/>
        </div>
        <div className='w-full flex items-center justify-between'>
          <img src="/images/leo.png" alt="leo" className='w-[250px] h-auto rotate-45'/>
          <img src="/images/libra.png" alt="libra" className='w-[250px] h-auto '/>
        </div>
      </div>
    </div>
  )
}

export default Hero
