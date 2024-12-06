"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import {motion} from 'framer-motion'
import { ShineButton } from './ui/ShineButton';

export default function Navbar() {
  return (
    <motion.nav className='flex w-full '
    initial={{opacity:0, y:-50 }} whileInView={{opacity:1, y:0 }} 
      transition={{duration:0.8 }} viewport={{once:true}} >
      <div className="flex text-sm gap-4 text-black items-center flex-col sm:flex-row ">
        <span>
          <Image src="/logo.svg" width={67.43} height={49.9} alt=''/>
        </span>
        <span>
          <Link href="#"> S'inscrire</Link>
        </span>
        <span>
          <Link href="#">Connexion</Link>
        </span>
      </div>

      <div className="ml-auto">
        <ShineButton>
           Devenir prestataire
        </ShineButton>
      </div>
    </motion.nav>
  );
}
