"use client"
import React from 'react'
import { Search } from 'lucide-react';
import { Zap } from 'lucide-react';
import Image from "next/image";
import {motion} from 'framer-motion'
import HeroAnimation from './HeroAnimation';

export default function HeroSection() {
     const container = {
         visible: {
            transition: {
                staggerChildren:0.025
            }
         }
     }

  return (
    <section className='flex items-center justify-between py-[64px] gap-[48px] ' >
            <motion.div initial={{opacity:0, y:0}} whileInView={{opacity:1, y:-20}} transition={{delay:0.1, duration:0.8}}
             viewport={{once:true}}
             className=" flex flex-col justify-center gap-[48px] w-[711px] "> 
                 
                 <motion.div initial='hidden' animate='visible' variants={container} 
                 className='flex flex-col text-[64px] leading-none text-black justify-start whitespace-nowrap'> 
                      <HeroAnimation text=" Tous les professionnels," className='' />
                     <HeroAnimation  text="au meilleur prix." className='text-red-600 font-semibold ' />
                 </motion.div>

                 <div className='relative flex items-center'>
                     <input 
                     type="text" 
                     placeholder='De quoi avez vous besoin d aide ?'
                     aria-label='Search talk'
                     autoComplete='off'

                     className='h-[68px] text-[21px] border border-black w-full px-4
                      rounded-[40px] placeholder:text-[21px] outline-[#FFB543] '/>

                    <div className="absolute flex justify-center items-center text-white right-3 bg-red-600 
                        rounded-full w-[47px] h-[47px] ">
                        <Search />
                    </div>
                 </div>

                 
                 <div className="flex justify-start flex-wrap gap-[18px] w-[711px] ">

                         <motion.span className='py-[9px] px-[18px] flex flex-col justify-center items-center gap-1 border border-bgBlack rounded-[10px] '
                         initial={{ x:-20, scale:0 , opacity:0.5, filter:"blur(10px)" }} whileInView={{x:0, scale:1, opacity:1, filter:"blur(0px) "}} 
                         transition={{delay:0.1, duration:0.4}} viewport={{once:true}} >
                             <Image  src="/Lightning.svg" alt='' width={24} height={24} />
                             Électricien
                         </motion.span>

                         <motion.span className='py-[9px] px-[18px] flex flex-col justify-center items-center gap-1 border border-bgBlack rounded-[10px] '
                         initial={{ x:-20, scale:0 , opacity:0.5, filter:"blur(10px)" }} whileInView={{x:0, scale:1, opacity:1, filter:"blur(0px) "}} 
                         transition={{delay:0.2, duration:0.4}} viewport={{once:true}}>
                             <Image  src="/Pipe.svg" alt='' width={24} height={24} />
                             Plombier
                         </motion.span>

                         <motion.span className='py-[9px] px-[18px] flex flex-col justify-center 
                            items-center gap-1 border border-bgBlack rounded-[10px] '
                            initial={{ x:-20, scale:0 , opacity:0.5, filter:"blur(10px)" }} whileInView={{x:0, scale:1, opacity:1, filter:"blur(0px) "}} 
                         transition={{delay:0.3, duration:0.4}}viewport={{once:true}} >
                             <Image  src="/Log.svg" alt='' width={24} height={24} />
                             Menuisier
                         </motion.span>

                         <motion.span className='py-[9px] px-[18px] flex flex-col justify-center 
                            items-center gap-1 border border-bgBlack rounded-[10px] '
                            initial={{ x:-20, scale:0 , opacity:0.5, filter:"blur(10px)" }} whileInView={{x:0, scale:1, opacity:1, filter:"blur(0px) "}} 
                            transition={{delay:0.4, duration:0.4}}viewport={{once:true}}>
                             <Image  src="/PaintRoller.svg" alt='' width={24} height={24} />
                             Peintre
                         </motion.span>

                         <motion.span className='py-[9px] px-[18px] flex flex-col justify-center 
                            items-center gap-1 border border-bgBlack rounded-[10px] '
                            initial={{ x:-20, scale:0 , opacity:0.5, filter:"blur(10px)" }} whileInView={{x:0, scale:1, opacity:1, filter:"blur(0px) "}} 
                            transition={{delay:0.5, duration:0.4}} viewport={{once:true}} >
                             <Image  src="/Wall.svg" alt='' width={24} height={24} />
                             Maçon
                         </motion.span>

                         <motion.span className='py-[9px] px-[18px] flex flex-col justify-center 
                            items-center gap-1 border border-bgBlack rounded-[10px] '
                            initial={{ x:-20, scale:0 , opacity:0.5, filter:"blur(10px)" }} whileInView={{x:0, scale:1, opacity:1, filter:"blur(0px) "}} 
                            transition={{delay:0.6, duration:0.4}} viewport={{once:true}} >
                             <Image  src="/GridFour.svg" alt='' width={24} height={24} />
                             Carreleur
                         </motion.span>

                         <motion.span className='py-[9px] px-[18px] flex  justify-center 
                            items-center gap-1 border border-bgBlack rounded-[10px] '
                            initial={{ x:-20, scale:0 , opacity:0.5, filter:"blur(10px)" }} whileInView={{x:0, scale:1, opacity:1, filter:"blur(0px) "}} 
                            transition={{delay:0.6, duration:0.4}}viewport={{once:true}}>
                            <Image  src="/DotsThree.svg" alt='' width={24} height={24} />
                             Voir plus
                         </motion.span>
                </div>
            </motion.div>

            <motion.div initial={{opacity:0, x:50 }} whileInView={{opacity:1, x:0 }} 
      transition={{dalay:0.3, duration:1.5, ease:[0.25,0.1,0.25,1] }} viewport={{once:true}} >
                <Image src="/hero.svg" alt="Professionnals" width={578} height={553}/>    
            </motion.div>  
    </section>
  )
}
