'use client'
import { motion } from "motion/react";
import { useState } from "react";

const HoroscopeInput = ({setimg,setInfo,setIns}) => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    dob: "",
    tob: "",
    latitude: "",
    longitude: "",
    timezone: "",
    email: "",
  });
  const [loading,setLoading] = useState(false)

  const timezones = [
    { offset: "+14.00", location: "Line Islands, Kiribati" },
    { offset: "+13.75", location: "Chatham Islands, New Zealand" },
    { offset: "+13.00", location: "New Zealand Daylight Time" },
    { offset: "+12.75", location: "Chatham Islands Standard Time" },
    { offset: "+12.00", location: "Fiji, Gilbert Islands" },
    { offset: "+11.00", location: "Solomon Islands, Vanuatu" },
    { offset: "+10.50", location: "Australian Central Daylight" },
    { offset: "+10.00", location: "Australia (Eastern), Papua New Guinea" },
    { offset: "+9.50", location: "Australian Central Standard" },
    { offset: "+9.00", location: "Japan, Korea Standard Time" },
    { offset: "+8.00", location: "China, Australia (Western)" },
    { offset: "+7.00", location: "Western Indonesia" },
    { offset: "+6.50", location: "Myanmar Time" },
    { offset: "+6.00", location: "Bangladesh, Bhutan" },
    { offset: "+5.75", location: "Nepal Time" },
    { offset: "+5.50", location: "India Standard Time" },
    { offset: "+5.00", location: "Pakistan Standard Time" },
    { offset: "+4.50", location: "Afghanistan Time" },
    { offset: "+4.00", location: "Gulf Standard, Mauritius" },
    { offset: "+3.50", location: "Iran Standard Time" },
    { offset: "+3.00", location: "Arabian, East Africa" },
    { offset: "+2.00", location: "South Africa, Central Africa" },
    { offset: "+1.00", location: "Central Europe, West Africa" },
    { offset: "±0.00", location: "Coordinated Universal Time" },
    { offset: "-1.00", location: "Cape Verde Time" },
    { offset: "-2.00", location: "South Georgia Time" },
    { offset: "-3.00", location: "Brazil, Argentina" },
    { offset: "-3.50", location: "Newfoundland Standard Time" },
    { offset: "-4.00", location: "Atlantic Standard Time" },
    { offset: "-5.00", location: "Eastern Standard Time" },
    { offset: "-6.00", location: "Central Standard Time" },
    { offset: "-7.00", location: "Mountain Standard Time" },
    { offset: "-8.00", location: "Pacific Standard Time" },
    { offset: "-9.00", location: "Alaska Standard Time" },
    { offset: "-9.50", location: "Marquesas Islands Time" },
    { offset: "-10.00", location: "Hawaii Standard Time" },
    { offset: "-11.00", location: "Niue Time" },
    { offset: "-12.00", location: "Anywhere on Earth" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async() => {
    setLoading(true)
    const dob = convertDateTime(formData.dob)
    console.log(dob)
    console.log(process.env.NEXT_PUBLIC_CHART_API_KEY)
    const response1 = await fetch(`https://api.vedicastroapi.com/v3-json/horoscope/chart-image?dob=${dob}&tob=${formData.tob}&lat=${formData.latitude}&lon=${formData.longitude}&tz=${formData.timezone}&div=D1&color=%23ff3366&style=north&api_key=${process.env.NEXT_PUBLIC_CHART_API_KEY}&lang=en&font_size=12&font_style=roboto&colorful_planets=0&size=300&stroke=2&format=base64&year=2025&transit_date=17/01/2025`,{
      method:"GET"
    })
    const response2 = await fetch(`https://api.vedicastroapi.com/v3-json/horoscope/personal-characteristics?dob=${dob}&tob=${formData.tob}&lat=${formData.latitude}&lon=${formData.longitude}&tz=5.5&api_key=${process.env.NEXT_PUBLIC_CHART_API_KEY}&lang=en`,{
      method:"GET"
    })
    const response3 = await fetch("/api/get-chatbot-response",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue: `Insights on career, relationships, personal growth, family, and social connections based on ${dob}` }),
    })
    setLoading(false);
    const result3 = await response3.json();
    const result1 = await response1.text();
    const result2 = await response2.json();
    setInfo(result2.response);
    setimg(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(result1)}`);
    setIns(result3?.message)

  };

  const convertDateTime = (dateStr) => {
    // Convert date from mm/dd/yyyy to dd/mm/yyyy
    const dateParts = dateStr.split('-');
    const newDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    
    return newDate;
}

  return (
    <motion.div
      className="min-h-screen bg-[#100821] text-[#d5d2be] flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl">
        {/* Header */}
        <h1 className="text-5xl font-light mb-6">
          Cast your chart & get your horoscope
        </h1>

        {/* Sentence with Inputs */}
        <p className="text-2xl font-light leading-[50px]">
          Hey starry soul! My name is
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="your name"
            className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-54 mx-2 placeholder-gray-500"
          />
          I was born in
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="a city"
            className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-48 mx-2 placeholder-gray-500"
          />
          on
          <input
            type="date"
            name="dob"
            value={formData.dob}
            placeholder="dd-mm-yyyy"
            min="1950-01-01"
            onChange={handleInputChange}
            className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-52 mx-2 placeholder-gray-500"
          />
          at
          <input
            type="time"
            name="tob"
            value={formData.tob}
            onChange={handleInputChange}
            className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-48 mx-2 placeholder-gray-500"
          />
          . My coordinates are Latitude
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleInputChange}
            placeholder="e.g., 12.34 °N"
            className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-48 mx-2 placeholder-gray-500"
          />
          and Longitude
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleInputChange}
            placeholder="e.g., 56.78 °E"
            className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-48 mx-2 placeholder-gray-500"
          />
          . My timezone is
          <select
            name="timezone"
            value={formData.timezone}
            onChange={handleInputChange}
            className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-56 mx-2 text-center placeholder-gray-500"
          >
            <option value="" disabled>
              Select timezone
            </option>
            {timezones.map((zone) => (
              <option key={zone.offset} value={zone.offset} className="text-black">
                {zone.location}
              </option>
            ))}
          </select>
          . My email is
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email address"
            className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white w-[300px] mx-2 placeholder-gray-500"
          />
          .
        </p>

        {/* Button */}
        {!loading?<button
          onClick={handleSubmit}
          className="mt-10 text-2xl px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
        >
          Get Your Chart
        </button>:<span className="text-xl">Loading... Please Wait...</span>}
      </div>
    </motion.div>
  );
};

export default HoroscopeInput;
