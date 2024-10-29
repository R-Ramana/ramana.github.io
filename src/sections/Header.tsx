'use client'

import React from 'react'
import { useEffect, useState } from 'react'

export const Header = () => {
  let [activeSection, setActiveSection] = useState('home')

  useEffect(() => {

      let about = document.getElementById('about')
      let projects = document.getElementById('projects')
      let home = document.getElementById('home')

      let sections = [about, projects, home]

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      };

    const observer = new IntersectionObserver(entries => {
  
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if (entry.target.id == 'home'){
                setActiveSection('home')
              }
              if (entry.target.id == 'projects'){
                setActiveSection('projects')
              }
              if (entry.target.id == 'about'){
                setActiveSection('about')
              }
          }
      })
    }, observerOptions)
  
    sections?.forEach(section => {
      section && observer.observe(section)
    })
  }, [])


  return ( 
    <div className="flex justify-center items-center fixed top-5 w-full z-50">
      <nav className="flex gap-1 p-0.5 border dark:border-white/15 border-gray-800/15 rounded-full dark:bg-white/10 bg-gray-100/70 backdrop-blur">
        <a href="#home" className={`nav-item ${activeSection == 'home' && "nav-active"}`}>Home</a>
        <a href="#about" className={`nav-item ${activeSection == 'about' && "nav-active"}`}>About</a>
        <a href="#projects" className={`nav-item ${activeSection == 'projects' && "nav-active"}`}>Projects</a>
        <a href="mailto:ramanalfc%40yahoo.com.sg?subject=Let%27s%20Connect!" className="nav-item dark:from-white dark:to-white bg-gradient-to-r from-[#9796f0] to-[#fbc7d4] dark:text-gray-900 text-white">Contact</a>
      </nav>
    </div>
  );
};
