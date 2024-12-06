"use client"
import React from 'react'
import Card from './Card';
import {motion} from 'framer-motion'

export default function ServicesSection() {
  return (
    <section className='px-[135px] py-[64px] flex flex-col gap-[40px]'>

      <motion.div initial={{opacity:0, y:50 }} whileInView={{opacity:1, y:0 }} 
      transition={{dalay:0.3, duration: 0.5, ease:[0.25,0.1,0.25,1] }} viewport={{once:true}} className='flex w-full '>
        <motion.span className="flex flex-col font-semibold text-[44px] leading-[52.8px]"
          initial={{ y:100 , opacity:0.5, filter:"blur(5px)" }} whileInView={{y:0, opacity:1, filter:"blur(0px) "}} 
          transition={{delay:0.4, duration:0.6}} viewport={{once:true}}>
          Services Populaires Près
          <span>De Chez Vous</span>
        </motion.span>

        <motion.span className="inline-flex flex-col gap-[12px] ml-auto font-semibold text-[20px] leading-normal max-w-[433px] "
          initial={{ y:100 , opacity:0.5, filter:"blur(5px)" }} whileInView={{y:0, opacity:1, filter:"blur(0px) "}} 
          transition={{delay:0.4, duration:0.6}} viewport={{once:true}}>
          Services
          <span className="font-normal text-[16px] ">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper eu
             morbi pretium parturient habitasse viverra pharetra.
          </span>
        </motion.span>
      </motion.div>

      <motion.div className="w-full border border-[#FFC2C4] my-4 " 
        initial={{ x:-20, scale:0 , opacity:0.5 }} whileInView={{x:0, scale:1, opacity:1,}} 
        transition={{delay:0.3, duration:0.5, ease:[0.25,0.1,0.25,1] }} viewport={{once:true}}></motion.div>

      <motion.div className='flex gap-[30px] justify-center '
        initial={{opacity:0.5}} whileInView={{opacity:1}} 
        transition={{delay:0.2, duration:0.6}} viewport={{once:true}}>
           <Card
            work="Électricien" 
            xStart={-20}
            xEnd={0} 
            img='/cardImage1.jpg' description='Lorem ipsum dolor sit amet consectetur. Cras scelerisque eleifend lobortis egestas.' 
            />

           <Card
           yStart={20}
           yEnd={0} 
            work="Plombier" 
            img='/img2.jpg' description='Lorem ipsum dolor sit amet consectetur. Cras scelerisque eleifend lobortis egestas.' 
            />

           <Card
            work="Menuisier" 
            xStart={20}
            xEnd={0} 
            img='/img3.jpg' description='Lorem ipsum dolor sit amet consectetur. Cras scelerisque eleifend lobortis egestas.' 
            />
      </motion.div>
    </section>
  );
}
