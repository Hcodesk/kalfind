"use client"
import AssuranceSection from "@/components/ServicesSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Quote from "@/components/Quote";
import CardsSection from "@/components/CardsSection";
import ServicesSection from "@/components/ServicesSection";
import LearningSection from "@/components/LearningSection";
import SvgComponent from "@/components/HeroSVG";
import Lenis from "lenis"
import {useEffect} from 'react'

export default function Home() {
 useEffect(() => {
    window.scrollTo(0, 0);
     const lenis = new Lenis();
     function raf(time: any){
      lenis.raf(time);
      requestAnimationFrame(raf)
     }
     requestAnimationFrame(raf)

     return () => {
      lenis.destroy();
    };
 }, [])

  return (
      <main className='flex flex-col  2xl:items-center w-full '>
           <HeroSection/>
           <ServicesSection/>
           <Quote/>
           <CardsSection/>
           <LearningSection/>
           {/* <SvgComponent/> */}
      </main>
  );
}
