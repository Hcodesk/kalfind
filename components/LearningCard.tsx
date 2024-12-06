"use client"
import React from 'react'
import Image from "next/image";
import {motion} from 'framer-motion'
import { ShineButtonRed } from './ui/ShineButtonRed';

interface LearningCardProps {
  xStart?:number;
  yStart?:number;
  xEnd?:number;
  yEnd?:number;
}

export default function LearningCard({ yStart,yEnd,xStart,xEnd }: LearningCardProps ) {
  return (
    <motion.div className="flex flex-col w-[370px] gap-[36px] items-center border rounded-[10px] pb-[24px] "
    initial={{ y:yStart, x:xStart , opacity:0.5, filter:"blur(5px)" }} whileInView={{y:yEnd, x:xEnd ,opacity:1, filter:"blur(0px) "}} 
       transition={{delay:0.4, duration:0.6}} viewport={{once:true}}>
      
      <div className="relative h-[270px] overflow-hidden rounded-t-[10px] w-full">
        <Image src="/woman.jpg" fill={true} style={{ objectFit: 'cover' }} alt="" />
      </div>

      <div className="flex flex-col gap-[24px] mx-[24px] max-w-[320px] items-center text-center justify-center">
        <div className="flex flex-col items-center gap-[12px] ">
          
          <span className="font-bold text-[24px] leading-[28.8px] ">
            Comment devenir électricien
          </span>

          <span className="text-[14px] text-[#666666] ">
            3 videos . 1 Heure
          </span>
        </div>

        <span className="text-[#666666] text-[16px] ">
          Lorem ipsum dolor sit amet consectetur. Orci faucibus in sed integer
          consectetur 
        </span>
        
        <ShineButtonRed>
           Commencer à apprendre
        </ShineButtonRed>
      </div>
      
    </motion.div>
  );
}
