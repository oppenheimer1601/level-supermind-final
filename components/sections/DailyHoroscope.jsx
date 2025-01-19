'use client'
import { useEffect, useState } from "react";
import ZodiacDropdown from "../fragments/ZodiacDropdown"
import { motion } from "motion/react"

const DailyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState('aries');
  const ZodiacText =
    {
      "aries": "Aries, today is all about action. You’ll feel motivated to get things done, but stay organized.",
      "taurus": "Taurus, you may need to step back and reflect. Don’t rush into decisions; take your time.",
      "gemini": "Gemini, communication is key today. Be clear with your words to avoid misunderstandings.",
      "cancer": "Cancer, trust in your intuition today. It will guide you towards positive changes in your life.",
      "leo": "Leo, take charge of your surroundings today. Your leadership will inspire others to follow.",
      "virgo": "Virgo, today is a great day for teamwork. Collaborate with others to achieve your shared goals.",
      "libra": "Libra, balance your work and personal life today. Make time for both to keep the peace.",
      "scorpio": "Scorpio, your determination will lead you through obstacles. Stay focused on the task at hand.",
      "sagittarius": "Sagittarius, take risks today, especially if they lead you closer to your dreams.",
      "capricorn": "Capricorn, today calls for hard work and discipline. Stay focused and you’ll achieve great things.",
      "aquarius": "Aquarius, your mind will be sharp today. It’s a good time for brainstorming new ideas and solutions.",
      "pisces": "Pisces, a bit of daydreaming could be exactly what you need today. Let your imagination run wild."
    }
  return (
    <div className="h-screen w-screen bg-[#100821] pt-20 flex flex-col items-center justify-start text-[#d5d2be]" id="daily-horoscope">
      <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5,delay:0.5,type:"keyframes"}}>
        <div className="w-full px-10 py-6 border-b border-white text-[#d5d2be]">
            <h1 className="text-5xl">Today's Horoscope</h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col w-[50%] border-r items-start justify-start p-6 h-[500px]">
            <ZodiacDropdown sign={selectedSign} setsign={setSelectedSign}/>
            <img src={`/images/${selectedSign.toLowerCase()}.png`} alt={selectedSign} className="w-[350px] h-auto self-center mt-10"/>
          </div>
          <div className="flex w-[50%] items-center justify-center">
            <p className="text-left text-4xl px-10">
              {selectedSign==="aries"&&ZodiacText.aries}
              {selectedSign==="taurus"&&ZodiacText.taurus}
              {selectedSign==="gemini"&&ZodiacText.gemini}
              {selectedSign==="cancer"&&ZodiacText.cancer}
              {selectedSign==="leo"&&ZodiacText.leo}
              {selectedSign==="virgo"&&ZodiacText.virgo}
              {selectedSign==="libra"&&ZodiacText.libra}
              {selectedSign==="scorpio"&&ZodiacText.scorpio}
              {selectedSign==="sagittarius"&&ZodiacText.sagittarius}
              {selectedSign==="capricorn"&&ZodiacText.capricorn}
              {selectedSign==="aquarius"&&ZodiacText.aquarius}
              {selectedSign==="pisces"&&ZodiacText.pisces}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default DailyHoroscope
