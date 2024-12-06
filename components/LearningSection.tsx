"use client"
import React from 'react'
import LearningCard from './LearningCard'
import {motion} from "framer-motion"

export default function LearningSection() {
  return (
    <section className='px-[135px] py-[64px] flex flex-col gap-[40px] '>

    <div className='flex w-full '>
      <motion.span className="flex flex-col font-semibold text-[44px] leading-[52.8px]"
      initial={{ x:-100 , opacity:0.5, filter:"blur(5px)" }} whileInView={{x:0, opacity:1, filter:"blur(0px) "}} 
      transition={{delay:0.4, duration:0.6}} viewport={{once:true}}>
        Services Populaires Près
        <span>De Chez Vous</span>
      </motion.span>

      <motion.span className="inline-flex flex-col gap-[12px] ml-auto font-semibold text-[20px] leading-normal max-w-[433px] "
      initial={{ x:100 , opacity:0.5, filter:"blur(5px)" }} whileInView={{x:0, opacity:1, filter:"blur(0px) "}} 
      transition={{delay:0.4, duration:0.6}} viewport={{once:true}}>
        Services
        <span className="font-normal text-[16px] ">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper eu
           morbi pretium parturient habitasse viverra pharetra.
        </span>
      </motion.span>
    </div>

    <div className="w-full border border-[#FFC2C4] " ></div>

    <div className='flex gap-[30px] '>
         <LearningCard yStart={100} yEnd={0} />
         <LearningCard  yStart={150} yEnd={0}/>
         <LearningCard  yStart={200} yEnd={0}/>
    </div>
  </section>
  )
}
