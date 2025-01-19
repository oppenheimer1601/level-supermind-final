'use client'
import KundliInput from '@/components/sections/KundliInput'
import React, { useState } from 'react'
import Markdown from "react-markdown";

const page = () => {
  const [kundliImage,setKundliImage] = useState(null);
  const [kundliHouseInfo,setKundliHouseInfo] = useState(null)
  const [Insights,setInsights] = useState(null)

  const handlePrint = () => {
    window.print();
  }
  return (
    <div className='min-h-screen w-screen m-0 p-0 bg-[#100821] text-[#d5d2be]'>
      <div className='w-full px-12 py-4'>
            <h1 className='text-3xl'>
                LunaVista.
            </h1>
        </div>
      {!kundliImage&&<KundliInput setimg={setKundliImage} setInfo={setKundliHouseInfo} setIns={setInsights}/>}
      {kundliImage && (
        <div className='flex flex-col items-center justify-start gap-4 px-10 mt-10'>
          <img src={kundliImage} alt="Kundli" />
          {kundliHouseInfo&&<div>
            {kundliHouseInfo.map((data)=>(
              <div key={data.current_house} className='flex flex-col w-full h-fit p-2 border border-white text-[#d5d2be]'>
                <span className='text-lg'>{data.current_house}</span>
                <span className='text-lg'>{data.verbal_location}</span>
                <span className='text-sm'>{data.personalised_prediction}</span>
              </div>
            ))}
          </div>}
        </div>
      )}
      {Insights&&
      <div className='px-10 mt-10 text-xl'>
      <Markdown>
        {Insights}
      </Markdown>
      <button className='mt-10 px-10 py-4 text-xl bg-white text-black' onClick={handlePrint}>Print</button>
      </div>
      }

    </div>
  )
}

export default page
