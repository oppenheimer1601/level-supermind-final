'use client'
import { useState } from "react";

const zodiacSigns = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

export default function ZodiacDropdown({sign,setsign}) {
  

  return (
    <div className="relative w-[200px]">
      <select
        value={sign}
        onChange={(e) => setsign(e.target.value)}
        className=" text-xl block w-full px-4 py-2 text-[#d5d2be] bg-transparent border border-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="" disabled>
          Select Zodiac
        </option>
        {zodiacSigns.map((sign) => (
          <option key={sign} value={sign}>
            {sign}
          </option>
        ))}
      </select>
    </div>
  );
}
