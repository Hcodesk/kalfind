"use client"
import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import {motion} from 'framer-motion'


interface CardProps  {
    work : string;
    description : string;
    img: string;
    customStyles? : string;
    titleSize? : string;
    textSize?: string;
    height?:string;
    gap?:string;
    xStart?:number;
    yStart?:number;
    xEnd?:number;
    yEnd?:number;
}

export default function Card({ 
    work,description,
    img, 
    customStyles,
    titleSize="text-[24px]" , 
    textSize = "text-[16px]",
    height = "h-[262px]",
    gap = 'gap-[24px] ',
    xStart=0,
    yStart=0,
    xEnd=0,
    yEnd=0
} : CardProps ) {

  return (
    <motion.div className= {`flex flex-col gap-[16px] ${customStyles} `}
    initial={{ x:xStart , y:yStart , opacity:0.5}} whileInView={{x:xEnd, y:yEnd, opacity:1}} 
    transition={{delay:0.3, duration:0.6}} viewport={{once:true}} >
          <div className= {`relative ${height} w-full rounded-[30px]  overflow-hidden`} >
                <span>
                    <Image src= {img || '/hero.svg' }  fill={true} objectFit='cover' alt='' />
                </span>
          </div>

          <div >
                <div className= {`flex flex-col items-start justify-center  ${gap}`}  >
                    <div className="flex flex-col gap-[16px] ">
                     <span className= {`${titleSize} font-semibold `} > {work} </span>
                        <div className="flex justify-between gap-[12px] ">
                            <span className="min-w-[24px]">
                              <Image src='/MapPin.svg' width={24} height={24} alt=""/>
                            </span>

                            <span className= {`max-w-[328px] ${textSize} whitespace-normal text-[#666666]`} >
                                 {description}
                            </span>
                        </div>

                    </div>
                   
                    <button className= {`flex justify-center max-w-[239px] 
                    ${textSize} gap-2 items-center leading-none border border-[#666666] px-[20px] py-[12px] rounded-[6px] whitespace-nowrap`} >
                        Selectionner un service
                        <ArrowUpRight width={20} height={20} className='text-[#666666] min-w-[20px] ' />
                    </button>
                </div>
          </div>
    </motion.div>
  )
}
