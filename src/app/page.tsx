'use client'

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Certifications } from "@/sections/Certifications";
import { About } from "@/sections/About";
import { Footer } from "@/sections/Footer";

import Light from "@/assets/icons/light.svg";
import Dark from "@/assets/icons/dark.svg";

import { useState, useEffect } from 'react'


export default function Home() {
  let [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect( () => {}, [darkMode])

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="dark:bg-gray-900 bg-gray-200 transition-colors duration-500 text-white antialiased font-sans">
        <button className="fixed w-12 h-12 bottom-12 right-12 bg-white rounded-full text-gray-800 font-semibold z-50 cursor-pointer shadow-lg dark:shadow-[#fbc7d4]/40" onClick={toggleDarkMode}>
          <span>{darkMode ? <Light className="dark-mode-icon"/> : <Dark className="dark-mode-icon"/>}</span>
        </button>
        
        <Header />
        <Hero />
        <About />  
        <Certifications /> 
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
