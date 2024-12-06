"use client"
import React from 'react'
import Image from "next/image";
import quoteBg from "@/public/quoteBG.svg"
import {motion} from 'framer-motion'
import { useState,useRef,useCallback } from 'react';

export default function Quote() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setCursorPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }, [])

  return (
    <motion.section
    ref={cardRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
     className="flex relative overflow-hidden py-[64px] my-[64px]  bg-quoteBg h-[506px] px-[126px] bg-no-repeat min-w-[1344px] "
    initial={{ y:100 , opacity:0.5, filter:"blur(5px)" }} whileInView={{y:0, opacity:1, filter:"blur(0px) "}} 
    transition={{delay:0.4, duration:0.6}} viewport={{once:true}}>
      <div className="flex flex-col gap-[48.53px] ">
        <div className="max-w-[646px] flex flex-col text-white gap-[29.87px] ">
          <div className="flex flex-col"> 
            <span className='text-[14.93px] ' >Lorem ipsum dolor sit amet</span>
            <span className="text-[44.8px] leading-[53.76px] font-semibold ">
              Besoin de quelqu'un pour vos travaux d'aménagement ou d'intérieur
              ?
            </span>
          </div>

          <span>
            Lorem ipsum dolor sit amet consectetur. Mi netus sed in sed
            tincidunt odio malesuada. Quis id eu ultricies sed tortor massa mi
            feugiat euismod.
          </span>
        </div>

        <button className="px-[33.6px] py-[14.93px] rounded-[6px] text-[14.93px] bg-white font-semibold max-w-[157.2px] ">
          Commencer
        </button>
      </div>

      {isHovering && (
        <div 
          className="absolute rounded-[6px] p-4 bg-white opacity-80 pointer-events-none transition-transform ease-linear"
          style={{
           
            transform: `translate(${cursorPosition.x }px, ${cursorPosition.y }px)`,
          }}
        >Travailleurs Qualifiés🔨</div>
      )}
    </motion.section>
  );
}
