'use client'
import Navbar from "@/components/fragments/Navbar";
import Aboutus from "@/components/sections/Aboutus";
import DailyHoroscope from "@/components/sections/DailyHoroscope";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="m-0 p-0 container">
      <Navbar/>
      <Hero/>
      <DailyHoroscope/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}
